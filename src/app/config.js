/**
 * @ngdoc config
 * @name angularBackand.config
 *
 * @module angularBackand
 *
 * @description
 * Main application configuration block
 * Initialize all providers and setting up configuration
 * 
 * @author Mohan Singh ( gmail::mslogicmaster@gmail.com, skype :: mohan.singh42 )
 */
(function () {
  'use strict';

  angular
    .module('angularBackand')
    .config(config);
  /** @ngInject */
  function config($logProvider, BackandProvider, BACKAND_CONFIG,  $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    //register authInterceptor to hanlde authentication
    $httpProvider.interceptors.push('authInterceptor');
    //configure backand
    BackandProvider.setAppName(BACKAND_CONFIG.appName); //your app name
    BackandProvider.setAnonymousToken(BACKAND_CONFIG.anonymousToken); //Anonymous Token
    BackandProvider.setSignUpToken(BACKAND_CONFIG.signUpToken); //SignUp Token, its optional for demo app
  }

})();
