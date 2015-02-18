'use strict';

angular.module('myApp.checkin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkin', {
    templateUrl: 'checkin/checkin.html',
    controller: 'CheckinCtrl'
  });
}])

.controller('CheckinCtrl', ['$scope', '$filter', 'DbService', function($scope, $filter,  DbService) {
    $scope.idSelected = null;

    $scope.setSelected = function (task) {
        $scope.taskSelected = task;
        $scope.attendanceLog = task.log;
    };

    DbService.getTasks().then(function (data) {
        $scope.tasks = data;
    });

    $scope.checkIn = function () {
        var prevId = $scope.taskSelected._id;
        var hours = ($scope.end - $scope.start) > 0 ? ($scope.end - $scope.start) : ((+$scope.end + 12) - $scope.start);

        DbService.checkIn({name: $scope.taskSelected.name, hours: hours, timestamp: new Date() }).then(function (data) {
            console.log(data);
        });
        DbService.getTasks().then(function (data) {
            $scope.tasks = data;
            data.forEach(function (el) {
                if (el._id === prevId) {
                    $scope.taskSelected = el;
                }
            });
        })

    };
}]);