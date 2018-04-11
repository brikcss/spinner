/* globals angular:false */
(function() {
	angular
		.module('demo', ['brikcss.spinner'])
		.controller('appCtrl', function() {})
		.directive('sampleDeterminateInput', ['spinnerService', sampleDeterminateInputDirective])
		.directive('sampleDeterminateSpinner', [
			'spinnerService',
			sampleDeterminateSpinnerDirective
		]);

	function sampleDeterminateSpinnerDirective(spinnerService) {
		return {
			restrict: 'A',
			link: function($scope, $element, $attributes) {
				const spinner = spinnerService.all[$attributes.sampleDeterminateSpinner];
				let timer;

				createTimer(spinner);

				// -------------------
				// Set up mock loader.
				//
				function createTimer(spinner) {
					timer = setInterval(function() {
						if (spinner.progress >= 100) {
							clearInterval(timer);
							return setTimeout(function() {
								spinner.setProgress(0);
								setTimeout(function() {
									createTimer(spinner);
								}, 750);
							}, 3000);
						} else {
							spinner.setProgress(
								Math.min(
									spinner.progress +
										loadRandomValue(Math.floor(Math.random() * 10) + 1),
									100
								)
							);
						}
					}, 200);
				}

				function loadRandomValue(number) {
					const randomBoolean = Math.random() >= 0.5;
					if (randomBoolean) {
						// Return number between 1 and `number`.
						return Math.floor(Math.random() * number) + 1;
					}
					return 0;
				}
			}
		};
	}

	function sampleDeterminateInputDirective(spinnerService) {
		return {
			restrict: 'A',
			link: function($scope, $element, $attributes) {
				$element[0].addEventListener('change', () => {
					spinnerService.all[$attributes.sampleDeterminateInput].setProgress(
						$element[0].value
					);
				});
			}
		};
	}
})();
