(function() {
  'user strict';

  angular
    .module('baby.vaccination')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('vaccinations', {
        url: '/vaccinations',
        views: {
          '': {
            templateUrl: 'app/vaccinations/vaccinations.html',
            controller: 'VaccinationsCtrl as vaccinations'
          }
        },
        params: { condition: null },
        data: {
          requiredLogin: true
        }
      });
  }
})();