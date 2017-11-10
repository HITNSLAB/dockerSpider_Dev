spiderControl.factory('MyData', function ($websocket) {
    // Open a WebSocket connection
    var dataStream = $websocket('ws://' + window.location.host + '/ws_taskoutput/?TaskId=860d212c');

    var collection = [];

    dataStream.onMessage(function (message) {
        collection.push(JSON.parse(message.data));
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
});
//任务列表的控制器
spiderControl.controller('taskCenterCtrl', ['$scope', '$http', '$timeout', '$state', '$uibModal', '$http', '$websocket', 'MyData', function ($scope, $http, $timeout, $state, $uibModal, $http, $websocket, MyData) {
    $scope.workspaces = [];
    $scope.workspaces.push({
        name: '任务列表'
    });
    $scope.mydata = MyData;
    Messages.send({
        TaskId: '860d212c'
    });

    $scope.selectid = "";
    $scope.data = [];
    $scope.getData = function () {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8000/argu_tasklist/'
        }).then(function successCallback(response) {
            $scope.data = response;
            console.log($scope.data);
        }, function errorCallback(response) {
            console.log("error");
            // 请求失败执行代码
        });
    };
    $scope.getData();

    function makeRandomRows(colData) {
        var rows = [];
        for (var i = 0; i < 500; i++) {
            rows.push($.extend({
                index: i,
                id: 'row ' + i,
                name: 'GOOG' + i,
                flagImage: Math.random() < 0.4 ?
                    'img/blueFlag16.png' : Math.random() < 0.75 ?
                        'img/yellowFlag16.png' : 'img/greenFlag16.png'
            }, colData));
        }
        return rows;

    }

    $scope.workspaces.forEach(function (wk, index) {
        var colData = {
            workspace: wk.name
        };
        wk.rows = makeRandomRows(colData);


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
                    field: 'index',
                    title: '#',
                    align: 'right',
                    valign: 'bottom',
                    width: '3%',
                    sortable: true
                }, {
                    field: 'id',
                    title: '任务名称',
                    align: 'center',
                    valign: 'bottom',
                    sortable: true
                }, {
                    field: 'name',
                    title: '运行周期',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'workspace',
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
            return '<a href="" ng-click="$parent.play(' + row.index + ')"><i class="fa fa-play"></i></a>&nbsp&nbsp;' +
                '<a href="" ng-click="$parent.pause(' + row.index + ')"><i class="fa fa-pause"></i></a>&nbsp&nbsp;' +
                '<a href="" ng-click="$parent.trash(' + row.index + ')"><i class="fa fa-trash"></i></a>&nbsp&nbsp' +
                '<a href="" ng-click="$parent.edit(' + row.index + ')"><i class="fa fa-edit"></i></a>&nbsp&nbsp';
        }

    });

    //任务的各项操作 运行 暂停 编辑 删除
    $scope.play = function (row) {
        console.log("play" + row);
    };

    $scope.pause = function (row) {
        var modalInstance = $uibModal.open({
            backdrop: false,
            size: 'sm',
            animation: true,
            templateUrl: 'modal/modalfalse.html',
            controller: 'modalCtrl',
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
        console.log("pause" + row);
    };

    $scope.edit = function (row) {
        $state.go('taskInfo', {
            taskId: row
        });
    };
    $scope.trash = function (row) {
        //删除任务，需要遍历找到相对应的元素
        var whatIndex = null;
        angular.forEach($scope.currentWorkspace.bsTableControl.options.data, function (cb, index) {
            if (cb.index == row) {
                whatIndex = index;
            }
        });
        $scope.currentWorkspace.bsTableControl.options.data.splice(whatIndex, 1);
        console.log("trash" + row);
    };

    $scope.changeCurrentWorkspace = function (wk) {
        $scope.currentWorkspace = wk;
        console.log($scope.currentWorkspace);
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
////任务详情页控制器
spiderControl.controller('taskInfoCtrl', ['$rootScope', '$http', '$scope', '$location', '$stateParams', '$timeout', '$interval', function ($rootScope, $http, $scope, $location, $stateParams, $timeout, $interval) {
    var taskId = $stateParams.taskId;
    console.log(taskId);
    $scope.task = [{
        "url": "www.123.com",
        "name": "任务1",
        "model": "模板1",

    },];
    $scope.hl = "public class HelloWorld { /** * 输出一行字符串“Hello World!” * @param args */ public static void main(String[] args) { System.out.println(" + "Hello World!" + "); } }";
    $scope.info = [{
        "urlspider": "2",
        "dataspider": "10",
        "redis": "1",
        "mongo": "1",
        "cycle": "5"
    }];
    $scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
            $("#ionrange_time").ionRangeSlider({
                min: 1,
                max: 10,
                step: 1,
                type: 'single',
                postfix: "天",
                grid: true,
                from: $scope.info[0].cycle,
                disable: true
            });
        });
        //$scope.$apply();
    });
    $scope.sex = true;
    $scope.setua = true;
    $scope.proxy = true;
    $scope.jsexcute = true;
    $scope.submit = function () {
        console.log($scope.knobData);
        console.log($scope.info);
    };
    $scope.knobData = [{
        value: 2,
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
            value: 10,
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
            value: 1,
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
            value: 1,
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

    $scope.graphoption = {
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#f7f8fa'
        }, {
            offset: 1,
            color: '#cdd0d5'
        }]),
        title: {
            text: "广州大学数据分析",
            subtext: "各学院专业关系-Acring",
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
            data: ['计算机科学与教育软件学院', '地理科学学院', '机械与电气工程学院', '经济与统计学院', '土木工程学院', '新闻与传播学院', '外国语学院', '人文学院', '数学与信息科学学院', '工商管理学院', '法学院', '公共管理学院', '卫斯理安学院', '政治与公民教育学院', '旅游学院', '教育学院', '环境科学与工程学院', '化学化工学院', '物理与电子工程学院', '建筑与城市规划学院', '美术与设计学院', '生命科学学院', '体育学院', '音乐舞蹈学院']
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
            name: '广州大学',
            type: 'graph',
            layout: 'force',

            force: {
                repulsion: 50
            },
            data: [{
                "name": "广州大学",
                // "x": 0,
                // y: 0,
                "symbolSize": 20,
                "draggable": "true",
                "itemStyle": {
                    "normal": {
                        "color": "rgb(0,0,0)"
                    }
                },
                "value": 27

            }, {
                "name": "计算机科学与教育软件学院",
                "value": 3,
                "symbolSize": 9,
                "category": "计算机科学与教育软件学院",
                "draggable": "true"
            }, {
                "name": "计算机科学与技术",
                "symbolSize": 3,
                "category": "计算机科学与教育软件学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "软件工程",
                "symbolSize": 3,
                "category": "计算机科学与教育软件学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "网络工程",
                "symbolSize": 3,
                "category": "计算机科学与教育软件学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "地理科学学院",
                "value": 6,
                "symbolSize": 18,
                "category": "地理科学学院",
                "draggable": "true"
            }, {
                "name": "地理科学",
                "symbolSize": 3,
                "category": "地理科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "地理信息科学",
                "symbolSize": 3,
                "category": "地理科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "人文地理与城乡规划",
                "symbolSize": 3,
                "category": "地理科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "人文地理与城乡规划(区域物流)",
                "symbolSize": 3,
                "category": "地理科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "人文地理与城乡规划(不动产)",
                "symbolSize": 3,
                "category": "地理科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "自然地理与资源环境",
                "symbolSize": 3,
                "category": "地理科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "机械与电气工程学院",
                "value": 5,
                "symbolSize": 15,
                "category": "机械与电气工程学院",
                "draggable": "true"
            }, {
                "name": "电气工程及其自动化",
                "symbolSize": 3,
                "category": "机械与电气工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "机械设计制造及其自动化",
                "symbolSize": 3,
                "category": "机械与电气工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "电子信息工程",
                "symbolSize": 3,
                "category": "机械与电气工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "工业设计",
                "symbolSize": 3,
                "category": "机械与电气工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "通信工程",
                "symbolSize": 3,
                "category": "机械与电气工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "经济与统计学院",
                "value": 6,
                "symbolSize": 18,
                "category": "经济与统计学院",
                "draggable": "true"
            }, {
                "name": "统计学",
                "symbolSize": 3,
                "category": "经济与统计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "金融工程",
                "symbolSize": 3,
                "category": "经济与统计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "经济学",
                "symbolSize": 3,
                "category": "经济与统计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "国际经济与贸易",
                "symbolSize": 3,
                "category": "经济与统计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "金融学",
                "symbolSize": 3,
                "category": "经济与统计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "会计学",
                "symbolSize": 3,
                "category": "经济与统计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "土木工程学院",
                "value": 8,
                "symbolSize": 24,
                "category": "土木工程学院",
                "draggable": "true"
            }, {
                "name": "给排水科学与工程",
                "symbolSize": 3,
                "category": "土木工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "土木工程(道路与桥梁工程)",
                "symbolSize": 3,
                "category": "土木工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "土木工程(建筑工程)",
                "symbolSize": 3,
                "category": "土木工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "土木工程(综合试点)",
                "symbolSize": 3,
                "category": "土木工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "土木工程(结构分析)",
                "symbolSize": 3,
                "category": "土木工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "土木工程(地下建筑工程)",
                "symbolSize": 3,
                "category": "土木工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "交通工程",
                "symbolSize": 3,
                "category": "土木工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "建筑环境与能源应用工程",
                "symbolSize": 3,
                "category": "土木工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "新闻与传播学院",
                "value": 5,
                "symbolSize": 15,
                "category": "新闻与传播学院",
                "draggable": "true"
            }, {
                "name": "广告学",
                "symbolSize": 3,
                "category": "新闻与传播学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "广播电视学",
                "symbolSize": 3,
                "category": "新闻与传播学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "网络与新媒体",
                "symbolSize": 3,
                "category": "新闻与传播学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "播音与主持艺术",
                "symbolSize": 3,
                "category": "新闻与传播学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "广播电视编导",
                "symbolSize": 3,
                "category": "新闻与传播学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "外国语学院",
                "value": 6,
                "symbolSize": 18,
                "category": "外国语学院",
                "draggable": "true"
            }, {
                "name": "英语(翻译)",
                "symbolSize": 3,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "英语(教师教育)",
                "symbolSize": 3,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "英语(国际商务)",
                "symbolSize": 3,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "日语",
                "symbolSize": 3,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "英语",
                "symbolSize": 3,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "法语",
                "symbolSize": 3,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "人文学院",
                "value": 10,
                "symbolSize": 30,
                "category": "人文学院",
                "draggable": "true"
            }, {
                "name": "汉语言文学",
                "symbolSize": 3,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "历史学",
                "symbolSize": 3,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "汉语国际教育",
                "symbolSize": 3,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "汉语言文学(戏剧与影视学)",
                "symbolSize": 3,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "汉语言文学(文学)",
                "symbolSize": 3,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "汉语言文学(秘书学)",
                "symbolSize": 3,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "汉语言文学(应用语言学)",
                "symbolSize": 3,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "汉语言文学(教师教育)",
                "symbolSize": 3,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "历史学(教师教育)",
                "symbolSize": 3,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "历史学(文化资源开发与利用)",
                "symbolSize": 3,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "数学与信息科学学院",
                "value": 6,
                "symbolSize": 18,
                "category": "数学与信息科学学院",
                "draggable": "true"
            }, {
                "name": "信息安全",
                "symbolSize": 3,
                "category": "数学与信息科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "数学与应用数学(金融数学)",
                "symbolSize": 3,
                "category": "数学与信息科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "信息与计算科学",
                "symbolSize": 3,
                "category": "数学与信息科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "数学与应用数学(教师教育)",
                "symbolSize": 3,
                "category": "数学与信息科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "数学与应用数学(精算学)",
                "symbolSize": 3,
                "category": "数学与信息科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "数学与应用数学(基础数学)",
                "symbolSize": 3,
                "category": "数学与信息科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "工商管理学院",
                "value": 6,
                "symbolSize": 18,
                "category": "工商管理学院",
                "draggable": "true"
            }, {
                "name": "工程管理",
                "symbolSize": 3,
                "category": "工商管理学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "物流管理",
                "symbolSize": 3,
                "category": "工商管理学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "工商管理",
                "symbolSize": 3,
                "category": "工商管理学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "电子商务",
                "symbolSize": 3,
                "category": "工商管理学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "市场营销",
                "symbolSize": 3,
                "category": "工商管理学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "人力资源管理",
                "symbolSize": 3,
                "category": "工商管理学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "法学院",
                "value": 2,
                "symbolSize": 6,
                "category": "法学院",
                "draggable": "true"
            }, {
                "name": "法学",
                "symbolSize": 3,
                "category": "法学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "法学（律师）",
                "symbolSize": 3,
                "category": "法学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "公共管理学院",
                "value": 3,
                "symbolSize": 9,
                "category": "公共管理学院",
                "draggable": "true"
            }, {
                "name": "社会工作",
                "symbolSize": 3,
                "category": "公共管理学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "行政管理",
                "symbolSize": 3,
                "category": "公共管理学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "公共事业管理",
                "symbolSize": 3,
                "category": "公共管理学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "卫斯理安学院",
                "value": 2,
                "symbolSize": 6,
                "category": "卫斯理安学院",
                "draggable": "true"
            }, {
                "name": "经济学(卫斯理安)",
                "symbolSize": 3,
                "category": "卫斯理安学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "工商管理(卫斯理安)",
                "symbolSize": 3,
                "category": "卫斯理安学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "政治与公民教育学院",
                "value": 1,
                "symbolSize": 3,
                "category": "政治与公民教育学院",
                "draggable": "true"
            }, {
                "name": "思想政治教育",
                "symbolSize": 3,
                "category": "政治与公民教育学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "旅游学院",
                "value": 4,
                "symbolSize": 12,
                "category": "旅游学院",
                "draggable": "true"
            }, {
                "name": "会展经济与管理",
                "symbolSize": 3,
                "category": "旅游学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "旅游管理(旅游企业管理)",
                "symbolSize": 3,
                "category": "旅游学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "旅游管理(酒店管理)",
                "symbolSize": 3,
                "category": "旅游学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "旅游管理[中法]",
                "symbolSize": 3,
                "category": "旅游学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "教育学院",
                "value": 6,
                "symbolSize": 18,
                "category": "教育学院",
                "draggable": "true"
            }, {
                "name": "心理学",
                "symbolSize": 3,
                "category": "教育学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "心理学（特殊儿童心理发展与教育）",
                "symbolSize": 3,
                "category": "教育学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "应用心理学",
                "symbolSize": 3,
                "category": "教育学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "教育技术学",
                "symbolSize": 3,
                "category": "教育学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "学前教育",
                "symbolSize": 3,
                "category": "教育学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "小学教育",
                "symbolSize": 3,
                "category": "教育学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "环境科学与工程学院",
                "value": 2,
                "symbolSize": 6,
                "category": "环境科学与工程学院",
                "draggable": "true"
            }, {
                "name": "环境工程",
                "symbolSize": 3,
                "category": "环境科学与工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "环境科学",
                "symbolSize": 3,
                "category": "环境科学与工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "化学化工学院",
                "value": 5,
                "symbolSize": 15,
                "category": "化学化工学院",
                "draggable": "true"
            }, {
                "name": "化学工程与工艺",
                "symbolSize": 3,
                "category": "化学化工学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "化学(教师教育)",
                "symbolSize": 3,
                "category": "化学化工学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "化学(精细化学品化学与技术)",
                "symbolSize": 3,
                "category": "化学化工学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "化学",
                "symbolSize": 3,
                "category": "化学化工学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "食品科学与工程",
                "symbolSize": 3,
                "category": "化学化工学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "物理与电子工程学院",
                "value": 4,
                "symbolSize": 12,
                "category": "物理与电子工程学院",
                "draggable": "true"
            }, {
                "name": "光电信息科学与工程",
                "symbolSize": 3,
                "category": "物理与电子工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "物联网工程",
                "symbolSize": 3,
                "category": "物理与电子工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "物理学",
                "symbolSize": 3,
                "category": "物理与电子工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "电子信息科学与技术",
                "symbolSize": 3,
                "category": "物理与电子工程学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "建筑与城市规划学院",
                "value": 4,
                "symbolSize": 12,
                "category": "建筑与城市规划学院",
                "draggable": "true"
            }, {
                "name": "建筑学",
                "symbolSize": 3,
                "category": "建筑与城市规划学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "城乡规划",
                "symbolSize": 3,
                "category": "建筑与城市规划学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "风景园林",
                "symbolSize": 3,
                "category": "建筑与城市规划学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "建筑学（五年制）",
                "symbolSize": 3,
                "category": "建筑与城市规划学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "美术与设计学院",
                "value": 9,
                "symbolSize": 27,
                "category": "美术与设计学院",
                "draggable": "true"
            }, {
                "name": "美术学",
                "symbolSize": 3,
                "category": "美术与设计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "美术学(教师教育)",
                "symbolSize": 3,
                "category": "美术与设计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "动画",
                "symbolSize": 3,
                "category": "美术与设计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "动画(游戏动画)",
                "symbolSize": 3,
                "category": "美术与设计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "绘画",
                "symbolSize": 3,
                "category": "美术与设计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "动画(动画音乐与合成)",
                "symbolSize": 3,
                "category": "美术与设计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "产品设计",
                "symbolSize": 3,
                "category": "美术与设计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "服装与服饰设计(服装设计)",
                "symbolSize": 3,
                "category": "美术与设计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "视觉传达设计",
                "symbolSize": 3,
                "category": "美术与设计学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "生命科学学院",
                "value": 3,
                "symbolSize": 9,
                "category": "生命科学学院",
                "draggable": "true"
            }, {
                "name": "生物科学",
                "symbolSize": 3,
                "category": "生命科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "生物工程",
                "symbolSize": 3,
                "category": "生命科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "生物技术",
                "symbolSize": 3,
                "category": "生命科学学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "体育学院",
                "value": 2,
                "symbolSize": 6,
                "category": "体育学院",
                "draggable": "true"
            }, {
                "name": "体育教育",
                "symbolSize": 3,
                "category": "体育学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "社会体育指导与管理",
                "symbolSize": 3,
                "category": "体育学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "音乐舞蹈学院",
                "value": 3,
                "symbolSize": 9,
                "category": "音乐舞蹈学院",
                "draggable": "true"
            }, {
                "name": "音乐学",
                "symbolSize": 3,
                "category": "音乐舞蹈学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "舞蹈编导(编导)",
                "symbolSize": 3,
                "category": "音乐舞蹈学院",
                "draggable": "true",
                "value": 1
            }, {
                "name": "舞蹈编导(教师教育)",
                "symbolSize": 3,
                "category": "音乐舞蹈学院",
                "draggable": "true",
                "value": 1
            }],
            links: [{
                "source": "广州大学",
                "target": "计算机科学与教育软件学院"
            }, {
                "source": "计算机科学与教育软件学院",
                "target": "计算机科学与技术"
            }, {
                "source": "计算机科学与教育软件学院",
                "target": "软件工程"
            }, {
                "source": "计算机科学与教育软件学院",
                "target": "网络工程"
            }, {
                "source": "广州大学",
                "target": "地理科学学院"
            }, {
                "source": "地理科学学院",
                "target": "地理科学"
            }, {
                "source": "地理科学学院",
                "target": "地理信息科学"
            }, {
                "source": "地理科学学院",
                "target": "人文地理与城乡规划"
            }, {
                "source": "地理科学学院",
                "target": "人文地理与城乡规划(区域物流)"
            }, {
                "source": "地理科学学院",
                "target": "人文地理与城乡规划(不动产)"
            }, {
                "source": "地理科学学院",
                "target": "自然地理与资源环境"
            }, {
                "source": "广州大学",
                "target": "机械与电气工程学院"
            }, {
                "source": "机械与电气工程学院",
                "target": "电气工程及其自动化"
            }, {
                "source": "机械与电气工程学院",
                "target": "机械设计制造及其自动化"
            }, {
                "source": "机械与电气工程学院",
                "target": "电子信息工程"
            }, {
                "source": "机械与电气工程学院",
                "target": "工业设计"
            }, {
                "source": "机械与电气工程学院",
                "target": "通信工程"
            }, {
                "source": "广州大学",
                "target": "经济与统计学院"
            }, {
                "source": "经济与统计学院",
                "target": "统计学"
            }, {
                "source": "经济与统计学院",
                "target": "金融工程"
            }, {
                "source": "经济与统计学院",
                "target": "经济学"
            }, {
                "source": "经济与统计学院",
                "target": "国际经济与贸易"
            }, {
                "source": "经济与统计学院",
                "target": "金融学"
            }, {
                "source": "经济与统计学院",
                "target": "会计学"
            }, {
                "source": "广州大学",
                "target": "土木工程学院"
            }, {
                "source": "土木工程学院",
                "target": "给排水科学与工程"
            }, {
                "source": "土木工程学院",
                "target": "土木工程(道路与桥梁工程)"
            }, {
                "source": "土木工程学院",
                "target": "土木工程(建筑工程)"
            }, {
                "source": "土木工程学院",
                "target": "土木工程(综合试点)"
            }, {
                "source": "土木工程学院",
                "target": "土木工程(结构分析)"
            }, {
                "source": "土木工程学院",
                "target": "土木工程(地下建筑工程)"
            }, {
                "source": "土木工程学院",
                "target": "交通工程"
            }, {
                "source": "土木工程学院",
                "target": "建筑环境与能源应用工程"
            }, {
                "source": "广州大学",
                "target": "新闻与传播学院"
            }, {
                "source": "新闻与传播学院",
                "target": "广告学"
            }, {
                "source": "新闻与传播学院",
                "target": "广播电视学"
            }, {
                "source": "新闻与传播学院",
                "target": "网络与新媒体"
            }, {
                "source": "新闻与传播学院",
                "target": "播音与主持艺术"
            }, {
                "source": "新闻与传播学院",
                "target": "广播电视编导"
            }, {
                "source": "广州大学",
                "target": "外国语学院"
            }, {
                "source": "外国语学院",
                "target": "英语(翻译)"
            }, {
                "source": "外国语学院",
                "target": "英语(教师教育)"
            }, {
                "source": "外国语学院",
                "target": "英语(国际商务)"
            }, {
                "source": "外国语学院",
                "target": "日语"
            }, {
                "source": "外国语学院",
                "target": "英语"
            }, {
                "source": "外国语学院",
                "target": "法语"
            }, {
                "source": "广州大学",
                "target": "人文学院"
            }, {
                "source": "人文学院",
                "target": "汉语言文学"
            }, {
                "source": "人文学院",
                "target": "历史学"
            }, {
                "source": "人文学院",
                "target": "汉语国际教育"
            }, {
                "source": "人文学院",
                "target": "汉语言文学(戏剧与影视学)"
            }, {
                "source": "人文学院",
                "target": "汉语言文学(文学)"
            }, {
                "source": "人文学院",
                "target": "汉语言文学(秘书学)"
            }, {
                "source": "人文学院",
                "target": "汉语言文学(应用语言学)"
            }, {
                "source": "人文学院",
                "target": "汉语言文学(教师教育)"
            }, {
                "source": "人文学院",
                "target": "历史学(教师教育)"
            }, {
                "source": "人文学院",
                "target": "历史学(文化资源开发与利用)"
            }, {
                "source": "广州大学",
                "target": "数学与信息科学学院"
            }, {
                "source": "数学与信息科学学院",
                "target": "信息安全"
            }, {
                "source": "数学与信息科学学院",
                "target": "数学与应用数学(金融数学)"
            }, {
                "source": "数学与信息科学学院",
                "target": "信息与计算科学"
            }, {
                "source": "数学与信息科学学院",
                "target": "数学与应用数学(教师教育)"
            }, {
                "source": "数学与信息科学学院",
                "target": "数学与应用数学(精算学)"
            }, {
                "source": "数学与信息科学学院",
                "target": "数学与应用数学(基础数学)"
            }, {
                "source": "广州大学",
                "target": "工商管理学院"
            }, {
                "source": "工商管理学院",
                "target": "工程管理"
            }, {
                "source": "工商管理学院",
                "target": "物流管理"
            }, {
                "source": "工商管理学院",
                "target": "工商管理"
            }, {
                "source": "工商管理学院",
                "target": "电子商务"
            }, {
                "source": "工商管理学院",
                "target": "市场营销"
            }, {
                "source": "工商管理学院",
                "target": "人力资源管理"
            }, {
                "source": "广州大学",
                "target": "法学院"
            }, {
                "source": "法学院",
                "target": "法学"
            }, {
                "source": "法学院",
                "target": "法学（律师）"
            }, {
                "source": "广州大学",
                "target": "公共管理学院"
            }, {
                "source": "公共管理学院",
                "target": "社会工作"
            }, {
                "source": "公共管理学院",
                "target": "行政管理"
            }, {
                "source": "公共管理学院",
                "target": "公共事业管理"
            }, {
                "source": "广州大学",
                "target": "卫斯理安学院"
            }, {
                "source": "卫斯理安学院",
                "target": "经济学(卫斯理安)"
            }, {
                "source": "卫斯理安学院",
                "target": "工商管理(卫斯理安)"
            }, {
                "source": "广州大学",
                "target": "政治与公民教育学院"
            }, {
                "source": "政治与公民教育学院",
                "target": "思想政治教育"
            }, {
                "source": "广州大学",
                "target": "旅游学院"
            }, {
                "source": "旅游学院",
                "target": "会展经济与管理"
            }, {
                "source": "旅游学院",
                "target": "旅游管理(旅游企业管理)"
            }, {
                "source": "旅游学院",
                "target": "旅游管理(酒店管理)"
            }, {
                "source": "旅游学院",
                "target": "旅游管理[中法]"
            }, {
                "source": "广州大学",
                "target": "教育学院"
            }, {
                "source": "教育学院",
                "target": "心理学"
            }, {
                "source": "教育学院",
                "target": "心理学（特殊儿童心理发展与教育）"
            }, {
                "source": "教育学院",
                "target": "应用心理学"
            }, {
                "source": "教育学院",
                "target": "教育技术学"
            }, {
                "source": "教育学院",
                "target": "学前教育"
            }, {
                "source": "教育学院",
                "target": "小学教育"
            }, {
                "source": "广州大学",
                "target": "环境科学与工程学院"
            }, {
                "source": "环境科学与工程学院",
                "target": "环境工程"
            }, {
                "source": "环境科学与工程学院",
                "target": "环境科学"
            }, {
                "source": "广州大学",
                "target": "化学化工学院"
            }, {
                "source": "化学化工学院",
                "target": "化学工程与工艺"
            }, {
                "source": "化学化工学院",
                "target": "化学(教师教育)"
            }, {
                "source": "化学化工学院",
                "target": "化学(精细化学品化学与技术)"
            }, {
                "source": "化学化工学院",
                "target": "化学"
            }, {
                "source": "化学化工学院",
                "target": "食品科学与工程"
            }, {
                "source": "广州大学",
                "target": "物理与电子工程学院"
            }, {
                "source": "物理与电子工程学院",
                "target": "光电信息科学与工程"
            }, {
                "source": "物理与电子工程学院",
                "target": "物联网工程"
            }, {
                "source": "物理与电子工程学院",
                "target": "物理学"
            }, {
                "source": "物理与电子工程学院",
                "target": "电子信息科学与技术"
            }, {
                "source": "广州大学",
                "target": "建筑与城市规划学院"
            }, {
                "source": "建筑与城市规划学院",
                "target": "建筑学"
            }, {
                "source": "建筑与城市规划学院",
                "target": "城乡规划"
            }, {
                "source": "建筑与城市规划学院",
                "target": "风景园林"
            }, {
                "source": "建筑与城市规划学院",
                "target": "建筑学（五年制）"
            }, {
                "source": "广州大学",
                "target": "美术与设计学院"
            }, {
                "source": "美术与设计学院",
                "target": "美术学"
            }, {
                "source": "美术与设计学院",
                "target": "美术学(教师教育)"
            }, {
                "source": "美术与设计学院",
                "target": "动画"
            }, {
                "source": "美术与设计学院",
                "target": "动画(游戏动画)"
            }, {
                "source": "美术与设计学院",
                "target": "绘画"
            }, {
                "source": "美术与设计学院",
                "target": "动画(动画音乐与合成)"
            }, {
                "source": "美术与设计学院",
                "target": "产品设计"
            }, {
                "source": "美术与设计学院",
                "target": "服装与服饰设计(服装设计)"
            }, {
                "source": "美术与设计学院",
                "target": "视觉传达设计"
            }, {
                "source": "广州大学",
                "target": "生命科学学院"
            }, {
                "source": "生命科学学院",
                "target": "生物科学"
            }, {
                "source": "生命科学学院",
                "target": "生物工程"
            }, {
                "source": "生命科学学院",
                "target": "生物技术"
            }, {
                "source": "广州大学",
                "target": "体育学院"
            }, {
                "source": "体育学院",
                "target": "体育教育"
            }, {
                "source": "体育学院",
                "target": "社会体育指导与管理"
            }, {
                "source": "广州大学",
                "target": "音乐舞蹈学院"
            }, {
                "source": "音乐舞蹈学院",
                "target": "音乐学"
            }, {
                "source": "音乐舞蹈学院",
                "target": "舞蹈编导(编导)"
            }, {
                "source": "音乐舞蹈学院",
                "target": "舞蹈编导(教师教育)"
            }],
            categories: [{
                'name': '计算机科学与教育软件学院'
            }, {
                'name': '地理科学学院'
            }, {
                'name': '机械与电气工程学院'
            }, {
                'name': '经济与统计学院'
            }, {
                'name': '土木工程学院'
            }, {
                'name': '新闻与传播学院'
            }, {
                'name': '外国语学院'
            }, {
                'name': '人文学院'
            }, {
                'name': '数学与信息科学学院'
            }, {
                'name': '工商管理学院'
            }, {
                'name': '法学院'
            }, {
                'name': '公共管理学院'
            }, {
                'name': '卫斯理安学院'
            }, {
                'name': '政治与公民教育学院'
            }, {
                'name': '旅游学院'
            }, {
                'name': '教育学院'
            }, {
                'name': '环境科学与工程学院'
            }, {
                'name': '化学化工学院'
            }, {
                'name': '物理与电子工程学院'
            }, {
                'name': '建筑与城市规划学院'
            }, {
                'name': '美术与设计学院'
            }, {
                'name': '生命科学学院'
            }, {
                'name': '体育学院'
            }, {
                'name': '音乐舞蹈学院'
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

    $scope.baseConfig = {
        dataLoaded: true
    };
    $scope.lineOption = {
        title: {
            text: '未来一周气温变化(5秒后自动轮询)',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['最高气温', '最低气温']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        }],
        series: [{
            name: '最高气温',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        },
            {
                name: '最低气温',
                type: 'line',
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [{
                        name: '周最低',
                        value: -2,
                        xAxis: 1,
                        yAxis: -1.5
                    }]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值'
                    }]
                }
            }
        ]
    };
    var index = 1;
    $interval(function () {
        $scope.baseConfig.dataLoaded = true;
        $timeout(function () {
            var ndata = [];
            for (var i = 0; i < 7; i++) {
                ndata[i] = Math.round(Math.random() * 10) + 10;
            }

            $scope.lineOption.series[0].data = ndata;
            $scope.lineOption.title.text = '未来一周气温变化(' + index + ')';
            index++;

            $scope.baseConfig.dataLoaded = true;
        }, 2500);

    }, 5000);
    $scope.workspaces = [];
    $scope.workspaces.push({
        name: '任务列表'
    });
    //	$scope.workspaces.push({
    //		name: 'Workspace 2'
    //	});
    //	$scope.workspaces.push({
    //		name: 'Workspace 3'
    //	});
    //
    $scope.selectid = "";

    function makeRandomRows(colData) {
        var rows = [];
        for (var i = 0; i < 500; i++) {
            rows.push($.extend({
                index: i,
                id: 'row ' + i,
                name: 'GOOG' + i,
                flagImage: Math.random() < 0.4 ?
                    'img/blueFlag16.png' : Math.random() < 0.75 ?
                        'img/yellowFlag16.png' : 'img/greenFlag16.png'
            }, colData));
        }
        return rows;
    }

    $scope.workspaces.forEach(function (wk, index) {
        var colData = {
            workspace: wk.name
        };
        wk.rows = makeRandomRows(colData);

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
                    field: 'index',
                    title: '#',
                    align: 'right',
                    valign: 'bottom',
                    width: '3%',
                    sortable: true
                }, {
                    field: 'id',
                    title: '任务名称',
                    align: 'center',
                    valign: 'bottom',
                    sortable: true
                }, {
                    field: 'name',
                    title: '运行周期',
                    align: 'center',
                    valign: 'middle',
                    sortable: true
                }, {
                    field: 'workspace',
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
            return '<a href="" ng-click="$parent.play(' + row.index + ')"><i class="fa fa-play"></i></a>&nbsp&nbsp;' +
                '<a href="" ng-click="$parent.pause(' + row.index + ')"><i class="fa fa-pause"></i></a>&nbsp&nbsp;' +
                '<a href="" ng-click="$parent.trash(' + row.index + ')"><i class="fa fa-trash"></i></a>&nbsp&nbsp';
        }

    });

    //任务的各项操作 运行 暂停 编辑 删除
    $scope.play = function (row) {
        console.log("play" + row);
    };

    $scope.pause = function (row) {
        console.log("pause" + row);
    };

    $scope.edit = function (row) {
        $state.go('taskInfo', {
            taskId: row
        });
    };
    $scope.trash = function (row) {
        //删除任务，需要遍历找到相对应的元素
        var whatIndex = null;
        angular.forEach($scope.currentWorkspace.bsTableControl.options.data, function (cb, index) {
            if (cb.index == row) {
                whatIndex = index;
            }
        });
        $scope.currentWorkspace.bsTableControl.options.data.splice(whatIndex, 1);
        console.log("trash" + row);
    };

    $scope.changeCurrentWorkspace = function (wk) {
        $scope.currentWorkspace = wk;
        console.log($scope.currentWorkspace);
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

//爬取数据展示的控制器
spiderControl.controller('SpiderDataCtrl', ['$scope', '$http', '$timeout', '$state', function ($scope, $http, $timeout, $state) {

}]);

//模态框的控制器
spiderControl.controller('modalCtrl', ['$rootScope', '$uibModalInstance', '$scope', 'content', 'head', 'row', function ($rootScope, $uibModalInstance, $scope, content, head, row) {
    $scope.head = head;
    $scope.content = content;
    $scope.row = row;
    $scope.ok = function () {
        $uibModalInstance.close();
    };
}]);