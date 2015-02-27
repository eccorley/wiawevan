'use strict';

angular.module('WIAW.company_locations', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/company_locations', {
			templateUrl: 'location/company_locations/company_locations.html',
			controller: 'CompanyLocationsCtrl'
		});
	}])

	.controller('CompanyLocationsCtrl', ['$scope', '$http', function($scope, $http) {
	}]);