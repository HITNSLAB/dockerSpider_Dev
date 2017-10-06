# encoding:utf-8

import os, tarfile
import shutil
import re
import redis
import pymongo
import time

import sys

from spiderWeb.models import SpiderTask
from spiderWeb.models import SpiderShell


class Dockertask(object):
    def __init__(self, taskid):
        self.task = SpiderTask.objects.get(tid=taskid)
        self.redis_con = None
        self.mongo_con = None
        self.set_workdir(self.task.tid)

    def set_workdir(self, taskdir):
        if not os.path.exists('/tmp/dockerspider'):
            os.mkdir('/tmp/dockerspider')
        dirnow = os.path.join('/tmp/dockerspider', taskdir)
        if not os.path.exists(dirnow):
            os.mkdir(dirnow)
            # get the dir of task,py
            dirtar = os.path.join(os.path.split(os.path.abspath(__file__))[0], "dockerspiderDemo.tar")
            shutil.copyfile(dirtar, os.path.join(dirnow, "dockerspiderDemo.tar"))
            os.chdir(dirnow)
            tarHandle = tarfile.open("dockerspiderDemo.tar", "r")
            tarHandle.extractall(".")
            tarHandle.close()
        else:
            os.chdir(dirnow)

    def rewrite_spider(self):
        pass

    def untar_spider(self):
        with tarfile.open('slaveNode.tar', "w") as tar:
            tar.add("./slaveNode", arcname=os.path.basename("./slaveNode"))
        shutil.copyfile("./slaveNode.tar", "./urlspider/slaveNode.tar")
        shutil.copyfile("./slaveNode.tar", "./dataspider/slaveNode.tar")

    def start_task(self, urlspider_num=1, dataspider_num=1, redis_num=1, mongo_num=1):
        if self.task.status == "pause":
            self.restart_task()
            self.task.status = "running"
            self.task.save()
            return "success"
        if self.task.status == "running":
            return "start task field."
        if self.task.status == "init":
            self.untar_spider()
        urlspider_num = self.task.num_url
        dataspider_num = self.task.num_data
        redis_num = self.task.num_redis
        mongo_num = self.task.num_mongo
        cmd_up = "docker-compose up -d"
        cmd_scale = "docker-compose scale urlspider=" + str(urlspider_num) + " dataspider=" + str(
            dataspider_num) + " redis=" + str(redis_num) + " mongo=" + str(mongo_num)
        try:
            output = os.popen(cmd_up)
            self.save_shell_ouput(output.read())
            output = os.popen(cmd_scale)
            self.save_shell_ouput(output.read())
            time.sleep(10)
            self.get_connection()
            self.redis_con.lpush("urlSpider:start_urls", self.task.url)
            self.task.status = "running"
            self.task.save()
            return "success"
        except:
            return "start task field."

    def stop_task(self):
        try:
            cmd_stop = "docker-compose stop"
            output = os.popen(cmd_stop)
            self.save_shell_ouput(output.read())
            self.task.status = "pause"
            self.task.save()
            return "success"
        except:
            return "stop task field."

    def delete_task(self):
        if self.task.status == "init":
            self.task.delete()
            return "success"
        if self.task.status == "running":
            self.stop_task()
        try:
            taskid = self.task.tid
            cmd_del = "docker-compose rm -f"
            cmd_rmi = "docker rmi " + taskid + "_dataspider " + taskid + "_urlspider"
            output = os.popen(cmd_del)
            self.save_shell_ouput(output.read())
            output = os.popen(cmd_rmi)
            self.save_shell_ouput(output.read())
            self.task.delete()
            return "success"
        except:
            return "delete task field."

    def get_ip(self, name):
        cmd_ip = "docker inspect " + name
        info = os.popen(cmd_ip).read()
        print info
        ipinfo = re.findall(r'\d+\.\d+\.\d+\.\d+', info)
        return ipinfo[1]

    def get_connection(self):
        taskid = self.task.tid
        redis_ip = self.get_ip(taskid + "_redis_1")
        mongo_ip = self.get_ip(taskid + "_mongo_1")
        self.redis_con = redis.Redis(host=redis_ip, port=6379, db=0)
        self.mongo_con = pymongo.MongoClient(mongo_ip, 27017)

    def restart_task(self):
        cmd_restart = "docker-compose restart"
        output = os.popen(cmd_restart)
        self.save_shell_ouput(output.read())

    def get_count_urlspider(self):
        count = self.redis_con.zcard("urlSpider:requests")
        return count

    def get_count_dataspider(self):
        count = self.redis_con.llen("dataSpider:start_urls")
        return count

    def get_count_item(self):
        db = self.mongo_con.spiderDataItem
        count = db.website.count()
        return count

    def get_data_item(self):
        db = self.mongo_con.spiderDataItem
        result = db.website.find({}, {"_id": 0})
        return result

    def save_shell_ouput(self, textinfo):
        if textinfo:
            sbash = SpiderShell()
            sbash.tid = self.task.tid
            sbash.text = textinfo
            sbash.save()


if __name__ == "__main__":
    dt = Dockertask()
    # dt.tar_spider()
    dt.start_task("16862d6e")
    # dt.stop_task()
    # dt.delete_task()
    # dt.get_ip("khhfnd_redis_1")
