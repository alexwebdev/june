angular.module('juneApp')
	.controller('connectionsCtrl', function($scope, apiSrv) {

		$scope.searchParams = {
			from: 'Warsaw',
			to: 'Wroclaw'
		};
		$scope.connections = [];

		$scope.search = function() {
			console.log('searching...');


			apiSrv.getConnections($scope.searchParams)
				.then(function(results) {

					console.log('connections', results);
					$scope.connections = results.data.connections;

				})
				.then(function(error) {
					console.log('error: ', error);
				});
		};



	});