(function () {
  'use strict';

  angular
    .module('baby.landing')
    .config(config);

  function config ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        views: {
          '': {
            templateUrl: 'app/landing/landing.html',
            controller: 'LandingCtrl as landing'
          }
        },
        data: {
          requiredLogin: false
        }
      });
    // if random url, go here:
    $urlRouterProvider.otherwise('/landing');
  }
})();
