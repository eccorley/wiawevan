'use strict';

angular.module('WIAW.register', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/register', {
			templateUrl: 'user/register/register.html',
			controller: 'RegisterCtrl'
		});
	}])

	.controller('RegisterCtrl', ['$rootScope', '$scope', '$location', 'LoginService', '$window', function($rootScope, $scope, $location, LoginService, $window) {
		$scope.register = function (name, username, password, phone) {
			LoginService.register(name, username, password, phone).then(function(data) {
				LoginService.login(username, password).then(function(data) {
					$location.path('/');
				});
			});
		}
	}]);