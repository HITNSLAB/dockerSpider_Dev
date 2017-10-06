# encoding=utf-8
from scrapy import cmdline

if __name__ == '__main__':
    cmdline.execute('scrapy crawl urlSpider'.split())
    # cmdline.execute('scrapy crawl dataSpider'.split())
    cmdline.execute('scrapy crawl dataSpider'.split())
