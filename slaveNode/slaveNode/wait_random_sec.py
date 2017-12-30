# -*-coding:utf-8-*-

import logging

from random import *
import time
from scrapy.http import Request


# import scrapy.downloadermiddlewares.retry.RetryMiddleware

class WaitRandomSecMiddleware(object):
    def process_response(self, request, response, spider):
        if response.status == 429:
            waitsec = randint(1, 60)
            logging.info('Spider <%s> waiting for %s seconds to continue...' % (spider.name, str(waitsec)))
            time.sleep(waitsec)
            logging.info('Spider <%s> have waited %s seconds, now retry request url <%s>' % (
                spider.name, str(waitsec), request.url))
            return Request(url=request.url, dont_filter=True)
            # return request
        else:
            return response
