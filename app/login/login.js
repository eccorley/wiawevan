'use strict';

angular.module('myApp.login', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'LoginCtrl'
		});
	}])

	.controller('LoginCtrl', ['$scope', '$location', 'LoginService', '$window', function($scope, $location, LoginService, $window) {
		$scope.login = function (username, password) {
			LoginService.login(username, password).then(function(data) {
				$window.localStorage.removeItem('user');
                $window.localStorage.setItem('user', JSON.stringify({ name: data.user.name, email: data.user.username, phone: data.user.phone }));
				$location.path('/');
			})
		};

		$scope.logout = function () {
            $window.localStorage.removeItem('user');
			LoginService.logout();
			$location.path('/');
		}
	}]);