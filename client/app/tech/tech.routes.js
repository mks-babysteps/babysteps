(function () {
  'use strict';

  angular
    .module('baby.tech')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('tech', {
        url: '/tech',
        views: {
          '': {
            templateUrl: 'app/tech/tech.html'
          }
        },
        data: {
          requiredLogin: false
        }
      });
    }
})();
