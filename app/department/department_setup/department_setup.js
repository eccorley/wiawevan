'use strict';

angular.module('WIAW.department_setup', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/department_setup', {
			templateUrl: 'department/department_setup/department_setup.html',
			controller: 'DepartmentSetupCtrl'
		});
	}])

	.controller('DepartmentSetupCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.searchDepartments = function (e) {
			if (e.keyCode == '13') {
				$http.post('/search_departments', {query: $scope.searchQuery})
					.success(function(data) {
						$scope.department = data;
						console.log(data);
					})
			}
		}
	}]);