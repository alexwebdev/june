angular.module('juneApp')
	.controller('categoryCtrl', function($scope) {

		/**
		 * category change event handler
		 * @return {[type]}
		 */
		$scope.onCategoryChange = function() {
			var selectedCategories = _.pluck(_.where($scope.categoryFilters, {checked: true}), 'name');
			$scope.$emit('categoriesChange', selectedCategories);
		};


		/**
		 * categoriesUpdate is triggered after new stationboard data has been loaded
		 * @param  {[type]}
		 * @param  {Array}
		 * @return {[type]}
		 */
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