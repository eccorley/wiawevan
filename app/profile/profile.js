'use strict';

angular.module('WIAW.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'ProfileCtrl'
  });
}])

.controller('ProfileCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.user = JSON.parse($window.localStorage.getItem('user'));
}]);