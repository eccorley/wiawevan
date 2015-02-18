'use strict';

angular.module('WIAW.main_menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main_menu', {
    templateUrl: 'main_menu/main_menu.html',
    controller: 'MainMenuCtrl'
  });
}])

.controller('MainMenuCtrl', [function() {

}]);