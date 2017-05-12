/**
 * @ngdoc Component
 * @name angularBackand.component.header
 *
 * @module angularBackand
 *
 * @description
 * header component - A application header
 *
 * @author Mohan Singh ( gmail::mslogicmaster@gmail.com, skype :: mohan.singh42 )
 */
(function () {
  'use strict';
  angular
    .module('angularBackand')
    .component('appHeader', {
      templateUrl: 'app/components/header/header.html',
      controller: [
        '$log',
        function ($log) {
          var $ctrl = this;

          /**
           * component's lifeCycle hooks
           */
          $ctrl.$onInit = initialization;

          /**
           * public methods
           */
          /**
           * public properties
           */
          /**
            * @function
            * @name initialization
            * @description
            * A component's lifeCycle hook which is called after all the controllers on an element have
            * been constructed and had their bindings initialized
            */
          function initialization() {
            $log.info('header component initialized');
          }
        }]
    })
})();
