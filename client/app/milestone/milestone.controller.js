(function () {
  'use strict';

  angular
    .module('baby.milestone',[])
    .controller('MilestoneCtrl', MilestoneCtrl);

  function MilestoneCtrl($state, milestone, $stateParams, $window, $scope) {
    // initialize
    var vm = this;

    // variables
    vm.init = init;
    vm.condition = $stateParams.condition;
    vm.getConditionData = getConditionData;

    init();

    // functions
    function init() {
      vm.getConditionData(vm.condition);
    }

    function getConditionData() {
      milestone.getCondition(vm.condition).then(function(response) {
        vm.data = response.data.condition;
      });
    }

  }

})();
