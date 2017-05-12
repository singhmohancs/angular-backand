/**
 * @ngdoc constant
 * @name angularBackand.constant
 *
 * @module angularBackand
 *
 * @description
 * create constant services for global use
 * 
 * @author Mohan Singh ( gmail::mslogicmaster@gmail.com, skype :: mohan.singh42 )
 */
(function () {
  'use strict';

  angular
    .module('angularBackand')
    .constant('BACKAND_CONFIG', {
      appName: 'ng1app',
      anonymousToken: '0d21b351-9d84-4ea8-ba45-84f926a0bca4',
      signUpToken: '763c45c9-4a90-497b-b74b-49a18bd961cd'
    });

})();
