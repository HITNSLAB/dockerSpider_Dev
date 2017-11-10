FROM python:2

MAINTAINER NI YUANDONG & LI YANZHE

WORKDIR /usr/src/app

ADD ./slaveNode ./slaveNode
# RUN pip2 install --no-cache-dir -r requirements.txt

RUN apt -y update \
    && apt -y upgrade \
    && pip2 install scrapy_redis bs4 pymongo \
    && apt -y install tor proxychains

WORKDIR slaveNode/slaveNode
