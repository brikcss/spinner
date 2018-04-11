/** ------------------------------------------------------------------------------------------------
 *  spinner-toggle-directive.js
 *  ---------------------------
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  AngularJS directive to toggle a BrikCSS.Spinner.
 ** --------------------------------------------------------------------------------------------- */
/* globals angular */

angular
	.module('brikcss.spinner.toggle-directive', [])
	.directive('spinnerToggle', ['spinnerService', toggleSpinnerDirective]);

function toggleSpinnerDirective(spinnerService) {
	return {
		restrict: 'A',
		link: function linkToggleSpinnerDirective($scope, $element, $attributes) {
			// Spinner id comes from `toggle-spinner` attribute.
			const id = $attributes.spinnerToggle;
			if (id === undefined) return false;

			// Bind click event.
			$element[0].addEventListener('click', toggleSpinner);

			// Cache toggleSpinner() so we can easily destroy it.
			function toggleSpinner() {
				spinnerService.toggle(id);
			}

			// Destroy spinner.
			$scope.$on('$destroy', () => {
				$element[0].removeEventListener('click', toggleSpinner);
			});
		}
	};
}
