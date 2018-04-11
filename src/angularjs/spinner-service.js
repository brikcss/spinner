/** ------------------------------------------------------------------------------------------------
 *  spinner-service.js
 *  ------------------
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  AngularJS service wrapper for BrikCSS.Spinner.
 ** --------------------------------------------------------------------------------------------- */
/* globals angular:false */

import service from '../module/spinner';
angular.module('brikcss.spinner.service', []).factory('spinnerService', () => service);
