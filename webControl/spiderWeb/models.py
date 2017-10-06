from __future__ import unicode_literals

from django.db import models


# Create your models here.
class SpiderCase(models.Model):
    cid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=500)
    initUrl = models.URLField()
    followPage_allow = models.TextField()
    followPage_deny = models.TextField()
    dataPage = models.TextField()
    dataItem = models.TextField()
    createDate = models.DateTimeField(auto_now_add=True)
    editDate = models.DateTimeField(auto_now=True)


class SpiderTask(models.Model):
    tid = models.CharField(primary_key=True, max_length=8)
    name = models.CharField(max_length=50)
    cycletime = models.IntegerField()
    url = models.URLField()
    stra_delay = models.BooleanField()
    stra_ua = models.BooleanField()
    stra_proxy = models.BooleanField()
    stra_js = models.BooleanField()
    cid = models.ForeignKey(SpiderCase)
    num_url = models.IntegerField()
    num_data = models.IntegerField()
    num_redis = models.IntegerField()
    num_mongo = models.IntegerField()
    createDate = models.DateTimeField(auto_now_add=True)
    editDate = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10, default="init")

class SpiderShell(models.Model):
    sid=models.AutoField(primary_key=True)
    tid=models.CharField(max_length=8)
    text=models.TextField()
    createDate = models.DateTimeField(auto_now_add=True)
