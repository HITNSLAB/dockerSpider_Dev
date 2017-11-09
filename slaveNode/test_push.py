from slaveNode.scrapy_redis_bf import connection
from scrapy.utils.project import get_project_settings
import json
import base64

server = connection.from_settings(get_project_settings())

url = r'''
{
    "rules": "//a[@class=\"question-hyperlink\"]/@href",
    "process_value": "lambda v: \"https://stackoverflow.com\" + v",
    "mode": "xpath",
    "link_extractor": {
        "restrict_xpaths": "//div[@class=\"pager fl\"]/a[@rel=\"next\"]",
        "allow": "^https://stackoverflow.com/questions"
    }
}
'''

data = r'''
{
    "rules": {
        "forum": {
            "raw_expr": true,
            "to_str": false,
            "eval": "urllib.splithost(urllib.splittype(response.url)[1])[0]"
        },
        "author": {
            "raw_expr": false,
            "to_str": false,
            "eval": "find(name='div', attrs={'class': 'user-details'}).a.string.strip()"
        },
        "url": {
            "raw_expr": true,
            "to_str": false,
            "eval": "response.url"
        },
        "title": {
            "raw_expr": false,
            "to_str": false,
            "eval": "find(name='a', attrs={'class': 'question-hyperlink'}).string.strip()"
        },
        "datetime": {
            "raw_expr": true,
            "to_str": false,
            "eval": "datetime.strptime(soup.find(name='div',attrs={'class': ['module', 'question-stats']}).find_all(name='p',attrs={'class': 'label-key'})[1]['title'].strip()[:-1], '%Y-%m-%d %H:%M:%S')"
        },
        "content": {
            "raw_expr": false,
            "to_str": true,
            "eval": "find(name='div', attrs={'class': 'post-text', 'itemprop': 'text'})"
        },
        "question_id": {
            "raw_expr": true,
            "to_str": false,
            "eval": "int(re.search('(?<=(questions))/(\\d+)/',response.url).group(2))"
        }
    },
    "mode": "BeautifulSoup"
}
'''

server.lpush('dataSpider:template', base64.b64encode(data))
server.lpush('urlSpider:template', base64.b64encode(url))
