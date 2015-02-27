'use strict';

angular.module('WIAW.add_task', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/add_task', {
			templateUrl: 'task/add_task/add_task.html',
			controller: 'AddTaskCtrl'
		});
	}])

	.controller('AddTaskCtrl', ['$scope', 'DbService', function($scope, DbService) {
		$scope.addTask = function (name, hours, company, department, location, employee) {
			DbService.addTask(name, hours, company, department, location, employee)
				.then(function(data) {
					$scope.name = '';
					$scope.hours = '';
					$scope.company = '';
					$scope.department = '';
					$scope.location = '';
					$scope.employee = '';
				})
		}
	}]);