# -*- coding: utf-8 -*-
from scrapy.selector import Selector
from slaveNode.scrapy_redis_bf.spiders import RedisSpider
from slaveNode.items import SlavenodeDataItem
from scrapy.http import Request
from parse_rules import *
from bs4 import BeautifulSoup
from pymongo import errors
from datetime import datetime
from redis import exceptions
import traceback
import scrapy, sys
import urllib

import logging
import re


class DataSpider(RedisSpider):
    name = "dataSpider"
    redis_key = 'dataSpider:start_urls'
    custom_settings = {
        'SCHEDULER': 'slaveNode.scrapy_redis_bf.scheduler.Scheduler',
        'SCHEDULER_QUEUE_CLASS': 'slaveNode.scrapy_redis_bf.queue.SpiderPriorityQueue',
        # 'ITEM_PIPELINES' :{'slaveNode.pipelines.SlavenodePipeline': 300}
    }
    template_provider = TemplateProvider()
    raw_parse_rules = template_provider.get_parse_rules(name)

    # pop url from redis mannully for using bloomfilter
    def start_requests(self):
        while True:
            url = self.server.lpop(self.redis_key)
            if not url:
                # break
                break
            yield Request(url=url, callback=self.myparse)

    def myparse(self, response):
        self.check_new_rules()
        self.logger.info(" Data Parse Process Begin ".center(80, '-'))
        try:
            if DataSpider.raw_parse_rules['mode'].lower() == 'beautifulsoup':
                # # Compile rules to eval string once only
                # if not hasattr(self, 'compiled_rules'):
                #     self.update_compiled_rules()
                yield self.bs_parse(response, self.compiled_rules)
            elif DataSpider.raw_parse_rules['mode'].lower() == 'xpath'.lower():
                yield self.xpath_parse(response, DataSpider.raw_parse_rules['rules'])
        except exceptions.ConnectionError as e:
            self.logger.error(
                'Redis connection error when parsing data, exception %s, message <%s>, response url <%s>, retrying...' % (
                    Exception, e.message, response.url)
            )
            yield Request(url=response.url, callback=self.myparse)
        except exceptions.ResponseError as e:
            self.logger.critical('Data parse failed, exception: %s, message %s ,now shut down...' % (e, e.message))
            self.crawler.engine.close_spider(self, reason=e.message)

        except Exception as e:
            self.logger.error('Data parse failed, exception %s, message <%s>, response url <%s>, skipped this item' % (
                Exception, e.message, response.url))

    def bs_parse(self, response, rules):
        self.logger.info(" BS4 Parse Begin ".center(80, '-'))
        item = SlavenodeDataItem()
        soup = BeautifulSoup(response.body, 'lxml')
        for k, v in rules.items():
            item[k] = eval(v)
        return item

    def xpath_parse(self, response, rules):
        self.logger.info(" XPath Parse Begin ".center(80, '-'))
        item = SlavenodeDataItem()
        sel = Selector(response)
        for k, v in rules.items():
            item[k] = sel.xpath(v).extract()
        # soup = BeautifulSoup(response, 'lxml')
        # item['title'] = sel.xpath('//span[@id="thread_subject"]/text()').extract()[0]
        # postList = sel.xpath('//div[@class="pl bm"]/div[1]//td[@class="t_f"]/text()').extract()
        # item['content'] = "".join(postList)
        # item['forum'] = sel.xpath('//div[@class="bm cl"]/div[@class="z"]/a[4]/text()').extract()[0]
        # item['author'] = sel.xpath('//div[@class="authi"]/a[@class="xw1"]/text()').extract()[0]
        # item['datetime'] = sel.xpath('//div[@class="pti"]/div[@class="authi"]/em/text()').extract()[0][4:]
        # item['title'] = sel.xpath('//div[@class="body",role="main"]/text()').extract()
        # item['title'] = sel.xpath('//a[@class="question-hyperlink"]/text()').extract()
        # item['content']=sel.xpath('//')
        # log.msg("TITLE IS --- "+item['title']+" ---", level=log.INFO)
        return item

    # some url will into 'parse', so i help it into 'mypase'
    def parse(self, response):
        self.logger.warning("may be lost and will try again, response url <%s>" % response.url)
        yield Request(url=response.url, callback=self.myparse)

    @staticmethod
    def compose_rules(rule, prefix='', suffix=''):
        pre, suf = '', ''
        if rule['to_str']:
            pre, suf = 'str(', ')'
        if not rule['raw_expr']:
            pre = pre + prefix
            suf = suffix + suf
        return pre + rule['eval'] + suf

    def update_compiled_rules(self):
        self.compiled_rules = {k: DataSpider.compose_rules(v, 'soup.', '') for k, v in
                               self.raw_parse_rules['rules'].items()}

    def check_new_rules(self):
        new_parse_rules = DataSpider.template_provider.get_parse_rules(DataSpider.name)
        flag = False
        if new_parse_rules != DataSpider.raw_parse_rules:
            flag = True
            self.logger.info('Found new template for %s' % self.name)
            DataSpider.raw_parse_rules = new_parse_rules
            self.logger.info('Now use new template for %s' % self.name)
            self.logger.info(DataSpider.raw_parse_rules)

        if DataSpider.raw_parse_rules['mode'] == 'BeautifulSoup':
            if flag or not hasattr(self, 'compiled_rules'):
                self.update_compiled_rules()
