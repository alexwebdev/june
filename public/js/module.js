angular.module('juneApp', ['ngResource'])
.constant('baseUrl', 'http://transport.opendata.ch/v1/')
.constant('openDevKey', 'wX9NwuHnZU2ToO7GmGR9uw')
.controller('mainCtrl', function($scope, $http, baseUrl) {



})
.controller('mbtaCtrl', function($scope, $http, baseUrl, apiSrv) {

	$scope.selectedCategory = 'S';


	// stationboard
	$http.get(baseUrl + 'stationboard', {params: {station: 'Zürich'}})
		.success(function(data) {
			console.log('stationboard', data);
			$scope.stationboard = data.stationboard;

			$scope.categories = _.uniq(_.pluck($scope.stationboard, 'category'));
			console.log('types', $scope.categories);
		});



	$scope.categoryFilterFn = function(item) {
		return $scope.selectedCategory === null || item.category === $scope.selectedCategory;
	};


});