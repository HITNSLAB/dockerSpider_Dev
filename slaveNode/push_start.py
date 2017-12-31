from slaveNode.scrapy_redis_bf import connection
from scrapy.utils.project import get_project_settings
import json
import base64

server = connection.from_settings(get_project_settings())

for i in range(1, 1000000):
    if i % 5000 == 0:
        url = "https://stackoverflow.com/questions?page=%d&sort=newest" % i
        server.lpush("urlSpider:start_urls", url)
        print url
