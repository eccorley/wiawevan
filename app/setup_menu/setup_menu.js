'use strict';

angular.module('WIAW.setup_menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setup_menu', {
    templateUrl: 'setup_menu/setup_menu.html',
    controller: 'SetupMenuCtrl'
  });
}])

.controller('SetupMenuCtrl', [function() {

}]);