(function () {
  'use strict';

  angular
    .module('baby.dashboard')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          '': {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardCtrl as dashboard'
          }
        }
      }) // just placing route to about us page here, we can move it later!
      .state('about', {
        url: '/about',
        templateUrl: '../about.html',
        controller: ''
      }) // just placing route to tech page, we can move later!
      .state('tech', {
        url: '/tech',
        templateUrl: '../tech.html',
        controller: ''
      });
    }
})();