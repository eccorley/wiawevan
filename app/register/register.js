'use strict';

angular.module('myApp.register', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/register', {
			templateUrl: 'register/register.html',
			controller: 'RegisterCtrl'
		});
	}])

	.controller('RegisterCtrl', ['$scope', '$location', 'LoginService', '$window', function($scope, $location, LoginService, $window) {
		$scope.register = function (name, username, password, phone) {
			LoginService.register(name, username, password, phone).then(function(data) {
				console.log("User Registered: " + data);
				LoginService.login(username, password).then(function(data) {
					console.log(data);
                    $window.localStorage.setItem('user', JSON.stringify({ name: data.user.name, email: data.user.username, phone: data.user.phone }));
					$location.path('/');
				})
			})
		}
	}]);