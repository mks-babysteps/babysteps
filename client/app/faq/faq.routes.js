(function () {
  'use strict';

  angular
    .module('baby.faq')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('faq', {
        url: '/faq',
        views: {
          '': {
            templateUrl: 'app/faq/faq.html'
          }
        },
        data: {
          requiredLogin: false
        }
      });
    }
})();
