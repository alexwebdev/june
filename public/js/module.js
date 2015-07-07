angular.module('juneApp', ['ngResource'])
.constant('baseUrl', 'http://transport.opendata.ch/v1/')
.constant('openDevKey', 'wX9NwuHnZU2ToO7GmGR9uw')
.controller('mainCtrl', function($scope, $http, baseUrl) {



})
.controller('mbtaCtrl', function($scope, $http, baseUrl, apiSrv) {


	// stationboard
	$http.get(baseUrl + 'stationboard', {params: {station: 'Zürich'}})
		.success(function(data) {
			console.log('stationboard', data);
			$scope.stationboard = data.stationboard;

			$scope.types = _.uniq(_.pluck($scope.stationboard, 'category'));
			console.log('types', $scope.types);
		});




});