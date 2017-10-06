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
from scrapy_redis import connection, defaults
from slaveNode.items import SlavenodeUrlItem, SlavenodeDataItem
from urllib import quote_plus
from slaveNode.db_settings import MONGO_SETTINGS

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

        if isinstance(item, SlavenodeUrlItem):
            return deferToThread(self._process_item_url, item, spider)
        elif isinstance(item, SlavenodeDataItem):
            return deferToThread(self._process_item_data, item, spider)

            # send the url into next level's start_urls

    def _process_item_url(self, item, spider):
        # key = self.item_key(item, spider)
        # data = self.serialize(item)
        key = 'dataSpider:start_urls'
        urlList = item['url']
        # type(item['url'])  ->   list
        for data in urlList:
            self.server.rpush(key, data)
        return item

        # send the final data into mongoDB

    def _process_item_data(self, item, spider):
        self.collection.insert(dict(item))
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
            #
            # uris = [
            #     "mongodb://%s:%s@%s" % (
            #         quote_plus(MONGO_SETTINGS['user']), quote_plus(MONGO_SETTINGS['passwd']), quote_plus(host)) for host
            #     in
            #     MONGO_SETTINGS['host']
            # ]
            #
            #
            #
            # print "AAAAAAAAAAAAAAAAAA"
            # print(uris)
            #
            # self.client = pymongo.MongoClient(
            #     host=uris,
            #     **MONGO_SETTINGS['options']
            # )
            #
            # self.db = self.client.get_database(MONGO_SETTINGS['dbname'])
            # self.collection = self.db.get_collection(MONGO_SETTINGS['colname'])


            self.client = pymongo.MongoClient(settings['DB_MONGO_HOST'], settings['DB_MONGO_PORT'], )
            self.db = self.client[settings['DB_MONGO_DBS']]
            self.collection = self.db[settings['DB_MONGO_TABLE']]

    def close_spider(self, spider):
        if spider.name == "dataSpider":
            self.client.close()
