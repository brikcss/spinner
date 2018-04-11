/** ------------------------------------------------------------------------------------------------
 *  angularjs/index.js
 *  ------------------
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  AngularJS module for BrikCSS.Spinner.
 ** --------------------------------------------------------------------------------------------- */
/* globals angular:false */

/* eslint-disable no-unused-vars */
angular.module('brikcss.spinner', [
	'brikcss.spinner.service',
	'brikcss.spinner.init-directive',
	'brikcss.spinner.toggle-directive'
]);
import spinnerService from './spinner-service.js';
import spinnerInitDirective from './spinner-init-directive.js';
import spinnerToggleDirective from './spinner-toggle-directive.js';
