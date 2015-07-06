angular.module('juneApp', [])
.constant('baseUrl', 'http://realtime.mbta.com/developer/api/v2/')
.constant('openDevKey', 'wX9NwuHnZU2ToO7GmGR9uw')
.controller('mainCtrl', function($scope, $http, baseUrl) {

	$http.get(baseUrl).success(function(data) {
		$scope.products = data;
	});

	$scope.filters = [
		{name: 'deutsch', checked: false, type: 'category'},
		{name: 'american', checked: false, type: 'category'},
		{name: 'italian', checked: false, type: 'category'}
	];


	$scope.removeFilter = function(item) {
		$scope.filters[$scope.filters.indexOf(item)].checked = false;
	};

})
.controller('mbtaCtrl', function($scope, $http, apiSrv) {

	// get modes
	apiSrv.getModes().then(function(result) {
		$scope.modes = result.data.mode;
	});



	$scope.selectMode = function(mode) {
		$scope.selectedMode = mode;
	};

	$scope.selectRoute = function(route) {
		// apiSrv.getScheduleByRoute(route.route_id).then(function(result) {
		// 	$scope.schedule = result.data;
		// 	console.log('schedule', result.data);
		// });

		apiSrv.getStopsByRoute(route.route_id).then(function(result) {
			console.log('stops', result.data);
			$scope.stops = result.data.direction[0].stop;
		});
	};

});