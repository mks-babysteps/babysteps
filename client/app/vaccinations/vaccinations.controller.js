(function(){
  'use strict';

  angular
    .module('baby.vaccinations')
    .controller('VaccinationsCtrl', VaccinationsCtrl);

    function VaccinationsCtrl(vaccinations, $stateParams){

      var vm = this;

      //variables
      var currentChildCondition = $stateParams.condition;
  
      //functions
      vm.displayVaccinations = displayVaccinations;

      function displayVaccinations(){
        vaccinations.getVaccinations(currentChildCondition)
          .then(function(data) {
            console.log("vaxdata", data)
          })
      }

    }
})();