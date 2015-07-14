angular.module('juneApp')
	.factory('mapDataSrv', function() {


		return {
			setCoords: function(coords) {
				this.coords = coords;
			},

			getCoords: function() {
				return this.coords;
			}
		};
	});