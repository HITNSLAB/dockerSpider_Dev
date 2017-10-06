FROM python:2

MAINTAINER NI YUANDONG & LI YANZHE

WORKDIR /usr/src/app

# RUN pip2 install --no-cache-dir -r requirements.txt

RUN pip2 install scrapy_redis bs4 pymongo

ADD slaveNode.tar ./

WORKDIR slaveNode
