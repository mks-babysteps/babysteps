(function(){
  'use strict';

  angular
    .module('baby.vaccinations', [])
    .controller('VaccinationsCtrl', VaccinationsCtrl);

    function VaccinationsCtrl($state, vaccinations, $scope) {

      var vm = this;

      //variables
      var vaccinationData = vaccinationData;
      var hoverStatus = hoverStatus;
      // functions
      vm.displayVaccinations = displayVaccinations;
      vm.firstName = $state.params;
      console.log(vm.firstName);
      vm.doseExists = doseExists;
      vm.updateDoseStatus = updateDoseStatus;
      vm.isItComplete = isItComplete;
      vm.checkIt = checkIt;
      vm.allDoses = allDoses;
      vm.hoverIn = hoverIn;
      vm.hoverOut = hoverOut;

      function hoverIn() {
        vm.hoverStatus = true;
      }

      function hoverOut() {
        vm.hoverStatus = false;
      }

      function allDoses(first, second, third, fourth) {
        if(fourth!==null){
          if(fourth[1]==='Complete'){
            return 'panel panel-primary';
          } else {
            return 'panel panel-danger';
          }
        } else {
          if(third!==null){
            if(third[1]==='Complete'){
              return 'panel panel-primary';
            } else {
              return 'panel panel-danger';
            }
          } else {
            if(second!==null){
              if(second[1]==='Complete'){
                return 'panel panel-primary';
              } else {
                return 'panel panel-danger';
              }
            } else {
              if(first[1]==='Complete'){
                return 'panel panel-primary';
              } else {
                return 'panel panel-danger';
              }
            }
          }
        }
      }


      function displayVaccinations() {
        vaccinations.getVaccinations(vm.firstName)
          .then(function(data) {
            vm.vaccinationData = data.data.vaccination;
            vm.dosesCount = data.data.count;
            console.log('my count: ', vm.dosesCount);
          });

      }


      function updateDoseStatus(vaccinationName, doseNumber, doseStatus){
        vaccinations.updateDoseStatus(vaccinationName, doseNumber, doseStatus, vm.firstName)
          .then(vm.checkIt);
      }

      function checkIt(){
        $scope.$watch('vm.vaccinationData', vm.displayVaccinations());
      }

      function doseExists(dose){
        if(dose!==null){
          return true;
        } else{
          return false;
        }
      }

      function isItComplete(doseStatus){
        if(doseStatus==='Complete'){
          return true;
        } else {
          return false;
        }
      }
    }
})();
