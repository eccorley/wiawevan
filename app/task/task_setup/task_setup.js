'use strict';

angular.module('WIAW.task_setup', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/task_setup', {
			templateUrl: 'task/task_setup/task_setup.html',
			controller: 'TaskSetupCtrl'
		});
	}])

	.controller('TaskSetupCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.searchTasks = function (e) {
			if (e.keyCode == '13'){
				$http.post('/search_tasks', {query: $scope.taskSearchQuery})
					.success(function(data) {
						$scope.task = data;
					})
			}
		}
	}]);