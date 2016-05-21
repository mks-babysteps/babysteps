(function () {
  'use strict';

  angular
    .module('baby.about')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        views: {
          '': {
            templateUrl: 'app/about/about.html',
            controller: 'DashboardCtrl as dashboard'
          }
        },
        data: {
          requiredLogin: false
        }
      });
    $stateProvider
      .state('aboutus', {
        url: '/aboutus',
        views: {
          '': {
            templateUrl: 'app/about/aboutus.html'
          }
        },
        data: {
          requiredLogin: false
        }
      });


    }
})();
