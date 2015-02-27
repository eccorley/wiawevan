'use strict';


angular.module('WIAW.login_service', [])
	.factory('LoginService', ['$rootScope', '$window', '$http', '$q', function($rootScope, $window, $http, $q) {
		return {
			register: function (name, username, password, phone) {
				var defer = $q.defer();
				$http.post('/register', {name: name, username: username, password: password, phone: phone})
					.success(function (data) {
						if (data.user) {
							var user = { name: data.user.name, email: data.user.username, phone: data.user.phone };
							$rootScope.user = user;
							$window.localStorage.setItem('wiawuser', JSON.stringify(user));
							defer.resolve(data);
						} else {
							defer.reject(data);
						}
					}).error(function (err) {
							defer.reject(err);
						});
				return defer.promise;
			},
			login: function (username, password) {
				var defer = $q.defer();
				$http.post('/login', {username: username, password: password})
					.success(function (data) {
						if (data.user) {
							var user = { name: data.user.name, email: data.user.username, phone: data.user.phone };
							$rootScope.user = user;
							$window.localStorage.setItem('wiawuser', JSON.stringify(user));
							defer.resolve(data);
						} else {
							defer.reject(data);
						}
					});
				return defer.promise;
			},
			logout: function() {
				$http.get('/logout')
					.success(function(data) {
						$rootScope.user = null;
						$window.localStorage.removeItem('wiawuser');
						console.log('Logged out successfully')
					});
			}
		}
	}]);