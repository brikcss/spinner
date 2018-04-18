/** ------------------------------------------------------------------------------------------------
 *  angularjs/index.js
 *  ------------------
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  AngularJS module for BrikCSS.Spinner.
 ** --------------------------------------------------------------------------------------------- */

/* eslint-disable no-unused-vars */
import angular from 'angular';
import spinnerService from './spinner-service.js';
import spinnerInitDirective from './spinner-init-directive.js';
import spinnerToggleDirective from './spinner-toggle-directive.js';

export default angular
	.module('brikcss.spinner', [])
	.factory('spinnerService', spinnerService)
	.directive('spinner', ['spinnerService', spinnerInitDirective])
	.directive('spinnerToggle', ['spinnerService', spinnerToggleDirective]).name;
