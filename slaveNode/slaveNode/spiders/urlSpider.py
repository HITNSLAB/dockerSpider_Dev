# -*- coding: utf-8 -*-

import urllib

from redis import exceptions
from scrapy.http import Request
from scrapy.linkextractors import LinkExtractor
from scrapy.selector import Selector
from scrapy.spiders import Rule
from scrapy_redis.spiders import RedisCrawlSpider
from slaveNode.utils.links_process import *

from parse_rules import *
from slaveNode.items import SlavenodeUrlItem
from slaveNode.scrapy_redis_bf.dupefilter import RFPDupeFilter


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
            process_links=process_links
            # process_links='push_follow_db'
        ),
    )
    filter = None

    def parse_url(self, response):
        if not UrlSpider.filter:
            UrlSpider.filter = RFPDupeFilter(self.server, self.settings.get('DUPEFILTER_KEY', '%(spider)s:dupefilter'))
        item = SlavenodeUrlItem()
        urls = Selector(response).xpath(self.raw_parse_rules['rules']).extract()
        # remove duplicate url
        # urls = list(set(urls))
        # return item['url'] as list, and divide the list in pipeline
        tp = []
        for v in urls:
            res = fix_url(v)
            if res:
                if not UrlSpider.filter.request_seen(Request(url=res)):
                    tp.append(res)
                    # else:
                    #     self.server.lrem(self.redis_key, count=0, value=res)

        item['url'] = set(tp)
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

            # @staticmethod
            # def fix_url(url):
            #     type, path = urllib.splittype(url)
            #     host, _ = urllib.splithost(path)
            #     if not type:
            #         type = 'http'
            #
            #     if type not in ('http', 'https') or not host:
            #         return ''
            #     return '%s://%s' % (type, host)
            #
            # def process_links(self, links):
            #     for link in links:
            #         link.url = self.fix_url(link.url)
            #     return links


            # if 'process_value' in self.raw_parse_rules and not hasattr(self, 'process_func'):
            #     try:
            #         self.process_func = eval(self.raw_parse_rules['process_value'])
            #     except Exception as e:
            #         self.logger.error(
            #             "eval rules['process_value'] failed, exception: %s, message <%s>, remain raw url..." % (
            #                 Exception, e.message))
            #
            # if hasattr(self, 'process_func') and callable(self.process_func):
            #     try:
            #         return self.process_func(url)
            #     except Exception as e:
            #         self.logger.error('func call "process_func" failed, exception: %s, message <%s>, remain raw url...' % (
            #             Exception, e.message))
            #         return url
            # else:
            #     return url
