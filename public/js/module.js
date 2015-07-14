angular.module('juneApp', ['ngResource', 'ngRoute'])
.config(function($routeProvider) {
	$routeProvider.when('/schedule', {
		templateUrl: '/views/schedule.html',
		controller: 'scheduleCtrl'
	});

	$routeProvider.when('/map', {
		templateUrl: '/views/map.html',
		controller: 'mapCtrl'
	});
})

.constant('baseUrl', 'http://transport.opendata.ch/v1/')
.constant('openDevKey', 'wX9NwuHnZU2ToO7GmGR9uw')
.controller('mainCtrl', function($scope, $http, baseUrl) {



})
.controller('mbtaCtrl', function($scope, mapDataSrv) {


	$scope.selectedCategory = 'S';




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