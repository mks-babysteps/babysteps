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
    }
})();
