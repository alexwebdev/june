angular.module('juneApp')
	.controller('scheduleCtrl', function($scope, $timeout, apiSrv) {

		$scope.filters = {
			category: []
		};

		$scope.updateLocations = function(query) {

			apiSrv.getLocations(query)
				.then(function(result) {
					$scope.locations = _.pluck(result.data.stations, 'name');
				});
		};

		$scope.onLocationSelect = function(location) {

			$scope.stationboard = [];
			$scope.stationboardLoading = true;

			apiSrv.getSchedule({station: location})
				.then(function(result) {
					$scope.stationboard = result.data.stationboard;
					$scope.categories = _.uniq(_.pluck($scope.stationboard, 'category'));
					// delay = $timeout(getSchedule, 1000*60);
					$scope.stationboardLoading = false;
				})
				.then(function(error) {
					console.log('error', error);
				});
		};


		$scope.categoryFilterFn = function(departure) {
			return $scope.filters.category.length === 0 ||
				_.indexOf($scope.filters.category, departure.category) !== -1;
		};


		$scope.$on('locationSelected', function(event, data) {
			$scope.onLocationSelect(data.location);
		});

		$scope.$on('categoriesChange', function(event, data) {
			console.log('endo', data);
			$scope.filters.category = data;
		});


		$scope.$watch('categories', function(newVal) {
			$scope.$emit('categoriesUpdate', newVal);
		});



		var delay;

		(function getSchedule() {
			// get schedule

		})();

		$scope.onLocationSelect('Zurich');



		$scope.$on('$destroy', function() {
			$timeout.cancel(delay);
		});

	});