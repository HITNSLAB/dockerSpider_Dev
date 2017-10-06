#this is a urlSpider
FROM allanfann/scrapy

#image made by yuandong ni
MAINTAINER nyd "niyuandong@wis-eye.com"

#download the bot file
ADD ./slaveNode.tar /

#switch the workdir
WORKDIR /slaveNode

#run command
CMD ["scrapy","crawl","urlSpider"]




