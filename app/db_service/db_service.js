'use strict';


angular.module('myApp.db_service', [])

	.factory('DbService', ['$http', '$q', function ($http, $q) {
		return {
            getTasks: function () {
                var defer = $q.defer();
                $http.post('/get_tasks', {}).success(function (data) {
                    defer.resolve(data);
                });
                return defer.promise;
            },

            checkIn: function (checkIn) {
                console.log(checkIn);
                var defer = $q.defer();
                $http.post('/checkin', checkIn).success(function (data) {
                    defer.resolve(data);
                });
                return defer.promise;
            },

			addCompany: function (name, address, city, zip, phone) {
				var defer = $q.defer();
				$http.post('/add_company', {
					name: name,
					address: address,
					city: city,
					zip: zip,
					phone: phone
				}).success(function (data) {
					defer.resolve(data);
				});
				return defer.promise;
			},

			addDepartment: function (name, company) {
				var defer = $q.defer();
				$http.post('/add_department', {
					name: name,
					company: company
				}).success(function (data) {
					defer.resolve(data);
				});
				return defer.promise;
			},

			addLocation: function (name, address, city, state, zip, company, department) {
				var defer = $q.defer();
				$http.post('/add_location', {
					name: name,
					address: address,
					city: city,
					state: state,
					zip: zip,
					company: company,
					department: department
				}).success(function (data) {
					defer.resolve(data);
				});
				return defer.promise;
			},

			addTask: function (name, hours, company, department, location, employee) {
				var defer = $q.defer();
				$http.post('/add_task', {
					name: name,
					hours: hours,
					company: company,
					department: department,
					location: location,
					employee: employee
				}).success(function (data) {
					defer.resolve(data);
				});
				return defer.promise;
			}
		}
	}]);