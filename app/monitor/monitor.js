'use strict';

angular.module('WIAW.monitor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/monitor', {
    templateUrl: 'monitor/monitor.html',
    controller: 'MonitorCtrl'
  });
}])

.controller('MonitorCtrl', [function() {

}]);