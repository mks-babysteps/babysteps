(function() {
  'user strict';

  angular
    .module('baby.vaccinations')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('vaccinations', {
        url: '/vaccinations/:child',
        views: {
          '': {
            templateUrl: 'app/vaccinations/vaccinations.html',
            controller: 'VaccinationsCtrl as vaccinations'
          }
        },
        data: {
          requiredLogin: true
        }
      });
  }
})();