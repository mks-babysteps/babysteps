(function () {
  'use strict';

  angular
    .module('baby.dashboard')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('dashboard', {
        cache: false,
        url: '/dashboard',
        authenticate: true,
        views: {
          '': {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardCtrl as dashboard'
          }
        }
      });

    }
})(); 
