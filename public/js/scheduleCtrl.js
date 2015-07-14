angular.module('juneApp')
	.controller('scheduleCtrl', function($scope, $timeout, apiSrv) {

		var delay;

		(function getSchedule() {
			// get schedule
			apiSrv.getSchedule()
				.then(function(result) {
					$scope.stationboard = result.data.stationboard;
					$scope.categories = _.uniq(_.pluck($scope.stationboard, 'category'));
					delay = $timeout(getSchedule, 1000*60);
				});

		})();



		$scope.$on('$destroy', function() {
			console.log('controller destroy');
			$timeout.cancel(delay);
		});

	});