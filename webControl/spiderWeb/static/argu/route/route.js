
var spiderControl = angular.module('spiderControl',['ngRoute','bsTable','ui.router','ui.knob','hljs','ng-echarts','ui.bootstrap','ngWebSocket']);

spiderControl.config(['$routeProvider','$locationProvider', '$stateProvider', function($routeProvider,$locationProvider,$stateProvider){
	var taskCenter = {
    name: 'taskCenter',
    url: '/taskCenter',
    templateUrl: '/static/argu/views/taskCenter.html',
    controller:'taskCenterCtrl'
    }
	
    var taskInfo = {
    name: 'taskInfo',
    url: '/taskInfo/:taskId',
    templateUrl: '/static/argu/views/taskInfo.html',
    controller:'taskInfoCtrl'
    }
    
    $stateProvider.state(taskCenter);
    $stateProvider.state(taskInfo);
}]);

