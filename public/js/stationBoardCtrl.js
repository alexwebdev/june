angular.module('juneApp')
	.controller('scheduleCtrl', function($scope, $timeout, apiSrv) {

		$scope.filters = {
			category: []
		};


		/**
		 * fetch locations (autocomplete)
		 * @param  {[type]}
		 * @return {[type]}
		 */
		$scope.updateLocations = function(query) {
			apiSrv.getLocations(query)
				.then(function(result) {
					$scope.locations = _.pluck(result.data.stations, 'name');
				});
		};


		/**
		 * location select event handler
		 * fetch stationboard data from server
		 * @param  {[type]}
		 * @return {[type]}
		 */
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


		/**
		 * custom category filter function
		 * @param  {[type]}
		 * @return {[type]}
		 */
		$scope.categoryFilterFn = function(departure) {
			return $scope.filters.category.length === 0 ||
				_.indexOf($scope.filters.category, departure.category) !== -1;
		};


		/**
		 * categoriesChange event is triggered when user has selected any filter
		 * @param  {[type]}
		 * @param  {[type]}
		 * @return {[type]}
		 */
		$scope.$on('categoriesChange', function(event, data) {
			$scope.filters.category = data;
		});


		/**
		 * broadcast categoriesUpdate event on data load
		 * @param  {Array}
		 * @return {[type]}
		 */
		$scope.$watch('categories', function(newVal) {
			// clean filters
			$scope.filters.category = [];
			$scope.$broadcast('categoriesUpdate', newVal);
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