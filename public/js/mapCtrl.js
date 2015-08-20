angular.module('juneApp')
	.controller('mapCtrl', function($scope, $timeout, mapDataSrv) {

		$scope.$watch('connectionMapShown', function(toggle) {
			if (toggle) {
				// necessary timeout - wait for map container to appear
				$timeout(function() {
			        var map = new google.maps.Map(document.getElementById('map-canvas'));

					var journeyCoords = [];
					var bounds = new google.maps.LatLngBounds();

					angular.forEach(mapDataSrv.getCoords(), function(coords, key) {
						journeyCoords.push(new google.maps.LatLng(coords.x, coords.y));
						bounds.extend(new google.maps.LatLng(coords.x, coords.y));
					});


					var journeyPath = new google.maps.Polyline({
					    path: journeyCoords,
					    geodesic: true,
					    strokeColor: '#FF0000',
					    strokeOpacity: 1.0,
					    strokeWeight: 2
					});

					map.fitBounds(bounds);
					journeyPath.setMap(map);
					
				}, 0, false);
			}
		});


	});