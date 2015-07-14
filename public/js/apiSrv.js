angular.module('juneApp')
.factory('apiSrv', function($http, $q, baseUrl, openDevKey) {

	var params = {
		api_key: openDevKey,
		format: 'json'
	};

	return {

		getSchedule: function() {
			var promise = $http.get(baseUrl + 'stationboard', {
				params: {
					station: 'Zürich',
					'transportations[]': ['ice_tgv_rj', 'ec_ic'],
					limit: 20
				}
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
		}
	};

});