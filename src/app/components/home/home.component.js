/**
 * @ngdoc Component
 * @name angularBackand.component.home
 *
 * @module angularBackand
 *
 * @description
 * Home component - A application landing page
 *
 * @author Mohan Singh ( gmail::mslogicmaster@gmail.com, skype :: mohan.singh42 )
 */
(function () {
  'use strict';
  angular
    .module('angularBackand')
    .component('home', {
      templateUrl: 'app/components/home/home.html',
      controller: [
        'Backand',
        '$log',
        '$state',
        function (Backand, $log, $state) {
          var $ctrl = this;

          /**
           * component's lifeCycle hooks
           */
          $ctrl.$onInit = initialization;

          /**
           * public methods
           */
          $ctrl.socialSignin = socialSignin;
          /**
           * public properties
           */
          $ctrl.isSigning = false;
          /**
            * @function
            * @name initialization
            * @description
            * A component's lifeCycle hook which is called after all the controllers on an element have
            * been constructed and had their bindings initialized
            */
          function initialization() {
            getSocialProviders();
          }

          function getSocialProviders() {
            Backand
              .getSocialProviders()
              .then(function (response) {
                $ctrl.socialProvider = response.facebook;
              }, function (error) {
                //handle error
                $log.error(error);
              });
          }

          function socialSignin(provider) {
            $ctrl.isSigning = true;
            Backand
              .socialSignin(provider)
              .then(function (response) {
                $state.go('dashboard')
              }, function (error) {
                //handle error
                $log.error(error);
                $ctrl.isSigning = false;
              });
          }

        }]
    });
})();
