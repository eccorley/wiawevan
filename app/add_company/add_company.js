'use strict';

angular.module('myApp.add_company', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/add_company', {
			templateUrl: 'add_company/add_company.html',
			controller: 'AddCompanyCtrl'
		});
	}])

	.controller('AddCompanyCtrl', ['$scope', '$http', '$location', 'DbService', function($scope, $http, $location, DbService) {
		$scope.addCompany = function (name, address, city, zip, phone) {
			DbService.addCompany(name, address, city, zip, phone)
				.then(function(data) {
					console.log("Company Added");
					$scope.name = '';
					$scope.address = '';
					$scope.city = '';
					$scope.zip = '';
					$scope.phone = '';
				})
		}
	}]);