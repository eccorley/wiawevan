'use strict';

// Declare app level module which depends on views, and components
angular.module('WIAW', [
  'ngRoute',
  'WIAW.main_menu',
  'WIAW.profile',
  'WIAW.checkin',
  'WIAW.monitor',
  'WIAW.setup_menu',
  'WIAW.reports',
  'WIAW.company_profiles',
  'WIAW.company_locations',
  'WIAW.department_setup',
  'WIAW.employee_setup',
  'WIAW.task_setup',
  'WIAW.login',
  'WIAW.login_service',
  'WIAW.register',
  'WIAW.add_company',
  'WIAW.add_department',
  'WIAW.add_location',
  'WIAW.add_task',
  'WIAW.db_service'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({redirectTo: '/main_menu'});
}]);
