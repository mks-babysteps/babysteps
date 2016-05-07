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
      vm.condition = $state.params;
      console.log(vm.condition);

      function displayVaccinations() {
        vaccinations.getVaccinations(vm.condition)
          .then(function(data) {
            console.log('data', data);
            vm.vaccinationData = data.data[0].vaccinations;
          });
      }

    }
})();