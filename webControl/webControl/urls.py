"""webControl URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin

from spiderWeb import views as sw_views
from django.conf import settings
import django

urlpatterns = [
    url(r'^index/$|^$', sw_views.index, name='index'),
    url(r'^case/(\w+)/$', sw_views.case, name='case'),
    url(r'^aj_getcode/$', sw_views.aj_getcode, name='aj_getcode'),
    url(r'^hlcode/url=([a-zA-z]+://[^\s]*)/$', sw_views.hlcode, name='hlcode'),
    url(r'^ruletest/$', sw_views.ruletest, name='ruletest'),
    url(r'^xpathrule/$', sw_views.xpathrule, name='xpathrule'),
    url(r'^cssselect/$', sw_views.cssselect),

    url(r'^savecase/$', sw_views.savecase),
    url(r'^delcase/$', sw_views.delcase),
    url(r'^task/$', sw_views.task),
    url(r'^newtask/$', sw_views.newtask),
    url(r'^newtask/$', sw_views.newtask),
    url(r'^argu_network/$', sw_views.argu_network),
    url(r'^argu_tasklist/$', sw_views.argu_tasklist),
    url(r'^argu_taskrun/$', sw_views.argu_taskrun),
    url(r'^argu_taskstop/$', sw_views.argu_taskstop),
    url(r'^argu_taskdel/$', sw_views.argu_taskdel),
    url(r'^argu_taskinfo/$', sw_views.argu_taskinfo),
    url(r'^argu_taskdata/$', sw_views.argu_taskdata),
    url(r'^echo/$', sw_views.echo),
    url(r'^ws_urlspider/$', sw_views.ws_urlspider),
    url(r'^ws_dataspider/$', sw_views.ws_dataspider),
    url(r'^ws_taskcount/$', sw_views.ws_taskcount),
    url(r'^ws_taskoutput/$', sw_views.ws_taskoutput),

    url(r'^taskcenter/$', sw_views.taskcenter),
    url(r'^cadvisor/$', sw_views.cadvisor),

    url(r'^monitor/$', sw_views.monitor),
    url(r'^monitor-host/$', sw_views.monitorhost),
    url(r'^monitor-docker/$', sw_views.monitordocker),
    url(r'^docker/(.*)$', sw_views.dockerinfo),

    url(r'^api/v1.1/subcontainers/(.*)$', sw_views.api_subcontainers),
    url(r'^api/v1.0/containers/(.*)$', sw_views.api_containers),
    url(r'^api/v2.0/ps/$', sw_views.api_ps),
    url(r'^api/v1.0/machine/$', sw_views.api_machine),

    url(r'^admin/', admin.site.urls),
]
