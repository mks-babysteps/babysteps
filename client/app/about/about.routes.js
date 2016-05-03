(function () {
  'use strict';

  angular
    .module('baby.about')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('about', {
        cache: false,
        url: '/about',
        views: {
          '': {
            templateUrl: 'app/about/about.html'
          }
        }
      });
    }
})();