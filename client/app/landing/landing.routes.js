(function () {
  'use strict';

  angular
    .module('baby.landing')
    .config(config);

  function config ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        cache: false,
        url: '/landing',
        views: {
          '': {
            templateUrl: 'app/landing/landing.html',
            controller: 'LandingCtrl as landing'
          }
        }
      });
    // if random url, go here: 
    $urlRouterProvider.otherwise('/landing');
  }
})();
