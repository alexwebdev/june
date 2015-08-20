angular.module('juneApp')
	.controller('mainCtrl', function($scope, categorySrv, mapDataSrv, apiSrv) {

		$scope.selectedCategory = '';

		$scope.showConnectionMap = function() {
			$scope.connectionMapShown = true;
		};

		$scope.hideConnectionMap = function() {
			$scope.connectionMapShown = false;
		};





		/**
		 * get pass list 
		 * prepare checkpoints data for the map
		 * @param  {[type]}
		 * @return {[type]}
		 */
		$scope.showDetails = function(item) {
			item.passList.unshift(item.stop);
			$scope.passList = item.passList;

			$scope.checkpoints = [];
			angular.forEach(item.passList, function(checkpoint, key) {
				$scope.checkpoints.push(checkpoint.location.coordinate);
			});
			mapDataSrv.setCoords($scope.checkpoints);
		};
	});