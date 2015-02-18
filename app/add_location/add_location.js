'use strict';

angular.module('myApp.add_location', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/add_location', {
			templateUrl: 'add_location/add_location.html',
			controller: 'AddLocationCtrl'
		});
	}])

	.controller('AddLocationCtrl', ['$scope', 'DbService', function($scope, DbService) {
		$scope.addLocation = function (name, address, city, state, zip, company, department) {
			DbService.addLocation(name, address, city, state, zip, company, department)
				.then(function(data) {
					console.log(data);
					$scope.name = '';
					$scope.address = '';
					$scope.city = '';
					$scope.state = '';
					$scope.zip = '';
					$scope.company = '';
					$scope.department = '';
				})
		}
	}]);