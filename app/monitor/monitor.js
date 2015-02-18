'use strict';

angular.module('myApp.monitor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/monitor', {
    templateUrl: 'monitor/monitor.html',
    controller: 'MonitorCtrl'
  });
}])

.controller('MonitorCtrl', [function() {

}]);