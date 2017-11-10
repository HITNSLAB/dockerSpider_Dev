FROM python:2

MAINTAINER NI YUANDONG & LI YANZHE

WORKDIR /usr/src/app

ADD ./webControl ./webControl
# RUN pip2 install --no-cache-dir -r requirements.txt

RUN apt -y update \
    && apt -y upgrade \
    && pip2 install scrapy_redis bs4 pymongo django dwebsocket \
    && apt -y install tor proxychains

WORKDIR webControl

EXPOSE 8000

CMD ["python","manage.py","runserver","0.0.0.0:8000"]
