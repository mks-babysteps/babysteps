(function () {
  'use strict';

  angular
    .module('baby.contact')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        views: {
          '': {
            templateUrl: 'app/contact/contact.html'
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
            templateUrl: 'app/contact/contactus.html',
            // controller: 'DashboardCtrl as dashboard'
          }
        },
        data: {
          requiredLogin: false
        }
      });
    }
})();
