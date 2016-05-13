(function () {
  'use strict';

  angular
    .module('baby.milestone',[])
    .controller('MilestoneCtrl', MilestoneCtrl);

  function MilestoneCtrl($state, milestone, $stateParams) {
    // initialize
    var vm = this;

    // variables
    vm.init = init;
    vm.condition = $stateParams.condition;
    vm.getConditionData = getConditionData;
    vm.data;

    init();

    // functions
    function init() {
      console.log('Running init');
      vm.getConditionData(vm.condition);
    }

    function getConditionData() {
      milestone.getCondition(vm.condition).then(function(response) {
        console.log('RESPONSE:', response.data);
        vm.data = response.data.condition;
      });
    }

  }

})();
