# -*- coding: utf-8 -*-

import scrapy, sys
from scrapy.selector import Selector
from slaveNode.scrapy_redis_bf.spiders import RedisSpider
from slaveNode.items import SlavenodeDataItem
from scrapy.http import Request
import traceback
from bs4 import BeautifulSoup
from datetime import datetime
import urllib
from parse_rules import *
import logging
import re

from redis import exceptions


class DataSpider(RedisSpider):
    name = "dataSpider"
    redis_key = 'dataSpider:start_urls'
    custom_settings = {
        'SCHEDULER': 'slaveNode.scrapy_redis_bf.scheduler.Scheduler',
        'SCHEDULER_QUEUE_CLASS': 'slaveNode.scrapy_redis_bf.queue.SpiderPriorityQueue',
        # 'ITEM_PIPELINES' :{'slaveNode.pipelines.SlavenodePipeline': 300}
    }
    raw_parse_rules = get_data_parse_rules()

    # pop url from redis mannully for using bloomfilter
    def start_requests(self):
        while True:
            url = self.server.lpop(self.redis_key)
            if not url:
                # break
                break
            yield Request(url=url, callback=self.myparse)

    def myparse(self, response):
        logging.info(" Myparse Process Begin ".center(80, '-'))
        try:
            if self.raw_parse_rules['mode'] == 'BeautifulSoup':
                # Compile rules to eval string once only
                if not hasattr(self, 'compiled_rules'):
                    self.compiled_rules = {k: DataSpider.compose_rules(v, 'soup.', '') for k, v in
                                           self.raw_parse_rules['rules'].items()}
                yield self.bs_parse(response, self.compiled_rules)
            elif self.raw_parse_rules['mode'] == 'xpath':
                yield self.xpath_parse(response, self.raw_parse_rules['rules'])
        except exceptions.ResponseError as e:
            logging.critical('myparse failed, exception: %s, message %s ,now shut down...' % (e, e.message))
            self.crawler.engine.close_spider(self, reason=e.message)
        except Exception as e:
            logging.error('myparse failed, exception: %s, message %s ,skipped this item' % (Exception, e.message))

    def bs_parse(self, response, rules):
        logging.info(" BS4 Parse Begin ".center(80, '-'))
        item = SlavenodeDataItem()
        soup = BeautifulSoup(response.body, 'lxml')
        for k, v in rules.items():
            item[k] = eval(v)
        return item

    @staticmethod
    def compose_rules(rule, prefix='', suffix=''):
        pre, suf = '', ''
        if rule['to_str']:
            pre, suf = 'str(', ')'
        if not rule['raw_expr']:
            pre = pre + prefix
            suf = suffix + suf
        return pre + rule['eval'] + suf

    def xpath_parse(self, response, rules):
        logging.info(" XPath Parse Begin ".center(80, '-'))
        # sel = Selector(response)
        item = SlavenodeDataItem()
        soup = BeautifulSoup(response, 'lxml')
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
        yield item

    # some url will into 'parse', so i help it into 'mypase'
    def parse(self, response):
        url = response.url
        logging.warning("may be lost and will try again:" + url)
        yield Request(url=url, callback=self.myparse)
