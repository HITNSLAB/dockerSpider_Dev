# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

from scrapy.utils.misc import load_object
from scrapy.utils.serialize import ScrapyJSONEncoder
from scrapy.utils.project import get_project_settings
from twisted.internet.threads import deferToThread
import pymongo
from pymongo import errors
import logging
from scrapy_redis import connection, defaults
from slaveNode.items import SlavenodeUrlItem, SlavenodeDataItem
from urllib import quote_plus
from scrapy.http import Request
from scrapy.exceptions import DropItem
from slaveNode.utils.links_process import *

default_serialize = ScrapyJSONEncoder().encode


class SlavenodePipeline(object):
    """Pushes serialized item into a redis list/queue

    Settings
    --------
    REDIS_ITEMS_KEY : str
        Redis key where to store items.
    REDIS_ITEMS_SERIALIZER : str
        Object path to serializer function.

    """

    def __init__(self, server,
                 key=defaults.PIPELINE_KEY,
                 serialize_func=default_serialize):
        """Initialize pipeline.

        Parameters
        ----------
        server : StrictRedis
            Redis client instance.
        key : str
            Redis key where to store items.
        serialize_func : callable
            Items serializer function.

        """
        self.server = server
        self.key = key
        self.serialize = serialize_func
        self.logger = logging.getLogger(__name__)

    @classmethod
    def from_settings(cls, settings):
        params = {
            'server': connection.from_settings(settings),
        }
        if settings.get('REDIS_ITEMS_KEY'):
            params['key'] = settings['REDIS_ITEMS_KEY']
        if settings.get('REDIS_ITEMS_SERIALIZER'):
            params['serialize_func'] = load_object(
                settings['REDIS_ITEMS_SERIALIZER']
            )

        return cls(**params)

    @classmethod
    def from_crawler(cls, crawler):
        return cls.from_settings(crawler.settings)

    def process_item(self, item, spider):
        try:
            if isinstance(item, SlavenodeUrlItem):
                return deferToThread(self._process_item_url, item, spider)
            elif isinstance(item, SlavenodeDataItem):
                return deferToThread(self._process_item_data, item, spider)
        except Exception as e:
            self.logger.error(
                'Pipline process_item failed, exception: %s, message %s ,skipped this item' % (Exception, e.message))

            # send the url into next level's start_urls

    def _process_item_url(self, item, spider):
        # key = self.item_key(item, spider)
        # data = self.serialize(item)
        # key = 'dataSpider:start_urls'
        key = 'urlSpider:start_urls'
        urlList = item['url']
        # type(item['url'])  ->   list
        # for data in urlList:
        #     self.server.rpush(key, data)
        if len(urlList):
            self.server.rpush(key, *urlList)
        return item

        # send the final data into mongoDB

    def _process_item_data(self, item, spider):
        try:
            self.collection.insert(dict(item))
            print fix_url(item['url'])
            spider.server.lrem(spider.temp_redis, num=0, value=item['url'])
        except errors.DuplicateKeyError as e:
            raise DropItem(
                'Item was already in DB, exception: %s, message %s ,skipped this item' % (Exception, e.message))
        except errors.ConnectionFailure as e:
            self.logger.error(
                'MongoDB connection error when saving data, exception %s, message <%s>, skipped this item' % (
                    Exception, e.message)
            )
        return item

    def item_key(self, item, spider):
        """Returns redis key based on given spider.

        Override this function to use a different key depending on the item
        and/or spider.

        """
        return self.key % {'spider': spider.name}

    def open_spider(self, spider):
        if spider.name == "dataSpider":
            settings = get_project_settings()
            mongo_settings = settings['MONGO_SETTINGS']
            uris = [
                "mongodb://%s:%s@%s" % (
                    quote_plus(mongo_settings['user']), quote_plus(mongo_settings['passwd']), quote_plus(host)) for host
                in
                mongo_settings['host']
            ]
            self.client = pymongo.MongoClient(host=uris, **mongo_settings['options'])
            self.db = self.client.get_database(mongo_settings['dbname'])
            self.collection = self.db.get_collection(mongo_settings['colname'])

    def close_spider(self, spider):
        if spider.name == "dataSpider":
            self.client.close()
