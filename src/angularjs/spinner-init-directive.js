/** ------------------------------------------------------------------------------------------------
 *  spinner-directive.js
 *  --------------------
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  AngularJS directive to instantiate a new BrikCSS.Spinner.
 ** --------------------------------------------------------------------------------------------- */

function spinnerDirective(spinnerService) {
	return {
		restrict: 'E',
		scope: {
			options: '=?'
		},
		link: function linkSpinnerDirective($scope, $element) {
			// Create spinner instance.
			const spinner = spinnerService.create($element[0], $scope.options);
			$scope.id = spinner.id;

			// Destroy spinner instance.
			$scope.$on('$destroy', () => {
				spinnerService.destroy($scope.id);
			});
		}
	};
}

export default spinnerDirective;
