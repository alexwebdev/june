angular.module('juneApp')
	.factory('searchParamsSrv', function() {

		var searchParams = {};

		return {
			setParams: function(params) {
				searchParams = params;
			},

			getParams: function() {
				return searchParams;
			}
		};

	});