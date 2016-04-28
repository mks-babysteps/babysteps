(function () {
  'use strict'

  angular
    .module('baby.signup')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('signup', {
        url: '/signup',
        views: {
          'signup': {
            templateUrl: 'app/signup/signup.html',
            controller: 'SignupController as signup'
          };
        };
      });
  };
})();