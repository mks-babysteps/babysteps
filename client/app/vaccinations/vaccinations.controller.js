(function(){
  'use strict';

  angular
    .module('baby.vaccination', [])
    .controller('VaccinationsCtrl', VaccinationsCtrl);

    function VaccinationsCtrl($state, vaccinations, $stateParams){

      var vm = this;

      //variables
      var vaccinationData = vaccinationData;
      // functions
      vm.displayVaccinations = displayVaccinations;
      vm.condition = $stateParams.condition;

      function displayVaccinations(){
        vaccinations.getVaccinations(vm.condition)
          .then(function(data) {
            vm.vaccinationData = data.data[0].vaccinations;
          });
      }

    }
})();