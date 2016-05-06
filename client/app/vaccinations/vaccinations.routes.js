(function() {
  'user strict';

  angular
    .module('baby.vaccinations')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('vaccinations', {
        url: '/vaccinations',
        views: {
          '': {
            templateUrl: 'app/vaccinations/vaccinations.html',
            controller: 'vaccinationsCtrl as vaccinations'
          }
        },
        params: { conditions: null }
      });
  }
})();