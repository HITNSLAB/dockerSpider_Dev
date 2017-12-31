# Importing base64 library because we'll need it ONLY in case if the proxy we are going to use requires authentication
import base64
import random
import urllib2
import redis
import logging
from scrapy.http import Request


# Start your middleware class
class ProxyMiddleware(object):
    # overwrite process request
    provider = None

    def __init__(self):
        self.logger = logging.getLogger(__name__)

    def process_request(self, request, spider):
        if not ProxyMiddleware.provider:
            ProxyMiddleware.provider = redis.Redis(host=spider.settings.get('PROXY_PROVIDER_HOST'),
                                                   port=spider.settings.get('PROXY_PROVIDER_PORT'))

        fetched = ProxyMiddleware.provider.rpop('ip_list')

        if fetched:
            proxy_ip = "http://%s" % fetched
            request.meta['proxy'] = proxy_ip
            self.logger.info('Current used proxy: %s' % proxy_ip)

        # def process_response(self, request, response, spider):
        #     if response.status != 200:
        #         return Request(url=request.url, dont_filter=True)
        #     else:
        #         return response



        # class ProxyMiddleware(object):
        #     # overwrite process request
        #     def process_request(self, request, spider):
        #         proapi = "http://svip.kuaidaili.com/api/getproxy/?orderid=941375378355487&num=1000&b_pcchrome=1&b_pcie=1&b_pcff=1&protocol=1&method=2&an_ha=1&sp1=1&sort=2&sep=2"
        #         pro_req = urllib2.Request(proapi)
        #         pro_response = urllib2.urlopen(pro_req)
        #         iplines = pro_response.read()
        #         proxy_ip_list = iplines.split('\n')
        #         for i in range(len(proxy_ip_list)):
        #             proxy_ip_list[i] = "http://" + proxy_ip_list[i]
        #
        #         proxy_ip = random.choice(proxy_ip_list)
        #         # Set the location of the proxy
        #         request.meta['proxy'] = proxy_ip
        #         logging.info('Current used proxy: %s' % proxy_ip)
        #
        #         # Use the following lines if your proxy requires authentication
        #         # proxy_user_pass = "USERNAME:PASSWORD"
        #         # setup basic authentication for the proxy
        #         # encoded_user_pass = base64.encodestring(proxy_user_pass)
        #         # request.headers['Proxy-Authorization'] = 'Basic ' + encoded_user_pass
