# -*- coding: utf-8 -*-
import math
from django.shortcuts import render
from django.http import HttpResponse
from scrapy.linkextractors import LinkExtractor
from ast import literal_eval as make_tuple
from spiderWeb.models import SpiderCase, SpiderTask, SpiderShell
from dwebsocket.decorators import accept_websocket
from dockerMiddleware.task import Dockertask
from django.views.decorators.csrf import csrf_exempt
import HTMLParser
import json
import copy
import urllib2
import scrapy
import base64
import re
import threading
import uuid
import time
import bs4
import cgi

data_page_url = ''
link_list = []
clients = []
cadvisorHost = "http://127.0.0.1:8090"


# Create your views here.
def index(request):
    item_num = "982,672"

    case_num = SpiderCase.objects.count()
    task_num = SpiderTask.objects.count()
    docker_info, container_info, image_info = get_cadvisor_infor()
    docker_num = len(container_info)

    return render(request, 'index.html',
                  {'item_num': item_num, 'case_name': case_num, 'task_num': task_num, 'docker_num': docker_num})


def case(request, func):
    if func == "index":
        caselist = SpiderCase.objects.all()
        for i in range(0, len(caselist)):
            item = caselist[i]
            tlist = list(make_tuple(item.dataItem))
            caselist[i].dataItem = tlist
        return render(request, 'case.html', {"Cases": caselist})
    elif func == "create":
        return render(request, 'casecreate.html')


# get some data from userBrowser,then set the global variable
def aj_getcode(request):
    global data_page_url
    text = request.POST['text']
    func = request.POST['func']
    return_data = 'noData!'
    if func == "pageUrl":
        return_data = data_page_url
    return HttpResponse(return_data)


# get the code-highlight page
def hlcode(request, url):
    if not url:
        hcode = 'get url error!'
    else:
        hcode = urllib2.urlopen(url).read()
    return render(request, "tempcode.html", {'htmlcode': hcode})


# get the rule-test page
def ruletest(request):
    global link_list
    url = base64.b64decode(request.GET['url'])
    lista = base64.b64decode(request.GET['lista'])
    listd = base64.b64decode(request.GET['listd'])
    datap = base64.b64decode(request.GET['datap'])
    scrapy_response, title = get_scrapy_response(url)
    linkex = LinkExtractor(allow=make_tuple(lista), deny=make_tuple(listd))
    link_follow = linkex.extract_links(scrapy_response)

    # multi-thread in get link_list
    thread_pool = []
    for link in link_follow:
        temp_thread = threading.Thread(target=write_linklist, args=(link.url, datap))
        thread_pool.append(temp_thread)
        # temp_list, url_title = get_datapage_list(link.url, datap)
        # temp_dict = dict(url=link.url, datalist=temp_list, title=url_title)
        # link_list.append(temp_dict)
    for t in thread_pool:
        t.setDaemon(True)
        t.start()
    # waiting for threads end
    t.join()
    # set the data_page_url
    set_datapageurl()
    return render(request, "ruleshow.html",
                  {'linkList': link_list, 'a3': datap})


def xpathrule(request):
    url = base64.b64decode(request.GET['url'])
    xpath_json = base64.b64decode(request.GET['data'])
    xpath_list = list(make_tuple(xpath_json))
    items = {}
    scrapy_response, html_title = get_scrapy_response(url)
    sel = scrapy.selector.Selector(scrapy_response)
    for line in xpath_list:
        datastr = sel.xpath(line[1]).extract()[0]
        items[line[0]] = datastr

    return render(request, "xpathrule.html", {"data": items, "url": url})


def cssselect(request):
    url = request.GET['url']
    hcode = urllib2.urlopen(url).read()
    tag = bs4.BeautifulSoup(hcode, "lxml")
    tag_list = getChildTag(tag.html)
    tag_json = json.dumps(tag_list)
    # tag_json='''[{"text": "父节点 1","nodes": [{"text": "子节点 1","nodes": [{"text": "孙子节点 1"},{"text": "孙子节点 2"}]},{"text": "子节点 2"}]},{"text": "父节点 2"},{"text": "父节点 3"},{"text": "父节点 4"},{"text": "父节点 5"}]'''
    return render(request, "cssselect.html", {"jsondata": tag_json})


def savecase(request):
    data = request.POST
    scase = SpiderCase()
    scase.name = data['caseName']
    scase.desc = data['caseDesc']
    scase.initUrl = data['defaultUrl']
    scase.followPage_allow = data['listPage-allow']
    scase.followPage_deny = data['listPage-deny']
    scase.dataPage = data['dataPage']
    scase.dataItem = base64.b64decode(data['items-rule'])
    scase.save()

    return HttpResponse('ok')


def delcase(request):
    delid = request.POST['cid']
    delobj = SpiderCase.objects.filter(cid=delid)
    delobj.delete()
    return HttpResponse('success')


def task(request):
    return render(request, "task.html")


def taskcenter(request):
    return render(request, "taskcenter.html")


def cadvisor(request):
    return render(request, "cadvisor.html")


def monitor(request):
    docker_info, container_info, image_info = get_cadvisor_infor()
    image_info = image_info.replace("(", '')
    image_info = image_info.replace(")", '')
    tmp = json.loads(image_info)
    image_info = []
    for im in tmp:
        imnew = {}
        tag = str(im['repo_tags'])
        imnew['repo_tags'] = tag[3:-2]

        tag = str(im['id'])
        imnew['id'] = tag[7:]

        x = time.localtime(int(im['created']))
        imnew['created'] = time.strftime('%Y-%m-%d %H:%M:%S', x)

        mb = im['size']
        imnew['size'] = convertBytes(mb)

        mb = im['virtual_size']
        imnew['virtual_size'] = convertBytes(mb)
        image_info.append(imnew)
    # image_info = json.dumps(tmp)

    return render(request, "monitor.html",
                  {"dockerInfo": docker_info, "containerInfo": container_info, "imageInfo": image_info})


def monitorhost(request):
    return render(request, "monitorhost.html", {"rootDir": "/"})


def monitordocker(request):
    docker_info, container_info, image_info = get_cadvisor_infor()
    con_dict = {}
    for cti in container_info:
        curl = re.findall(r'\(.*?\)', cti)[0]
        curl = curl.strip('\(\)')
        con_dict[cti] = curl
    return render(request, "monitordocker.html", {"containerDict": con_dict})


def dockerinfo(request, dockerid):
    rootDir = "/docker/" + dockerid
    return render(request, "monitorhost.html", {"rootDir": rootDir})


@csrf_exempt
def api_subcontainers(request, name):
    url = cadvisorHost + "/api/v1.1/subcontainers/"
    if name:
        url += name
    data = urllib2.urlopen(url).read()
    return HttpResponse(data, content_type="application/json")


@csrf_exempt
def api_containers(request, name):
    url = cadvisorHost + "/api/v1.0/containers/"
    if name:
        url += name
    data = urllib2.urlopen(url).read()
    return HttpResponse(data, content_type="application/json")


def api_ps(request):
    url = cadvisorHost + "/api/v2.0/ps/"
    data = urllib2.urlopen(url).read()
    return HttpResponse(data, content_type="application/json")


def api_machine(request):
    url = cadvisorHost + "/api/v1.0/machine/"
    data = urllib2.urlopen(url).read()
    return HttpResponse(data, content_type="application/json")


def newtask(request):
    if request.is_ajax():
        data = request.POST
        stask = SpiderTask()
        stask.tid = str(uuid.uuid1())[0:8]
        stask.name = data['name']
        stask.cycletime = data['time']
        stask.url = data['urllist']
        stask.stra_delay = False
        stask.stra_ua = False
        stask.stra_proxy = False
        stask.stra_js = False
        if data.has_key('delay'):
            stask.stra_delay = True
        if data.has_key('setua'):
            stask.stra_ua = True
        if data.has_key('proxy'):
            stask.stra_proxy = True
        if data.has_key('jsexecute'):
            stask.stra_js = True
        stask.cid = SpiderCase.objects.get(cid=data['model'])
        stask.num_url = data['urlspider']
        stask.num_data = data['dataspider']
        stask.num_redis = data['redis']
        stask.num_mongo = data['mongo']
        stask.status = "init"  # running/pause
        stask.save()
        return HttpResponse('ok')
    else:
        caselist = SpiderCase.objects.all()
        return render(request, "newtask.html", {"CaseItems": caselist})


def argu_network(request):
    taskid = request.GET['TaskId']
    data = {}
    nodelists = []
    linklists = []
    node = {"name": "", "nodeid": 1, "status": "nomal"}
    link = {"source": "1", "target": "2"}
    counter = 1
    task = SpiderTask.objects.get(tid=taskid)
    for i in range(0, task.num_url):
        node_temp = node
        node_temp['name'] = "urlSpider_" + str(i + 1)
        node_temp['nodeid'] = counter
        node_temp['status'] = "url"
        counter += 1
        nodelists.append(copy.deepcopy(node_temp))
    data_one = counter
    for i in range(0, task.num_data):
        node_temp = node
        node_temp['name'] = "dataSpider_" + str(i + 1)
        node_temp['nodeid'] = counter
        node_temp['status'] = "data"
        counter += 1
        nodelists.append(copy.deepcopy(node_temp))
    redis_one = counter
    for i in range(0, task.num_redis):
        node_temp = node
        node_temp['name'] = "redis_" + str(i + 1)
        node_temp['nodeid'] = counter
        node_temp['status'] = "redis"
        counter += 1
        nodelists.append(copy.deepcopy(node_temp))
        if i == 0:
            for j in range(1, task.num_url + 1):
                link_temp = link
                link_temp['source'] = str("redis_1")
                link_temp['target'] = str("urlSpider_" + str(j))
                linklists.append(copy.deepcopy(link_temp))
            for j in range(1, task.num_data + 1):
                link_temp = link
                link_temp['source'] = str("redis_1")
                link_temp['target'] = str("dataSpider_" + str(j))
                linklists.append(copy.deepcopy(link_temp))
        else:
            link_temp = link
            link_temp['source'] = str("redis_1")
            link_temp['target'] = str(node_temp['name'])
            linklists.append(copy.deepcopy(link_temp))
    mongo_one = counter
    for i in range(0, task.num_mongo):
        node_temp = node
        node_temp['name'] = "mongo_" + str(i + 1)
        node_temp['nodeid'] = counter
        node_temp['status'] = "mongo"
        counter += 1
        nodelists.append(copy.deepcopy(node_temp))
        if i == 0:
            for j in range(1, task.num_url + 1):
                link_temp = link
                link_temp['source'] = str("mongo_1")
                link_temp['target'] = str("urlSpider_" + str(j))
                linklists.append(copy.deepcopy(link_temp))
            for j in range(1, task.num_data + 1):
                link_temp = link
                link_temp['source'] = str("mongo_1")
                link_temp['target'] = str("dataSpider_" + str(j))
                linklists.append(copy.deepcopy(link_temp))
        else:
            link_temp = link
            link_temp['source'] = str("mongo_1")
            link_temp['target'] = str(node_temp['name'])
            linklists.append(copy.deepcopy(link_temp))
    data['sides'] = linklists
    data['nodes'] = nodelists
    # json_data = serializers.serialize("json", data)
    json_data = json.dumps(data)
    return HttpResponse(json_data, content_type="application/json")


def argu_tasklist(request):
    obj_data = SpiderTask.objects.values("tid", "name", "status", "cycletime")
    data = list(obj_data)
    json_data = json.dumps(data)
    return HttpResponse(json_data, content_type="application/json")


def argu_taskrun(request):
    taskid = request.GET['TaskId']
    dt = Dockertask(taskid)
    data = dt.start_task()
    return HttpResponse(data)


def argu_taskstop(request):
    taskid = request.GET['TaskId']
    dt = Dockertask(taskid)
    data = dt.stop_task()
    return HttpResponse(data)


def argu_taskdel(request):
    taskid = request.GET['TaskId']
    dt = Dockertask(taskid)
    data = dt.delete_task()
    return HttpResponse(data)


def argu_taskinfo(request):
    taskid = request.GET['TaskId']
    obj_data = SpiderTask.objects.get(tid=taskid)
    dict_data = obj_data.__dict__
    cname = SpiderCase.objects.get(cid=dict_data['cid_id']).name
    dict_data['casename'] = cname
    dict_data.pop("createDate")
    dict_data.pop("editDate")
    dict_data.pop("_state")
    json_data = json.dumps(dict_data)
    return HttpResponse(json_data, content_type="application/json")


# data in mongodb
def argu_taskdata(request):
    taskid = request.GET['TaskId']
    dt = Dockertask(taskid)
    dt.get_connection()
    data = dt.get_data_item()
    json_data = json.dumps(list(data))
    return HttpResponse(json_data, content_type="application/json")


@accept_websocket
def echo(request):
    if request.is_websocket:
        client = request.websocket
        for message in request.websocket:
            if not message:
                break
            client.send("server response:" + message)


@accept_websocket
def ws_urlspider(request):
    if request.is_websocket:
        taskid = request.GET['TaskId']
        dt = Dockertask(taskid)
        dt.get_connection()
        client = request.websocket
        while True:
            msg = dt.get_count_urlspider()
            if msg:
                client.send(str(msg))
            else:
                client.send("0");
            time.sleep(3)


@accept_websocket
def ws_dataspider(request):
    if request.is_websocket:
        taskid = request.GET['TaskId']
        dt = Dockertask(taskid)
        dt.get_connection()
        client = request.websocket
        while True:
            msg = dt.get_count_dataspider()
            if msg:
                client.send(str(msg))
            else:
                client.send("0");
            time.sleep(3)


@accept_websocket
def ws_taskcount(request):
    if request.is_websocket:
        taskid = request.GET['TaskId']
        dt = Dockertask(taskid)
        dt.get_connection()
        client = request.websocket
        while True:
            msg = dt.get_count_item()
            if msg:
                client.send(str(msg))
            else:
                client.send("0");
            time.sleep(3)


@accept_websocket
def ws_taskoutput(request):
    if request.is_websocket:
        taskid = request.GET['TaskId']
        client = request.websocket
        while True:
            obj_data = SpiderShell.objects.filter(tid=taskid)
            if obj_data:
                for obj in obj_data:
                    msg = obj.text
                    if msg:
                        client.send(str(msg))
                    msg = "\n-------------------------------------------------------\n"
                    client.send(str(msg))
                    # obj.delete()
            time.sleep(60)


# ---------------------------**----------------------------------------

def get_scrapy_response(url):
    body_code = urllib2.urlopen(url).read()
    temp_response = scrapy.http.HtmlResponse(url)
    scrapy_response = temp_response.replace(body=body_code)
    # change the encoding in response
    scrapy_response._encoding = 'utf-8'
    title = re.search('<title>(.*?)</title>', body_code)
    title = title.group(1)
    return scrapy_response, title


def get_datapage_list(url, xpath_rule):
    scrapy_response, title = get_scrapy_response(url)
    sel = scrapy.selector.Selector(scrapy_response)
    data_urls = sel.xpath(xpath_rule).extract()
    return list(set(data_urls)), title


def get_title(url):
    temp = re.search('<title>(.*?)</title>', urllib2.urlopen(url).read())
    return temp.group(1)


def write_linklist(url, datap):
    global link_list
    temp_list, url_title = get_datapage_list(url, datap)
    temp_dict = dict(url=url, datalist=temp_list, title=url_title)
    link_list.append(temp_dict)


def set_datapageurl():
    global link_list
    global data_page_url
    for temp_dict in link_list:
        if len(temp_dict['datalist']):
            data_page_url = temp_dict['datalist'][0]
            break


def toDicts(objs):
    obj_arr = []
    for o in objs:
        obj_arr.append(o.toDict())
    return obj_arr


def get_cadvisor_infor():
    docker_dict = {}
    container_list = []
    image_str = ""
    url = cadvisorHost + "/docker"
    html_page = urllib2.urlopen(url)
    soup = bs4.BeautifulSoup(html_page, "lxml")
    # select docker_dict
    tag_docker = soup.find_all('h3', string="Driver Status")[0]
    tag_docker = tag_docker.parent.parent
    for li in tag_docker.find_all('li'):
        if str(li).strip():
            k_en = li.span.string
            val_all = li.get_text()
            if not k_en or "Storage" in k_en:
                continue
            val = val_all.replace(k_en, '')
            val = val.strip()
            k_cn = translate(k_en)
            docker_dict[k_cn] = val
    # select container_list
    tag_contain = soup.find_all('h3', string="Subcontainers")[0]
    tag_contain = tag_contain.parent.parent
    for a in tag_contain.find_all('a'):
        container_list.append(a.string.strip())
    # select
    tag_script = soup.find_all('script')[-1]
    scripts = str(tag_script.string)
    image_str = re.findall(r'\(\[.*?\]\)', scripts)[0]
    return docker_dict, container_list, image_str


def translate(en):
    dic = {u'Dirs': u'目录数量', u'Dirperm1 Supported': u'Dirperm1支持', u'Number of Images': u'镜像数量',
           u'Kernel Version': u'内核版本', u'驱动类型': u'aufs', u'Root Dir': u'根目录',
           u'Docker Version': u'Docker版本', u'Docker Root Directory': u'Docker根目录',
           u'Number of Containers': u'容器数量', u'Execution  Driver': u'', u'Backing Filesystem': u'文件系统',
           u'OS Version': u'系统版本', u'Host Name': u'主机名称'}
    if dic.has_key(en):
        res = dic[en]
    else:
        res = en
    return res


def convertBytes(bytes, lst=['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']):
    i = int(math.floor(
        math.log(bytes, 1024)
    ))
    if i >= len(lst):
        i = len(lst) - 1
    return ('%.2f' + " " + lst[i]) % (bytes / math.pow(1024, i))


def getChildTag(tag):
    tmp_list = []
    for child in tag.contents:
        try:
            a = child.contents
            child_list = getChildTag(child)
            if child_list:
                tmp_dic = {}
                tmp_dic['text'] = child.name
                tmp_dic['nodes'] = child_list
                tmp_list.append(tmp_dic)
        except:
            s = child.strip()
            if s:
                tmp_dic = {}
                tmp_dic['text'] = cgi.escape(s)
                tmp_list.append(tmp_dic)
    return tmp_list


def get_container_dict(container_list):
    container_dict = {"URL爬虫节点": [], "DATA爬虫节点": [], "Redis队列节点": [], "Mongo数据库节点": [], "其他节点": []}
    for ct in container_list:
        if "url" in ct:
            pass
