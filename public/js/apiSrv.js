angular.module('juneApp')
.factory('apiSrv', function($http, $q, baseUrl, openDevKey) {

	// var params = {
	// 	api_key: openDevKey,
	// 	format: 'json'
	// };

	return {

		getSchedule: function(params) {
			var promise = $http.get(baseUrl + 'stationboard', {
				params: angular.extend({
					'transportations[]': ['ice_tgv_rj', 'ec_ic', 'ir'],
					limit: 20
				}, params)
			})
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
		},

		getConnections: function(params) {
			console.log('apiSrv get conn', params);
			var promise = $http.get(baseUrl + 'connections', {
				params: params
			}).success(function(data) {
				return data;
			});

			return promise;
		},

		getLocations: function(query) {
			var promise = $http.get(baseUrl + 'locations', {
				params: {
					query: query
				}
			}).success(function(data) {
				return data;
			});

			return promise;
		}
	};

});