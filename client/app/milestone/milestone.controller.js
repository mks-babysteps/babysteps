(function () {
  'use strict';

  angular
    .module('baby.milestone',[])
    .controller('MilestoneCtrl', MilestoneCtrl);

  function MilestoneCtrl($state, milestone, $stateParams) {
    // initialize
    var vm = this;

    // variables
    var currentChildCondition = $stateParams.condition;
    
    // functions
    vm.displayCondition = displayCondition;
    vm.init = init;
    vm.condition = $stateParams.condition;

    function init() {
      displayCondition();
    }

    function displayCondition() {
      milestone.getCondition(currentChildCondition)
        .then(function(data) {
          var conditionData = data.data[0];
          vm.grossMotor = conditionData.grossMotor;
          vm.personalSocial = conditionData.personalSocial;
          vm.language = conditionData.language;
        });
    }
  
  }
})();