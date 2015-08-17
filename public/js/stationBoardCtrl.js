angular.module('juneApp')
	.controller('scheduleCtrl', function($scope, $timeout, apiSrv) {

		$scope.updateLocations = function(query) {

			apiSrv.getLocations(query)
				.then(function(result) {
					$scope.locations = _.pluck(result.data.stations, 'name');
				});
		};

		$scope.onLocationSelect = function(location) {

			console.log('location select', location);

			$scope.stationboard = [];
			$scope.stationboardLoading = true;

			apiSrv.getSchedule({station: location})
				.then(function(result) {
					$scope.stationboard = result.data.stationboard;
					console.log('stationboard', result.data.stationboard);
					$scope.categories = _.uniq(_.pluck($scope.stationboard, 'category'));
					// delay = $timeout(getSchedule, 1000*60);
					$scope.stationboardLoading = false;
				})
				.then(function(error) {
					console.log('error', error);
				});
		};


		$scope.$on('locationSelected', function(event, args) {
			console.log('event', arguments);
			$scope.onLocationSelect(args.location);
		});



		var delay;

		(function getSchedule() {
			// get schedule

		})();



		$scope.$on('$destroy', function() {
			$timeout.cancel(delay);
		});

	});