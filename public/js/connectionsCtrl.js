angular.module('juneApp')
	.controller('connectionsCtrl', function($scope, apiSrv, searchParamsSrv) {

		console.log('hello. params:', searchParamsSrv.getParams());

		$scope.searchParams = searchParamsSrv.getParams();
		$scope.connections = [];
		$scope.searching = false;





		$scope.search = function() {
			$scope.searching = true;
			$scope.errors = [];


			apiSrv.getConnections($scope.searchParams)
				.success(function(data) {

					console.log('connections',data);

					$scope.searching = false;

					if (data.connections.length === 0) {
						$scope.errors.push({
							content: 'No connections found',
							type: 'info'
						});
						$scope.connections = [];
					} else {
						$scope.connections = data.connections;
					}

				})
				.error(function(error) {
					console.log('error: ', error);
					$scope.errors.push({
						content: 'Error retreiving data',
						type: 'danger'
					});
					$scope.connections = [];
				});
		};

		$scope.toggleConnectionDetails = function(connection) {
			connection.detailsVisible = !connection.detailsVisible;
		};

		$scope.toggleIntermediateStops = function(connection) {
			connection.intermediateStopsShown = !connection.intermediateStopsShown;
		};


		if ($scope.searchParams.from && $scope.searchParams.to) $scope.search();

	});