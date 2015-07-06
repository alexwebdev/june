angular.module('juneApp')
.factory('apiSrv', function($http, $q, baseUrl, openDevKey) {

	var params = {
		api_key: openDevKey,
		format: 'json'
	};

	return {
		getModes: function() {
			var promise = $http.get(baseUrl + 'routes/', {params: params})
				.success(function(data) {
					return data;
				});

			return promise;
		},

		getScheduleByRoute: function(routeId) {
			var promise = $http.get(baseUrl + 'scheduleByRoute', {
				params: angular.extend({route: routeId}, params)
			}).success(function(data) {
				return data;
			});

			return promise;
		},

		getStopsByRoute: function(routeId) {
			var promise = $http.get(baseUrl + 'stopsbyroute', {
				params: angular.extend({route: routeId}, params)
			}).success(function(data) {
				return data;
			});

			return promise;
		}
	};

});