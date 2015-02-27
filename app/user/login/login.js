'use strict';

angular.module('WIAW.login', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'user/login/login.html',
			controller: 'LoginCtrl'
		});
	}])

	.controller('LoginCtrl', ['$rootScope', '$scope', '$location', 'LoginService', '$window', function($rootScope, $scope, $location, LoginService, $window) {
		$scope.login = function (username, password) {
			$scope.formError = false;
			LoginService.login(username, password).then(function(data) {
				console.log(data);
				$location.path('/');
			}, function (data) {
				$scope.formError = true;
			});
		};

		$scope.logout = function () {
			LoginService.logout();
			$location.path('/');
		}
	}]);