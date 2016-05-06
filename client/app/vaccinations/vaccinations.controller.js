(function(){
  'use strict';

  angular
    .module('baby.vaccination', [])
    .controller('VaccinationsCtrl', VaccinationsCtrl);

    function VaccinationsCtrl($state, vaccinations, $stateParams){

      var vm = this;

      //variables
      var currentChildCondition = $stateParams.condition;
      var vaccinationData = vaccinationData;
      // functions
      vm.displayVaccinations = displayVaccinations;
      vm.condition = $stateParams.condition;

      function displayVaccinations(){
        console.log('inside controller');
        console.log("condition", vm.condition);
        vaccinations.getVaccinations(vm.condition)
          .then(function(data) {
            vm.vaccinationData = data.data[0].vaccinations;
            console.log(data.data[0].vaccinations)
          })
      }

    }
})();