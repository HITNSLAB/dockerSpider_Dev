# -*-coding:utf-8-*-

import logging

from random import *
import time
from scrapy.http import Request


class WaitRandomSecMiddleware(object):
    def process_response(self, request, response, spider):
        if response.status == 429:
            waitsec = randint(1, 60)
            logging.info('Waiting for %s seconds to continue...' % str(waitsec))
            time.sleep(waitsec)
            logging.info('Waited %s seconds, now continue...' % str(waitsec))
            return Request(url=request.url, dont_filter=True)
            # return request
        else:
            return response
