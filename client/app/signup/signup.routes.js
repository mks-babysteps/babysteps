(function () {
  'use strict';

  angular
    .module('baby.signup')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('signup', {
        cache: false,
        url: '/signup',
        views: {
          '': {
            templateUrl: 'app/signup/signup.html',
            controller: 'SignupCtrl as signup'
          }
        }
      });
  }
})();
