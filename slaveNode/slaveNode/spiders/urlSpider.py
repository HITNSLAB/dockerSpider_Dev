# -*- coding: utf-8 -*-

import scrapy, sys
from scrapy.selector import Selector
from scrapy.spiders import Rule
from scrapy.linkextractors import LinkExtractor
from scrapy_redis.spiders import RedisCrawlSpider
from slaveNode.items import SlavenodeUrlItem
from parse_rules import *
from redis import exceptions
from scrapy.http import Request


class UrlSpider(RedisCrawlSpider):
    name = "urlSpider"
    redis_key = 'urlSpider:start_urls'
    template_provider = TemplateProvider()
    raw_parse_rules = template_provider.get_parse_rules(name)
    if 'process_value' in raw_parse_rules['link_extractor']:
        raw_parse_rules['link_extractor']['process_value'] = eval(raw_parse_rules['link_extractor']['process_value'])
    rules = (
        Rule(
            LinkExtractor(**raw_parse_rules['link_extractor']),
            callback='parse_url',
            follow=False,
            process_links='push_follow_db'
        ),
        # Rule(LinkExtractor(allow=('forum-\d+-\d+\.html'), deny=('forum-\d+-1\.html')), callback='parse_url',
        #      follow=True),
    )

    def parse_url(self, response):
        sel = Selector(response)
        item = SlavenodeUrlItem()
        urls = sel.xpath(self.raw_parse_rules['rules']).extract()
        # remove duplicate url
        urls = list(set(urls))
        # return item['url'] as list, and divide the list in pipeline
        item['url'] = [self.fix_url(v) for v in urls]
        try:
            yield item
        except exceptions.ConnectionError as e:
            self.logger.error(
                'Redis connection error when parsing url, exception %s, message <%s>, response url <%s>, retrying...' % (
                    Exception, e.message, response.url)
            )
            yield Request(url=response.url, callback=self.parse_url, dont_filter=True)
        except exceptions.ResponseError as e:
            self.logger.critical('parse_url failed, exception: %s, message %s ,now shut down...' % (e, e.message))
            self.crawler.engine.close_spider(self, reason=e.message)
        except Exception as e:
            self.logger.error('parse_url failed, exception %s, message <%s>, response url <%s>, skipped this item' % (
                Exception, e.message, response.url))

            # def check_new_rules(self):
            #     new_parse_rules = UrlSpider.template_provider.get_parse_rules(UrlSpider.name)
            #     if new_parse_rules != UrlSpider.raw_parse_rules:
            #         UrlSpider.raw_parse_rules = new_parse_rules

    def push_follow_db(self, links):
        # print 'Links = %s\n'%links
        if links is not None:
            # print 'rrrrr = %s\n' % links
            for link in links:
                self.server.rpush(self.redis_key, link.url)
            return links

    def fix_url(self, url):
        if 'process_value' in self.raw_parse_rules and not hasattr(self, 'process_func'):
            try:
                self.process_func = eval(self.raw_parse_rules['process_value'])
            except Exception as e:
                self.logger.error(
                    "eval rules['process_value'] failed, exception: %s, message <%s>, remain raw url..." % (
                        Exception, e.message))

        if hasattr(self, 'process_func') and callable(self.process_func):
            try:
                return self.process_func(url)
            except Exception as e:
                self.logger.error('func call "process_func" failed, exception: %s, message <%s>, remain raw url...' % (
                    Exception, e.message))
                return url
        else:
            return url
