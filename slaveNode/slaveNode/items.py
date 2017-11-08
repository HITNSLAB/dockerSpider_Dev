# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
import __builtin__
from parse_rules import *


class SlavenodeUrlItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    url = scrapy.Field()
    pass


# class SlavenodeDataItem(scrapy.Item):
#     # define the fields for your item here like:
#     # name = scrapy.Field()
#     title = scrapy.Field()
#     content = scrapy.Field()
#     forum = scrapy.Field()
#     author = scrapy.Field()
#     datetime = scrapy.Field()
#     url = scrapy.Field()
#     pass

# globals()['SlavenodeDataItem'] = type(
#     'SlavenodeDataItem',
#     (scrapy.Item,),
#     {
#         'title': scrapy.Field(),
#         'content': scrapy.Field(),
#         'forum': scrapy.Field(),
#         'author': scrapy.Field(),
#         'datetime': scrapy.Field(),
#         'url': scrapy.Field(),
#
#     }
# )

template_provider = TemplateProvider()

globals()['SlavenodeDataItem'] = type(
    'SlavenodeDataItem',
    (scrapy.Item,),
    {item: scrapy.Field() for item in template_provider.get_parse_rules('dataSpider')['rules']}
)
