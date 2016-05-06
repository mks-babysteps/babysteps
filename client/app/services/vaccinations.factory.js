(function () {
  'use strict';

  angular
    .module('baby')
    .factory('vaccinations', vaccinations);

    function vaccinations($http){
      var service = {
          getVaccinations: getVaccinations
      };
      return service;

        function getVaccinations(condition){
          var vaccinationObj = {
            conditionName : condition
          };
          return $http.post('/vaccinations', vaccinationObj);
        }
    }
})();