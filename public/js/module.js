angular.module('juneApp', ['ngResource', 'ngRoute', 'autocomplete'])
.config(function($routeProvider) {
	$routeProvider.when('/schedule', {
		templateUrl: '/views/schedule.html',
		controller: 'scheduleCtrl'
	});

	$routeProvider.when('/map', {
		templateUrl: '/views/map.html',
		controller: 'mapCtrl'
	});

	$routeProvider.otherwise({
		templateUrl: '/views/home.html'
	});
})

.constant('baseUrl', 'http://transport.opendata.ch/v1/')
.constant('openDevKey', 'wX9NwuHnZU2ToO7GmGR9uw')
.controller('mainCtrl', function($scope, $http, baseUrl) {



})
.controller('mbtaCtrl', function($scope, mapDataSrv, apiSrv) {


	$scope.selectedCategory = 'S';

	$scope.showConnectionMap = function() {
		$scope.connectionMapShown = true;
	};

	$scope.hideConnectionMap = function() {
		$scope.connectionMapShown = false;
	};






	$scope.categoryFilterFn = function(item) {
		return $scope.selectedCategory === null || item.category === $scope.selectedCategory;
	};


	$scope.showDetails = function(item) {
		$scope.passList = item.passList;

		$scope.checkpoints = [];
		angular.forEach(item.passList, function(checkpoint, key) {
			$scope.checkpoints.push(checkpoint.location.coordinate);
		});
		mapDataSrv.setCoords($scope.checkpoints);

		// console.log('checkpoints ready', $scope.checkpoints);
	};


});