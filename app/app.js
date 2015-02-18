'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.profile',
  'myApp.checkin',
  'myApp.monitor',
  'myApp.setup',
  'myApp.reports',
  'myApp.company_profiles',
  'myApp.company_locations',
  'myApp.department_setup',
  'myApp.employee_setup',
  'myApp.task_setup',
  'myApp.login',
  'myApp.login_service',
  'myApp.register',
  'myApp.add_company',
  'myApp.add_department',
  'myApp.add_location',
  'myApp.add_task',
  'myApp.db_service'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({redirectTo: '/view1'});
}]);
