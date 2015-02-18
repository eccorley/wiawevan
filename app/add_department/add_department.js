'use strict';

angular.module('myApp.add_department', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/add_department', {
			templateUrl: 'add_department/add_department.html',
			controller: 'AddDepartmentCtrl'
		});
	}])

	.controller('AddDepartmentCtrl', ['$scope', 'DbService', function($scope, DbService) {
		$scope.addDepartment = function (name, company) {
			DbService.addDepartment(name, company).then(function(data) {
				console.log("Department Added");
				$scope.name = '';
				$scope.company = '';
			})
		}
	}]);