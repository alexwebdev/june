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
.controller('mbtaCtrl', function($scope, categorySrv, mapDataSrv, apiSrv) {


	$scope.selectedCategory = '';

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
		console.log('showing details', item);
		item.passList.unshift(item.stop);
		$scope.passList = item.passList;

		$scope.checkpoints = [];
		angular.forEach(item.passList, function(checkpoint, key) {
			$scope.checkpoints.push(checkpoint.location.coordinate);
		});
		mapDataSrv.setCoords($scope.checkpoints);

		// console.log('checkpoints ready', $scope.checkpoints);
	};

	$scope.onPassLocationSelect = function(stationName) {
		console.log('location', stationName);
		$scope.$broadcast('locationSelected', {location: stationName});
	};

	$scope.onCategoryChange = function() {
		var selectedCategories = _.pluck(_.where($scope.categoryFilters, {checked: true}), 'name');

		$scope.$broadcast('categoriesChange', selectedCategories);
	};


	$scope.$on('categoriesUpdate', function(e, data) {

		$scope.categoryFilters = [];

		angular.forEach(data, function(element, index) {
			$scope.categoryFilters.push({
				id: index,
				name: element,
				checked: false
			});
		});
	});

});