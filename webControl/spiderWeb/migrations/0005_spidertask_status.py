# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-05-23 01:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spiderWeb', '0004_auto_20170522_0823'),
    ]

    operations = [
        migrations.AddField(
            model_name='spidertask',
            name='status',
            field=models.CharField(default='init', max_length=10),
        ),
    ]
