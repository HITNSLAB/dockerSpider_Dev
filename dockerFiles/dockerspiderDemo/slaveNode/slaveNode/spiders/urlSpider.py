# -*- coding: utf-8 -*-

import scrapy,sys
from scrapy.selector import Selector
from scrapy.spiders import Rule
from scrapy.linkextractors import LinkExtractor
from scrapy_redis.spiders import RedisCrawlSpider
from slaveNode.items import SlavenodeUrlItem




class UrlSpider(RedisCrawlSpider):
    name = "urlSpider"
    redis_key = 'urlSpider:start_urls'

    rules = (
        Rule(LinkExtractor(allow=('forum-\d+-1\.html')),callback='parse_url',follow=True),
        Rule(LinkExtractor(allow=('forum-\d+-\d+\.html'),deny=('forum-\d+-1\.html')),callback='parse_url', follow=True),
        )

    def parse_url(self,response):
        sel = Selector(response)
        item=SlavenodeUrlItem()
        urls = sel.xpath('//a[@class="s xst"]/@href').extract()
        # remove duplicate url
        urls=list(set(urls))
        #return item['url'] as list, and divide the list in pipeline
        item['url']=urls
        yield item



        ## if return item like below,the data will be repeat because of multi-thread
        #for url in urls:
        #    temp_id+=1
        #    item['url']=url
        #    yield item
