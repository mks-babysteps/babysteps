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
      .state('faqs', {
        url: '/faqs',
        views: {
          '': {
            templateUrl: 'app/about/faqs.html',
            controller: 'DashboardCtrl as dashboard'
          }
        },
        data: {
          requiredLogin: false
        }
      });
    $stateProvider
      .state('contactus', {
        url: '/contactus',
        views: {
          '': {
            templateUrl: 'app/about/contactus.html',
            controller: 'DashboardCtrl as dashboard'
          }
        },
        data: {
          requiredLogin: false
        }
      });
    }
})();
