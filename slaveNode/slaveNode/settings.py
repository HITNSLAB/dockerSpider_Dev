# -*- coding: utf-8 -*-

# Scrapy settings for slaveNode project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     http://doc.scrapy.org/en/latest/topics/settings.html
#     http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html
#     http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'slaveNode'

SPIDER_MODULES = ['slaveNode.spiders']
NEWSPIDER_MODULE = 'slaveNode.spiders'

# Crawl responsibly by identifying yourself (and your website) on the user-agent
# USER_AGENT = 'slaveNode (+http://www.yourdomain.com)'

# Obey robots.txt rules
ROBOTSTXT_OBEY = True

# Configure maximum concurrent requests performed by Scrapy (default: 16)
# CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See http://scrapy.readthedocs.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
DOWNLOAD_DELAY = 1
# The download delay setting will honor only one of:
# CONCURRENT_REQUESTS_PER_DOMAIN = 16
# CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
# COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
TELNETCONSOLE_ENABLED = False

# Override the default request headers:
# DEFAULT_REQUEST_HEADERS = {
#   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
#   'Accept-Language': 'en',
# }

# Enable or disable spider middlewares
# See http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html
# SPIDER_MIDDLEWARES = {
#    'slaveNode.middlewares.SlavenodeSpiderMiddleware': 543,
# }

# Enable or disable downloader middlewares
# See http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html
DOWNLOADER_MIDDLEWARES = {
    # 'slaveNode.middlewares.MyCustomDownloaderMiddleware': 543,
    'slaveNode.rotate_useragent.RotateUserAgentMiddleware': 500,
    'slaveNode.wait_random_sec.WaitRandomSecMiddleware': 543,
    'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': None,
}

# Enable or disable extensions
# See http://scrapy.readthedocs.org/en/latest/topics/extensions.html
# EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
# }

# Configure item pipelines
# See http://scrapy.readthedocs.org/en/latest/topics/item-pipeline.html
ITEM_PIPELINES = {
    'slaveNode.pipelines.SlavenodePipeline': 300,
    # 'scrapy_redis.pipelines.RedisPipeline':300,
}

# Enable and configure the AutoThrottle extension (disabled by default)
# See http://doc.scrapy.org/en/latest/topics/autothrottle.html
# AUTOTHROTTLE_ENABLED = True
# The initial download delay
# AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
# AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
# AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
# AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
# HTTPCACHE_ENABLED = True
# HTTPCACHE_EXPIRATION_SECS = 0
# HTTPCACHE_DIR = 'httpcache'
# HTTPCACHE_IGNORE_HTTP_CODES = []
# HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'

# Config  about redis
SCHEDULER = "scrapy_redis.scheduler.Scheduler"
SCHEDULER_PERSIST = True
SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.SpiderPriorityQueue'
DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"
REDIS_URL = None
REDIS_HOST = 'nist.lee-service.com'
REDIS_PORT = 16379
FILTER_URL = None
FILTER_HOST = 'nist.lee-service.com'
FILTER_PORT = 16379

# Config about the Database
import ssl

MONGO_SETTINGS = {
    "host": [
        'nist.lee-service.com',
        'hk1.lee-service.com',
        'hk1-s.lee-service.com',
        'hk2-s.lee-service.com',
        'sg1-s.lee-service.com',
        'us1.lee-service.com'
    ],
    "user": 'nist',
    'passwd': 'HITnsLAB!',
    'dbname': 'spiderDataItem',
    'colname': 'website',
    'options': {
        'replicaset': 'servrepl',
        'readPreference': 'nearest',
        'ssl': True,
        # 'ssl_certfile': '/Users/liyanzhe/mongokey.rsa.pem',
        # 'ssl_certfile': '/root/mongokey.rsa.pem',
        'ssl_certfile': '/run/secrets/mongokey',
        'ssl_cert_reqs': ssl.CERT_REQUIRED
    }
}
