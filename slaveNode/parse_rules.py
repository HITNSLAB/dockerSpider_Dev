import base64
import json
import logging
import time

from scrapy.utils.log import *
from scrapy.utils.project import get_project_settings

from slaveNode.scrapy_redis_bf import connection


class TemplateProvider(object):
    server = connection.from_settings(get_project_settings())
    configure_logging()
    logger = logging.getLogger(__name__)

    def get_parse_rules(self, spidername):
        """
        Get the Parse Rules from a source
        Used for Spiders to parse page
        :return: raw_rules, dict
        """
        redis_key = '%s:template' % spidername
        # Block until received template
        while True:
            json_rules = self.server.lrange(redis_key, 0, 0)
            if json_rules:
                try:
                    # logging.warning(json.loads(base64.b64decode(json_rules[0])))
                    return json.loads(base64.b64decode(json_rules[0]))
                except Exception as e:
                    self.logger.warning('Invalid JSON template, wait again...')
                    pass
            self.logger.info("Waiting for template data of %s..." % spidername)
            time.sleep(2)

            # def get_parse_rules(self, spidername):
            #     """
            #     Get the Parse Rules from a source
            #     Used for Spiders to parse page
            #     :return: raw_rules, dict
            #     """
            #     if spidername == 'urlSpider':
            #         return URL_PARSE_RULES
            #     elif spidername == 'dataSpider':
            #         return DATA_PARSE_RULES

# Example
# {
#     "rules": {
#         "forum": {
#             "raw_expr": true,
#             "to_str": false,
#             "eval": "urllib.splithost(urllib.splittype(response.url)[1])[0]"
#         },
#         "author": {
#             "raw_expr": false,
#             "to_str": false,
#             "eval": "find(name='div', attrs={'class': 'user-details'}).a.string.strip()"
#         },
#         "url": {
#             "raw_expr": true,
#             "to_str": false,
#             "eval": "response.url"
#         },
#         "title": {
#             "raw_expr": false,
#             "to_str": false,
#             "eval": "find(name='a', attrs={'class': 'question-hyperlink'}).string.strip()"
#         },
#         "datetime": {
#             "raw_expr": true,
#             "to_str": false,
#             "eval": "datetime.strptime(soup.find(name='div',attrs={'class': ['module', 'question-stats']}).find_all(name='p',attrs={'class': 'label-key'})[1]['title'].strip()[:-1], '%Y-%m-%d %H:%M:%S')"
#         },
#         "content": {
#             "raw_expr": false,
#             "to_str": true,
#             "eval": "find(name='div', attrs={'class': 'post-text', 'itemprop': 'text'})"
#         },
#         "question_id": {
#             "raw_expr": true,
#             "to_str": false,
#             "eval": "int(re.search('(?<=(questions))/(\\d+)/',response.url).group(2))"
#         }
#     },
#     "mode": "BeautifulSoup"
# }

# {
#     "rules": "//a[@class=\"question-hyperlink\"]/@href",
#     "process_value": "lambda v: \"https://stackoverflow.com\" + v",
#     "mode": "xpath",
#     "link_extractor": {
#         "restrict_xpaths": "//div[@class=\"pager fl\"]/a[@rel=\"next\"]",
#         "allow": "^https://stackoverflow.com/questions"
#     }
# }




# DATA_PARSE_RULES = {
#     'mode': 'BeautifulSoup',
#     'rules': {
#         'title': {
#             'to_str': False,
#             'raw_expr': False,
#             'eval': "find(name='a', attrs={'class': 'question-hyperlink'}).string.strip()"
#         },
#         'content': {
#             'to_str': True,
#             'raw_expr': False,
#             'eval': "find(name='div', attrs={'class': 'post-text', 'itemprop': 'text'})"
#         },
#         'url': {
#             'to_str': False,
#             'raw_expr': True,
#             'eval': "response.url"
#         },
#         'forum': {
#             'to_str': False,
#             'raw_expr': True,
#             'eval': "urllib.splithost(urllib.splittype(response.url)[1])[0]"
#         },
#         'author': {
#             'to_str': False,
#             'raw_expr': False,
#             'eval': "find(name='div', attrs={'class': 'user-details'}).a.string.strip()"
#         },
#         'datetime': {
#             'to_str': False,
#             'raw_expr': True,
#             'eval': "datetime.strptime(soup.find(name='div',attrs={'class': ['module', 'question-stats']}).find_all(name='p',attrs={'class': 'label-key'})[1]['title'].strip()[:-1], '%Y-%m-%d %H:%M:%S')"
#         },
#         'question_id': {
#             'to_str': False,
#             'raw_expr': True,
#             'eval': "int(re.search('(?<=(questions))/(\d+)/',response.url).group(2))"
#         },
#     }
# }
#
# URL_PARSE_RULES = {
#     'mode': 'xpath',
#     'link_extractor': {
#         'restrict_xpaths': '//div[@class="pager fl"]/a[@rel="next"]',
#         # 'process_value': 'lambda v: "https://stackoverflow.com" + v',
#         # 'allow': r'^/questions/\d+/(?:[a-zA-Z\d]+-)+(?:[a-zA-Z\d]+)$',
#         'allow': r'^https://stackoverflow.com/questions',
#     },
#     'rules': '//a[@class="question-hyperlink"]/@href',
#     'process_value': 'lambda v: "https://stackoverflow.com" + v'
# }
