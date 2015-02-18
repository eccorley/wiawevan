'use strict';

angular.module('WIAW.topbar_directive', [])

.directive('topbar', ['LoginService', function (LoginService) {
        return {
            restrict: 'E',
            templateUrl: 'components/topbar_directive/topbar_directive.html',
            link: function (scope, elem, attrs) {
                scope.logout = LoginService.logout;
            }
        }
    }]);