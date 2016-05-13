(function () {
  'use strict';

  angular
    .module('baby')
    .factory('vaccinations', vaccinations);

    function vaccinations($http) {
      var service = {
          getVaccinations: getVaccinations,
          updateDoseStatus: updateDoseStatus
      };
      return service;

      function getVaccinations(firstName) {
        // console.log('firstName in vac factory', firstName);
        return $http.post('/vaccinations', {firstName: firstName});
      }

      function updateDoseStatus(vaccinationName, doseNumber, doseStatus, firstName){
        // console.log('the doseNumber is', doseNumber);
        return $http.post('/vaccinations/updateDose', 
          {vaccinationName: vaccinationName, doseNumber: doseNumber, 
            doseStatus: doseStatus, firstName: firstName });
      }


    }

})();