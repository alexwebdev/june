angular.module('juneApp', [])
.constant('baseUrl', 'http://localhost:2403/products/')
.controller('mainCtrl', function($scope, $http, baseUrl) {

	$http.get(baseUrl).success(function(data) {
		$scope.products = data;
	});


});