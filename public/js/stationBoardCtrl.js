angular.module('juneApp')
	.controller('scheduleCtrl', function($scope, $timeout, apiSrv) {

		$scope.updateLocations = function(query) {

			apiSrv.getLocations(query)
				.then(function(result) {
					$scope.locations = _.pluck(result.data.stations, 'name');
				});
		};

		$scope.onLocationSelect = function(location) {

			apiSrv.getSchedule({station: location})
				.then(function(result) {
					$scope.stationboard = result.data.stationboard;
					$scope.categories = _.uniq(_.pluck($scope.stationboard, 'category'));
					// delay = $timeout(getSchedule, 1000*60);
				});
		};



		var delay;

		(function getSchedule() {
			// get schedule

		})();



		$scope.$on('$destroy', function() {
			console.log('controller destroy');
			$timeout.cancel(delay);
		});

	});