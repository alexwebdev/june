angular.module('juneApp')
	.factory('mapDataSrv', function() {


		return {
			setCoords: function(coords) {
				console.log('setting coords', coords);
				this.coords = coords;
			},

			getCoords: function() {
				return this.coords;
			}
		};
	});