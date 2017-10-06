# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-05-15 10:27
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('spiderWeb', '0002_spidertask'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spidertask',
            name='tid',
            field=models.UUIDField(default=uuid.uuid1, editable=False, primary_key=True, serialize=False),
        ),
    ]
