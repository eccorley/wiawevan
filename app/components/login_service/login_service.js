'use strict';


angular.module('WIAW.login_service', [])

	.factory('LoginService', ['$http', '$q', function($http, $q) {
		return {
			register: function (name, username, password, phone) {
				var defer = $q.defer();
				$http.post('/register', {name: name, username: username, password: password, phone: phone})
					.success(function (data) {
						defer.resolve(data);
					});
				return defer.promise;
			},
			login: function (username, password) {
				var defer = $q.defer();
				$http.post('/login', {username: username, password: password})
					.success(function (data) {
						defer.resolve(data);
					});
				return defer.promise;
			},
			logout: function() {
				$http.get('/logout')
					.success(function(data) {
						console.log('Logged out successfully')
					});
			}
		}
	}]);