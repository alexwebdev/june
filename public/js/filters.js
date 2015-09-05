angular.module('juneApp')
	.filter('journeyDuration', function() {
		return function(input) {
			// var days = input.substr(0, input.indexOf('d'));
			var re = new RegExp(/[0-9][0-9]:[0-9][0-9]/);
			return re.exec(input)[0];
		};
	})

	.filter('connectionTime', function($filter) {
		return function(input) {
			return $filter('date')(new Date(input), 'HH:mm');
		};
	})

	.filter('connectionDate', function($filter) {
		return function(input) {
			return $filter('date')(new Date(input), 'EEE, dd.MM.yy');
		};
	});