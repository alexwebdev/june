angular.module('juneApp')
	.factory('categorySrv', function() {

		var categories = [];

		return {

			setCategories: function(categories) {
				categories = categories;
			},

			getCategories: function() {
				return categories;
			}

		};
	});