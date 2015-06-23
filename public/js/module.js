angular.module('juneApp', [])
.constant('baseUrl', 'http://localhost:2403/products/')
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

});