(function(){
  'use strict';

  angular
    .module('baby.vaccinations', [])
    .controller('VaccinationsCtrl', VaccinationsCtrl);

    function VaccinationsCtrl($state, vaccinations) {

      var vm = this;

      //variables
      var vaccinationData = vaccinationData;
      // functions
      vm.displayVaccinations = displayVaccinations;
      vm.firstName = $state.params;
      console.log(vm.firstName);
      vm.doseExists = doseExists;
      vm.updateDoseStatus = updateDoseStatus;
      vm.isItComplete = isItComplete;

      function displayVaccinations() {
        vaccinations.getVaccinations(vm.firstName)
          .then(function(data) {
            console.log('data', data);
            vm.vaccinationData = data.data
          });
      };

      function updateDoseStatus(vaccinationName, doseNumber, doseStatus){
        console.log('Complete was clicked!', vaccinationName, doseNumber, doseStatus)
        vaccinations.updateDoseStatus(vaccinationName, doseNumber, doseStatus, vm.firstName)
          .then(function(){
            $state.reload('vaccinations')
          });
      };

      function doseExists(dose){
        if(dose!==null){
          return true
        } else{
          return false
        }
      };

      function isItComplete(doseStatus){
        if(doseStatus==='Complete'){
          return true
        } else {
          return false
        }
      }

    }
})();