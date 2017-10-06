# -*- coding: utf-8 -*-

import scrapy, sys
from scrapy.selector import Selector
from slaveNode.scrapy_redis_bf.spiders import RedisSpider
from slaveNode.items import SlavenodeDataItem
from scrapy.http import Request
import traceback


class DataSpider(RedisSpider):
    name = "dataSpider"
    redis_key = 'dataSpider:start_urls'
    custom_settings = {
        'SCHEDULER': 'slaveNode.scrapy_redis_bf.scheduler.Scheduler',
        'SCHEDULER_QUEUE_CLASS': 'slaveNode.scrapy_redis_bf.queue.SpiderPriorityQueue',
        # 'ITEM_PIPELINES' :{'slaveNode.pipelines.SlavenodePipeline': 300}
    }

    # pop url from redis mannully for using bloomfilter
    def start_requests(self):
        while True:
            url = self.server.lpop(self.redis_key)
            if not url:
                break
            yield Request(url=url, callback=self.myparse)

    def myparse(self, response):
        sel = Selector(response)
        item = SlavenodeDataItem()
        try:
            item['title'] = sel.xpath('//span[@id="thread_subject"]/text()').extract()[0]
            postList = sel.xpath('//div[@class="pl bm"]/div[1]//td[@class="t_f"]/text()').extract()
            item['content'] = "".join(postList)
            item['forum'] = sel.xpath('//div[@class="bm cl"]/div[@class="z"]/a[4]/text()').extract()[0]
            item['author'] = sel.xpath('//div[@class="authi"]/a[@class="xw1"]/text()').extract()[0]
            item['datetime'] = sel.xpath('//div[@class="pti"]/div[@class="authi"]/em/text()').extract()[0][4:]
            yield item
        except Exception, e:
            print Exception, ":", e

    # some url will into 'parse', so i help it into 'mypase'
    def parse(self, response):
        url = response.url
        print "may be lost and will try again:" + url
        yield Request(url=url, callback=self.myparse)
