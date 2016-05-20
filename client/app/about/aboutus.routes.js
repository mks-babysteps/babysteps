(function () {
  'use strict';

  angular
    .module('baby.aboutus')
    .config(config);

  function config($stateProvider) {
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
