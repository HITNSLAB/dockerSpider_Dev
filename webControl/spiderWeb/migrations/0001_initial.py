# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-16 08:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SpiderCase',
            fields=[
                ('cid', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('desc', models.CharField(max_length=500)),
                ('initUrl', models.URLField()),
                ('followPage_allow', models.TextField()),
                ('followPage_deny', models.TextField()),
                ('dataPage', models.TextField()),
                ('dataItem', models.TextField()),
                ('createDate', models.DateTimeField(auto_now_add=True)),
                ('editDate', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
