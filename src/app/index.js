/**
 * @ngdoc module
 * @name angularBackand
 *
 * @module angularBackand
 *
 * @description
 * Create main module (Application) with core dependencies
 * 
 * @author Mohan Singh ( gmail::mslogicmaster@gmail.com, skype :: mohan.singh42 )
 */
(function () {
  'use strict';

  angular
    .module('angularBackand', [
      'ngResource',
      /**
       * @module backand
       *
       * @description
       * The backand module provides Backand SDK APIs
       */
      'backand',
      /**
       * @module ui.router
       *
       * @description
       * AngularUI Router is a routing framework, which implements flexible routing with nested views in AngularJS.
       */
      'ui.router',
      /**
       * @module ui.router.components
       *
       * @description
       * polyfil to support routes in angular new componenets
       */
      'ui.router.components'
      ]);

})();
