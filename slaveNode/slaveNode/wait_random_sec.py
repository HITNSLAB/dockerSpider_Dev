# -*-coding:utf-8-*-

import logging

# 避免被ban策略之一：使用useragent池。
# 使用注意：需在settings.py中进行相应的设置。


from random import *
import time


class WaitRandomSecMiddleware(object):
    def process_response(self, request, response, spider):
        if response.status == 429:
            waitsec = randint(1, 60)
            logging.info('Waiting for %s seconds to continue...' % str(waitsec))
            time.sleep(waitsec)
            logging.info('Waited %s seconds, now continue...' % str(waitsec))
            return request
        else:
            return response
