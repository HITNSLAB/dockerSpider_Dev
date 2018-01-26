FROM python:2

MAINTAINER NI YUANDONG & LI YANZHE

WORKDIR /usr/src/app

ADD ./webControl ./webControl

RUN pip install -U pip \
    && pip install scrapy_redis bs4 pymongo django dwebsocket

WORKDIR webControl

EXPOSE 8000

CMD ["python","manage.py","runserver","0.0.0.0:8000"]
