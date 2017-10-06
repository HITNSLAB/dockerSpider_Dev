# -*- coding: utf-8 -*-

import scrapy,sys
from scrapy.selector import Selector
from scrapy_redis.spiders import RedisSpider
from slaveNode.items import SlavenodeDataItem
import traceback




class DataSpider(RedisSpider):
    name = "dataSpider"
    redis_key = 'dataSpider:start_urls'


    def parse(self,response):
        sel = Selector(response)
        item=SlavenodeDataItem()
        try:
            item['title'] = sel.xpath('//span[@id="thread_subject"]/text()').extract()[0]
            postList = sel.xpath('//div[@class="pl bm"]/div[1]//td[@class="t_f"]/text()').extract()
            item['content'] = "".join(postList)
            item['forum'] = sel.xpath('//div[@class="bm cl"]/div[@class="z"]/a[4]/text()').extract()[0]
            item['author'] = sel.xpath('//div[@class="authi"]/a[@class="xw1"]/text()').extract()[0]
            item['datetime'] = sel.xpath('//div[@class="pti"]/div[@class="authi"]/em/text()').extract()[0][4:]
            yield item
        except Exception,e:
            print Exception,":",e


