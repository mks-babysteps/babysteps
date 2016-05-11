(function () {
  'use strict';

  angular
    .module('baby')
    .factory('vaccinations', vaccinations);

    function vaccinations($http) {
      var service = {
          getVaccinations: getVaccinations
      };
      return service;

      function getVaccinations(firstName) {
        console.log('firstName in vac factory', firstName);
        return $http.post('/vaccinations', {firstName: firstName});
      }
    }

})();