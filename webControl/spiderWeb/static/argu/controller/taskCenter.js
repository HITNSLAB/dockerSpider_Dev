//任务列表的控制器
spiderControl.controller('taskCenterCtrl', ['$scope', '$http', '$timeout', '$state', '$uibModal', function ($scope, $http, $timeout, $state, $uibModal) {
    $scope.workspaces = [];
    $scope.workspaces.push({
        name: '任务列表'
    });

    $scope.tasklist = [];

    $scope.gettasklist = function () {
        $http({
            method: 'GET',
            url: '/argu_tasklist'
        }).then(function successCallback(response) {
            $scope.tasklist = response.data;
            $scope.workspaces.forEach(function (wk, index) {
                var colData = {
                    workspace: wk.name
                };

                wk.rows = $scope.tasklist;

                wk.bsTableControl = {
                    options: {
                        data: wk.rows,
                        rowStyle: function (row, index) {
                            return {
                                classes: 'none'
                            };
                        },
                        cache: false,
                        uniqueId: 'index',
                        height: 700,
                        striped: true,
                        pagination: true,
                        pageSize: 20,
                        pageList: [5, 10, 25, 50, 100, 200],
                        search: true,
                        showColumns: true,
                        showRefresh: false,
                        showExport: true,
                        exportDataType: 'all',
                        minimumCountColumns: 2,
                        clickToSelect: false,
                        showToggle: false,
                        maintainSelected: true,
                        columns: [{
                            field: 'tid',
                            title: '#',
                            align: 'right',
                            valign: 'bottom',
                            width: '3%',
                            sortable: true
                        }, {
                            field: 'name',
                            title: '任务名称',
                            align: 'center',
                            valign: 'bottom',
                            sortable: true
                        }, {
                            field: 'cycletime',
                            title: '运行周期(天)',
                            align: 'center',
                            valign: 'middle',
                            sortable: true
                        }, {
                            field: 'status',
                            title: '状态',
                            align: 'left',
                            valign: 'top',
                            formatter: statusFormatter,
                            sortable: true
                        }, {
                            field: 'flag',
                            title: '操作',
                            align: 'center',
                            valign: 'middle',
                            clickToSelect: false,
                            formatter: flagFormatter,
                            //events: flagEvents
                        }]
                    }
                };

                function flagFormatter(value, row, index) {
                    var id = "'" + row.tid + "'";
                    return '<a href="" ng-click="$parent.play(' + id + ')"><i class="fa fa-play"></i></a>&nbsp&nbsp;' +
                        '<a href="" ng-click="$parent.pause(' + id + ')"><i class="fa fa-pause"></i></a>&nbsp&nbsp;' +
                        '<a href="" ng-click="$parent.trash(' + id + ')"><i class="fa fa-trash"></i></a>&nbsp&nbsp' +
                        '<a href="" ng-click="$parent.edit(' + id + ')"><i class="fa fa-edit"></i></a>&nbsp&nbsp';
                }
                function statusFormatter(value){
                    if(value == 'init'){
                        return '<span class="label label-success">'+value+'</span>';
                    }
                    else if(value == 'running'){
                        return '<span class="label label-warning">'+value+'</span>';
                    }
                    else {
                        return '<span class="label label-danger">'+value+'</span>';
                    }
                }

            });
        }, function errorCallback(response) {
            // 请求失败执行代
            console.log("wrong!");
        });
    };
    $scope.gettasklist();
    $scope.workspaces.forEach(function (wk, index) {
        var colData = {
            workspace: wk.name
        };

        wk.rows = $scope.tasklist;

        wk.bsTableControl = {
            options: {
                data: wk.rows,
                rowStyle: function (row, index) {
                    return {
                        classes: 'none'
                    };
                },
                cache: false,
                uniqueId: 'index',
                height: 700,
                striped: true,
                pagination: true,
                pageSize: 20,
                pageList: [5, 10, 25, 50, 100, 200],
                search: true,
                showColumns: true,
                showRefresh: false,
                showExport: true,
                exportDataType: 'all',
                minimumCountColumns: 2,
                clickToSelect: false,
                showToggle: false,
                maintainSelected: true,
                columns: [{
                    field: 'tid',
                    title: '#',
                    align: 'right',
                    valign: 'bottom',
                    width: '3%',
                    sortable: true
                }, {
                    field: 'name',
                    title: '任务名称',
                    align: 'center',
                    valign: 'bottom',
                    sortable: true
                }, {
                    field: 'cycletime',
                    title: '运行周期',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'status',
                    title: '状态',
                    align: 'left',
                    valign: 'top',
                    sortable: true
                }, {
                    field: 'flag',
                    title: '操作',
                    align: 'center',
                    valign: 'middle',
                    clickToSelect: false,
                    formatter: flagFormatter,
                    //events: flagEvents
                }]
            }
        };

        function flagFormatter(value, row, index) {
            var id = "'" + row.tid + "'";
            return '<a href="" ng-click="$parent.play(' + id + ')"><i class="fa fa-play"></i></a>&nbsp&nbsp;' +
                '<a href="" ng-click="$parent.pause(' + id + ')"><i class="fa fa-pause"></i></a>&nbsp&nbsp;' +
                '<a href="" ng-click="$parent.trash(' + id + ')"><i class="fa fa-trash"></i></a>&nbsp&nbsp' +
                '<a href="" ng-click="$parent.edit(' + id + ')"><i class="fa fa-edit"></i></a>&nbsp&nbsp';
        }

    });
    //任务的各项操作 运行 暂停 编辑 删除
    $scope.play = function (row) {
        var modalInstance = $uibModal.open({
            backdrop: false,
            size: 'sm',
            animation: true,
            templateUrl: '/static/argu/modal/modalinfo.html',
            controller: 'modalplayCtrl',
            resolve: {
                content: function () {
                    return "确定开始任务: ";
                },
                head: function () {
                    return "开始任务";
                },
                row: function () {
                    return row;
                }
            }
        });
        $scope.gettasklist();
        $('#table').bootstrapTable('refreshOptions');

    };

    $scope.pause = function (row) {
        var modalInstance = $uibModal.open({
            backdrop: false,
            size: 'sm',
            animation: true,
            templateUrl: '/static/argu/modal/modalinfo.html',
            controller: 'modalpauseCtrl',
            resolve: {
                content: function () {
                    return "确定暂停任务: ";
                },
                head: function () {
                    return "暂停任务";
                },
                row: function () {
                    return row;
                }
            }
        });
        $scope.gettasklist();
        $('#table').bootstrapTable('refreshOptions');
    };

    $scope.edit = function (row) {
        $state.go('taskInfo', {
            taskId: row
        });
    };
    $scope.trash = function (row) {
        //删除任务，需要遍历找到相对应的元素
        var modalInstance = $uibModal.open({
            backdrop: false,
            size: 'sm',
            animation: true,
            templateUrl: '/static/argu/modal/modalwarn.html',
            controller: 'modaldeleteCtrl',
            resolve: {
                content: function () {
                    return "确定删除任务: ";
                },
                head: function () {
                    return "删除任务";
                },
                scope: function () {
                    return $scope;
                },
                row: function () {
                    return row;
                }
            }
        });
    };

    $scope.changeCurrentWorkspace = function (wk) {
        $scope.currentWorkspace = wk;
    };

    $scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
            $scope.changeCurrentWorkspace($scope.workspaces[0]);
        });
    });
}]);
spiderControl.factory('MyData', function ($websocket, $q) {
    // Open a WebSocket connection
    var service = {};
    var _url = '';
    service.seturl = function (url) {
        _url = url;
    };

    service.conn = function () {
        //var dataStream = $websocket('ws://' + window.location.host + '/ws_taskoutput/?TaskId=24915dca');
        var dataStream = $websocket(_url);
        var collection = [];

        dataStream.onMessage(function (message) {
            collection.push(message.data);
        });

        var methods = {
            collection: collection,
            get: function () {
                dataStream.send(JSON.stringify({action: 'get'}));
            },
            send: function (message) {
                if (angular.isString(message)) {
                    dataStream.send(message);
                }
                else if (angular.isObject(message)) {
                    dataStream.send(JSON.stringify(message));
                }
            }
        };

        return methods;
    };
    return service;
});


////任务详情页控制器
spiderControl.controller('taskInfoCtrl', ['$rootScope', '$http', '$scope', '$location', '$stateParams', '$timeout', '$interval', 'MyData', function ($rootScope, $http, $scope, $location, $stateParams, $timeout, $interval, MyData) {
    var taskId = $stateParams.taskId;
    console.log(taskId);
    $scope.hl = '';

    MyData.seturl('ws://' + window.location.host + '/ws_taskoutput/?TaskId=' + taskId);
    $scope.mydata = MyData.conn();


    $interval(function () {
        $scope.hl = '';
        angular.forEach($scope.mydata.collection, function (t, index, array) {
            $scope.hl += t;
        });
    }, 10000);

    $http({
        method: 'GET',
        url: '/argu_taskinfo',
        params: {
            'TaskId': taskId
        }
    }).then(function successCallback(response) {
        $scope.info = response.data;
        $scope.knobData[0].value = $scope.info.num_url;
        $scope.knobData[1].value = $scope.info.num_data;
        $scope.knobData[2].value = $scope.info.num_redis;
        $scope.knobData[3].value = $scope.info.num_mongo;
        $("#ionrange_time").ionRangeSlider({
            min: 1,
            max: 10,
            step: 1,
            type: 'single',
            postfix: "天",
            grid: true,
            from: $scope.info.cycletime,
            disable: true
        });

    }, function errorCallback(response) {
        // 请求失败执行代码
    });

    $scope.info = {
        "status": "init",
        "cycletime": 9,
        "name": "\u767e\u5ea6",
        "num_data": 8,
        "url": "http://bbs.ghtt.net",
        "stra_proxy": false,
        "num_mongo": 2,
        "stra_delay": true,
        "stra_ua": true,
        "cid_id": 12,
        "casename": "discuz\u8bba\u575b",
        "tid": "24915dca",
        "stra_js": false,
        "num_redis": 1,
        "num_url": 6
    };

    $scope.knobData = [{
        value: $scope.info.num_url,
        options: {
            width: 130,
            height: 130,
            fgColor: "#1AB394",
            min: 0,
            readOnly: true,
            max: 20
        }
    },
        {
            value: $scope.info.num_data,
            options: {
                width: 130,
                height: 130,
                fgColor: "#1AB394",
                min: 0,
                readOnly: true,
                max: 50
            }
        },
        {
            value: $scope.info.num_redis,
            options: {
                width: 130,
                height: 130,
                fgColor: "#1AB394",
                readOnly: true,
                min: 0,
                max: 5
            }
        },
        {
            value: $scope.info.num_mongo,
            options: {
                width: 130,
                height: 130,
                fgColor: "#1AB394",
                readOnly: true,
                min: 0,
                max: 5
            }
        }
    ];
    $http({
        method: 'GET',
        url: '/argu_network',
        params: {
            'TaskId': taskId
        }
    }).then(function successCallback(response) {
        $scope.nodes = response.data;
        $scope.nodes.nodes.forEach(function (nd, index) {
            nd.symbolSize = 20;
            nd.draggable = true;
            if (nd.status == 'url') {
                nd.category = 'urlspider节点';
            } else if (nd.status == 'data') {
                nd.category = 'dataspider节点';
            } else if (nd.status == 'redis') {
                nd.category = 'redis节点';
            } else if (nd.status == 'mongo') {
                nd.category = 'mongo节点';
            } else {
                nd.category = '异常节点';
            }
        });
        $scope.graphoption = {
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                offset: 0,
                color: '#f7f8fa'
            }, {
                offset: 1,
                color: '#cdd0d5'
            }]),
            title: {
                text: "节点信息表",
                subtext: "当前各节点运行情况",
                top: "top",
                left: "center"
            },
            tooltip: {},
            legend: [{
                formatter: function (name) {
                    return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
                },
                tooltip: {
                    show: true
                },
                selectedMode: 'false',
                bottom: 20,
                data: ['dataspider节点', 'urlspider节点', 'redis节点', 'mongo节点', '异常节点']
            }],
            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: true
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            animationDuration: 3000,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                name: '节点',
                type: 'graph',
                layout: 'force',

                force: {
                    repulsion: 50
                },
                data: $scope.nodes.nodes,
                links: $scope.nodes.sides,
                categories: [{
                    'name': 'dataspider节点'
                }, {
                    'name': 'urlspider节点'
                }, {
                    'name': 'redis节点'
                }, {
                    'name': 'mongo节点'
                }, {
                    'name': '异常节点'
                }],
                focusNodeAdjacency: true,
                roam: true,
                label: {
                    normal: {

                        show: true,
                        position: 'top',

                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0,
                        type: "solid"
                    }
                }
            }]
        };


    }, function errorCallback(response) {
        // 请求失败执行代码
    });


    $scope.baseConfig = {
        dataLoaded: true
    };

    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    function makeData(t) {
        var now = new Date();
        return {
            name: now.Format("hh:mm:ss"),
            value: [
                now.getTime(),
                t
            ]
        }
    }

    function format(date, fmt) {
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }


    MyData.seturl('ws://' + window.location.host + '/ws_urlspider/?TaskId=' + taskId);
    $scope.urlspider = MyData.conn();
    var data1 = [];
    angular.forEach($scope.urlspider.collection, function (t, index, array) {
        data1.push(makeData(t));
    });
    $scope.lineOption1 = {

        title: {
            text: 'urlspider_redis任务集'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (p) {
                return format(new Date(p[0].value[0]), 'hh:mm:ss') + "<br/><span style='display: block;height: 10px;width: 10px;border-radius: 5px;background-color: " + p[0].color + ";'></span>心率 : " + p[0].value[1]
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            name: '时间',
            //interval: 10 * 60 * 1000,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            nameTextStyle: {
                color: '#333'
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                formatter: function (value) {
                    return format(new Date(value), 'hh:mm:ss')
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [{
            name: 'urlspider节点',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data1
        }]
    };
    MyData.seturl('ws://' + window.location.host + '/ws_dataspider/?TaskId=' + taskId);
    $scope.dataspider = MyData.conn();
    var data2 = [];
    angular.forEach($scope.dataspider.collection, function (t, index, array) {
        data2.push(makeData(t));
    });
    $scope.taskcount = MyData.conn();
    $scope.lineOption2 = {

        title: {
            text: 'dataspider_redis任务集'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (p) {
                return format(new Date(p[0].value[0]), 'hh:mm:ss') + "<br/><span style='display: block;height: 10px;width: 10px;border-radius: 5px;background-color: " + p[0].color + ";'></span>心率 : " + p[0].value[1]
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            name: '时间',
            //interval: 10 * 60 * 1000,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            nameTextStyle: {
                color: '#333'
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                formatter: function (value) {
                    return format(new Date(value), 'hh:mm:ss')
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [{
            name: 'dataspider节点',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data2
        }]
    };
    MyData.seturl('ws://' + window.location.host + '/ws_taskcount/?TaskId=' + taskId);
    $scope.taskcount = MyData.conn();
    var data3 = [];
    angular.forEach($scope.taskcount.collection, function (t, index, array) {
        data3.push(makeData(t));
    });
    $scope.lineOption3 = {

        title: {
            text: 'mongodb数据总量'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (p) {
                return format(new Date(p[0].value[0]), 'hh:mm:ss') + "<br/><span style='display: block;height: 10px;width: 10px;border-radius: 5px;background-color: " + p[0].color + ";'></span>心率 : " + p[0].value[1]
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            name: '时间',
            //interval: 10 * 60 * 1000,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            nameTextStyle: {
                color: '#333'
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                formatter: function (value) {
                    return format(new Date(value), 'hh:mm:ss')
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '爬取数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data3
        }]
    };
    $interval(function () {
        $scope.urlcount = $scope.urlspider.collection[$scope.urlspider.collection.length-1];
        angular.forEach($scope.urlspider.collection, function (t, index, array) {
            if(!data1[index]){
                data1.push(makeData(t));
            }
            data1.push(makeData(t));
        });
        $scope.datacount = $scope.dataspider.collection[$scope.dataspider.collection.length-1];

        angular.forEach($scope.dataspider.collection, function (t, index, array) {
            if(!data2[index]){
                data2.push(makeData(t));
            }

        });
        $scope.data3count = $scope.taskcount.collection[$scope.taskcount.collection.length-1];
        angular.forEach($scope.taskcount.collection, function (t, index, array) {
            if(!data3[index]){
                data3.push(makeData(t));
            }
        });
        $scope.lineOption1.series[0].data = data1;
        $scope.lineOption2.series[0].data = data2;
        $scope.lineOption3.series[0].data = data3;
    }, 3000);
    var index = 1;
    $scope.workspaces = [];
    $scope.workspaces.push({
        name: '任务列表'
    });
    $http({
        method: 'GET',
        url: '/argu_taskdata',
        params: {
            'TaskId': taskId
        }
    }).then(function successCallback(response) {
        $scope.datashow = response.data;
        $scope.workspaces.forEach(function (wk, index) {
            var colData = {
                workspace: wk.name
            };
            wk.rows = $scope.datashow;

            wk.bsTableControl = {
                options: {
                    data: wk.rows,
                    rowStyle: function (row, index) {
                        return {
                            classes: 'none'
                        };
                    },
                    cache: false,
                    uniqueId: 'index',
                    height: 1000,
                    showExport: true,
                    exportDataType: 'all',
                    striped: true,
                    pagination: true,
                    pageSize: 80,
                    pageList: [5, 10, 25, 50, 100, 200],
                    search: true,
                    showColumns: true,
                    showRefresh: false,
                    minimumCountColumns: 2,
                    clickToSelect: false,
                    showToggle: false,
                    maintainSelected: true,
                    columns: [{
                        field: 'forum',
                        title: '论坛',
                        align: 'center',
                        valign: 'bottom',
                        sortable: true
                    }, {
                        field: 'title',
                        title: '标题',
                        align: 'center',
                        valign: 'bottom',
                        sortable: true
                    }, {
                        field: 'author',
                        title: '作者',
                        align: 'center',
                        valign: 'middle',
                        sortable: true
                    }, {
                        field: 'datetime',
                        title: '发帖时间',
                        align: 'left',
                        valign: 'top',
                        sortable: true
                    }, {
                        field: 'content',
                        title: '内容',
                        align: 'center',
                        valign: 'left',
                        sortable: false
                    }]
                }
            };
        });
    }, function errorCallback(response) {
        // 请求失败执行代码
    });
    $scope.workspaces.forEach(function (wk, index) {
        var colData = {
            workspace: wk.name
        };
        wk.rows = $scope.datashow;

        wk.bsTableControl = {
            options: {
                data: wk.rows,
                rowStyle: function (row, index) {
                    return {
                        classes: 'none'
                    };
                },
                cache: false,
                uniqueId: 'index',
                height: 1000,
                showExport: true,
                exportDataType: 'all',
                striped: true,
                pagination: true,
                pageSize: 80,
                pageList: [5, 10, 25, 50, 100, 200],
                search: true,
                showColumns: true,
                showRefresh: false,
                minimumCountColumns: 2,
                clickToSelect: false,
                showToggle: false,
                maintainSelected: true,
                columns: [{
                    field: 'forum',
                    title: '论坛',
                    align: 'center',
                    valign: 'bottom',
                    sortable: true
                }, {
                    field: 'title',
                    title: '标题',
                    align: 'center',
                    valign: 'bottom',
                    sortable: true
                }, {
                    field: 'author',
                    title: '作者',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'datetime',
                    title: '发帖时间',
                    align: 'left',
                    valign: 'top',
                    sortable: true
                }, {
                    field: 'content',
                    title: '内容',
                    align: 'center',
                    valign: 'left',
                    sortable: false
                }]
            }
        };
    });

    $scope.changeCurrentWorkspace = function (wk) {
        $scope.currentWorkspace = wk;
    };

    //Select the workspace in document ready event
    //  $(document).ready(function () {
    //      $scope.changeCurrentWorkspace($scope.workspaces[0]);
    //      $scope.$apply();
    //  });
    $scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
            $scope.changeCurrentWorkspace($scope.workspaces[0]);
        });

        //$scope.$apply();
    });
}]);

//模态框的控制器
spiderControl.controller('modalpauseCtrl', ['$rootScope', '$uibModalInstance', '$scope', 'content', 'head', 'row', '$http', '$timeout', function ($rootScope, $uibModalInstance, $scope, content, head, row, $http, $timeout) {
    $scope.head = head;
    $scope.content = content + row + "么？";
    $scope.ok = function () {
        $scope.content = "请等待..";
        $http({
            method: 'GET',
            url: '/argu_taskstop',
            params: {
                'TaskId': row
            }
        }).then(function successCallback(response) {
            if (response.data == "success") {
                $scope.content = "暂停成功，3s后关闭";
                $timeout(function () {
                    $uibModalInstance.close();
                    window.location.reload();
                }, 3000);
            } else {
                $scope.content = "错误" + response.data;
                $timeout(function () {
                    $uibModalInstance.close();
                }, 3000);
            }

        }, function errorCallback(response) {
            // 请求失败执行代码
            $scope.content = "服务器连接出现错误 3s后关闭";
            $timeout(function () {
                $uibModalInstance.close();
            }, 3000);
        });
    };
    $scope.cancel = function () {
        $uibModalInstance.close();
    }
}]);
spiderControl.controller('modalplayCtrl', ['$rootScope', '$uibModalInstance', '$scope', 'content', 'head', 'row', '$http', '$timeout', function ($rootScope, $uibModalInstance, $scope, content, head, row, $http, $timeout) {
    $scope.head = head;
    $scope.content = content + row + "么？";
    $scope.ok = function () {
        $scope.content = "请等待..";
        $http({
            method: 'GET',
            url: '/argu_taskrun',
            params: {
                'TaskId': row
            }
        }).then(function successCallback(response) {
            if (response.data == "success") {
                $scope.content = "开始成功，3s后关闭";
                $timeout(function () {
                    $uibModalInstance.close();
                    window.location.reload();
                }, 3000);

            } else {
                $scope.content = "错误" + response.data;
                $timeout(function () {
                    $uibModalInstance.close();
                }, 3000);
            }

        }, function errorCallback(response) {
            // 请求失败执行代码
            $scope.content = "服务器连接出现错误 3s后关闭";
            $timeout(function () {
                $uibModalInstance.close();
            }, 3000);
        });
    };
    $scope.cancel = function () {
        $uibModalInstance.close();
    }
}]);
spiderControl.controller('modaldeleteCtrl', ['$rootScope', '$uibModalInstance', '$scope', 'content', 'head', 'row', '$http', '$timeout', 'scope', function ($rootScope, $uibModalInstance, $scope, content, head, row, $http, $timeout, scope) {
    $scope.head = head;
    $scope.content = content + row + "么？";
    $scope.ok = function () {
        $scope.content = "请等待..";
        $http({
            method: 'GET',
            url: '/argu_taskdel',
            params: {
                'TaskId': row
            }
        }).then(function successCallback(response) {
            if (response.data == "success") {
                $scope.content = "删除成功，3s后关闭";
                var whatIndex = null;
                angular.forEach(scope.currentWorkspace.bsTableControl.options.data, function (cb, index) {
                    if (cb.tid == row) {
                        whatIndex = index;
                    }
                });
                scope.currentWorkspace.bsTableControl.options.data.splice(whatIndex, 1);
                console.log("trash" + row);
                $timeout(function () {
                    $uibModalInstance.close();
                }, 3000);
            } else {
                $scope.content = "错误" + response.data;
                $timeout(function () {
                    $uibModalInstance.close();
                }, 3000);
            }
        }, function errorCallback(response) {
            // 请求失败执行代码
            $scope.content = "服务器连接出现错误 3s后关闭";
            $timeout(function () {
                $uibModalInstance.close();
            }, 3000);
        });
    };
    $scope.cancel = function () {
        $uibModalInstance.close();
    }
}]);
