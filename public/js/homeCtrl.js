angular.module('juneApp')
	.controller('homeCtrl', function($scope, $rootScope, searchParamsSrv) {

		$scope.searchParams = {};

		$scope.$on('$routeChangeStart', function(event, next, current) {
			console.log('route change start', arguments);

			searchParamsSrv.setParams($scope.searchParams);
		});

	});