angular.module('juneApp')
	.controller('categoryCtrl', function($scope) {

		$scope.onCategoryChange = function() {
			var selectedCategories = _.pluck(_.where($scope.categoryFilters, {checked: true}), 'name');
			$scope.$emit('categoriesChange', selectedCategories);
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