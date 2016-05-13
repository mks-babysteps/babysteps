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
            controller: 'VaccinationsCtrl as vaccinations'
          }
        },
        params: { firstName: null },
        data: {
          requiredLogin: true
        }
      });
  }
})();