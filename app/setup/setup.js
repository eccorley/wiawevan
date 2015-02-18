'use strict';

angular.module('myApp.setup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setup', {
    templateUrl: 'setup/setup.html',
    controller: 'SetupCtrl'
  });
}])

.controller('SetupCtrl', [function() {

}]);