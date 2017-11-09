from bs4 import *
from requests import *
import re
from datetime import datetime
from scrapy.selector import Selector
import json

url='https://stackoverflow.com/questions?page=3&sort=newest'
url='https://stackoverflow.com/questions/19581059/misconf-redis-is-configured-to-save-rdb-snapshots'

response = request('get',
                   url)

data=r'''{"rules":{"forum":{"raw_expr":true,"to_str":false,"eval":"urllib.splithost(urllib.splittype(response.url)[1])[0]"},"author":{"raw_expr":false,"to_str":false,"eval":"find(name='div',attrs={'class':'user-details'}).a.string.strip()"},"url":{"raw_expr":true,"to_str":false,"eval":"response.url"},"title":{"raw_expr":false,"to_str":false,"eval":"find(name='a',attrs={'class':'question-hyperlink'}).string.strip()"},"datetime":{"raw_expr":true,"to_str":false,"eval":"datetime.strptime(soup.find(name='div',attrs={'class':['module','question-stats']}).find_all(name='p',attrs={'class':'label-key'})[1]['title'].strip()[:-1],'%Y-%m-%d %H:%M:%S')"},"content":{"raw_expr":false,"to_str":true,"eval":"find(name='div',attrs={'class':'post-text','itemprop':'text'})"},"question_id":{"raw_expr":true,"to_str":false,"eval":"int(re.search('(?<=(questions))/([0-9]+)/',response.url).group(2))"}},"mode":"BeautifulSoup"}'''


rules=json.loads(data)['rules']

# print rules['question_id']


# print content
soup = BeautifulSoup(response.content, 'lxml')
print response.url
print eval(rules['question_id']['eval'])

print eval(rules['datetime']['eval'])

# print datetime.strptime(soup.find(name='div', attrs={'class': ['module', 'question-stats']}).find_all(name='p', attrs={
#     'class': 'label-key'})[1]['title'].strip()[:-1], '%Y-%m-%d %H:%M:%S')


# sel = Selector(response)
# print sel.xpath('//a[@class=\"question-hyperlink\"]/@href').extract()