'use strict';

angular.module('myApp.employee_setup', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/employee_setup', {
			templateUrl: 'employee_setup/employee_setup.html',
			controller: 'EmployeeSetupCtrl'
		});
	}])

	.controller('EmployeeSetupCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.searchEmployees = function (e) {
			if (e.keyCode == '13') {
				$http.post('/search_employees', {query: $scope.searchQuery})
					.success(function(data) {
						$scope.employee = data;
						console.log(data);
					})
			}
		}
	}]);