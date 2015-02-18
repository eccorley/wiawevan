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
				console.log("User Registered: " + data);
				LoginService.login(username, password).then(function(data) {
					var user = { name: data.user.name, email: data.user.username, phone: data.user.phone }
                    $window.localStorage.setItem('user', JSON.stringify(user));
					$rootScope.user = user;
					$location.path('/');
				})
			})
		}
	}]);