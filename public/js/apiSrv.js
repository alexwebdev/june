angular.module('juneApp')
.factory('apiSrv', function($http, $q, baseUrl, openDevKey) {

	var params = {
		api_key: openDevKey,
		format: 'json'
	};

	return {
		getLocations: function() {




			// var promise = $http.get(baseUrl + 'locations', {params: {query: 'Basel'}})
			// 	.success(function(data) {
			// 		return data;
			// 	});

			// return promise;
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