(function () {
  'use strict';

  angular
    .module('baby.landing')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        views: {
          '': {
            templateUrl: 'app/landing/landing.html',
            controller: 'LandingCtrl as landing'
          }
        }
      });
  }
})();
