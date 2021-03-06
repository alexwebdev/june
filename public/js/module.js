angular.module('juneApp', ['ngResource', 'ngRoute', 'autocomplete'])
	.config(function($routeProvider) {
		$routeProvider.when('/schedule', {
			templateUrl: '/views/schedule.html',
			controller: 'scheduleCtrl'
		});

		$routeProvider.when('/connections', {
			templateUrl: '/views/connections.html',
			controller: "connectionsCtrl"
		});

		$routeProvider.when('/map', {
			templateUrl: '/views/map.html',
			controller: 'mapCtrl'
		});

		$routeProvider.otherwise({
			templateUrl: '/views/home.html',
			controller: 'homeCtrl'
		});
	})

	.constant('baseUrl', 'http://transport.opendata.ch/v1/')
	.constant('openDevKey', 'wX9NwuHnZU2ToO7GmGR9uw');