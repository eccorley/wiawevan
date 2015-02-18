'use strict';

angular.module('myApp.company_profiles', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/company_profiles', {
			templateUrl: 'company_profiles/company_profiles.html',
			controller: 'CompanyProfilesCtrl'
		});
	}])

	.controller('CompanyProfilesCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.searchCompanies = function (e) {
			if (e.keyCode == '13') {
				$http.post('/search_companies', {query: $scope.searchQuery})
					.success(function (data) {
						$scope.company = data[0];
						console.log(data);
					})
			}
		}
	}]);