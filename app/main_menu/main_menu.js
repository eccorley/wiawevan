'use strict';

angular.module('WIAW.main_menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main_menu', {
    templateUrl: 'main_menu/main_menu.html',
    controller: 'MainMenuCtrl'
  });
}])

.controller('MainMenuCtrl', ['$rootScope', '$window', function($rootScope, $window) {
    if ($window.localStorage.getItem('wiawuser') !== null) {
      $rootScope.user = JSON.parse($window.localStorage.getItem('wiawuser'));
    }
}]);