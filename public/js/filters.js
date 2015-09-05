angular.module('juneApp')
	.filter('journeyDuration', function() {
		return function(input) {
			// var days = input.substr(0, input.indexOf('d'));
			var re = new RegExp(/[0-9][0-9]:[0-9][0-9]/);
			return re.exec(input)[0];
		};
	});