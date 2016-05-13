(function () {
  'use strict';

  angular
    .module('baby.dashboard')
    .controller('ChildCtrl', ChildCtrl);

  function ChildCtrl($uibModalInstance, dashboard, $state) {
    // initialize
    var vm = this;

    // variables
    vm.conditions = ['None', 'Cerebral Palsy', 'Down Syndrome'];
    vm.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(1993, 2, 6),
      startingDay: 1
    };
    vm.events = [];
    vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    vm.format = vm.formats[0];
    vm.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };
    vm.popup1 = {
      opened: false
    };

    // functions
    vm.addChild = addChild;
    vm.clear = clear;
    vm.close = close;
    vm.getDayClass = getDayClass;
    vm.open1 = open1;
    vm.setDate = setDate;
    vm.today = today;
    vm.toggleMin = toggleMin;

    function addChild(firstName, lastName, birthday, condition) {
      var childObj = {
        'firstName': firstName,
        'lastName': lastName,
        'birthday': birthday,
        'condition': condition
      };
      $state.reload('dashboard');
      dashboard.addChild(childObj);
      vm.close();
    }

    // datepicker functions
    vm.toggleMin();
    vm.today();

    function close() {
      $uibModalInstance.close();
    }

    function today() {
      vm.dt = new Date();
    }

    function clear() {
      vm.dt = null;
    }

    function toggleMin() {
      vm.inlineOptions.minDate = vm.inlineOptions.minDate ? null : new Date();
      vm.dateOptions.minDate = vm.inlineOptions.minDate;
    }

    function open1() {
      vm.popup1.opened = true;
    }

    function setDate(year, month, day) {
      vm.dt = new Date(year, month, day);
    }

    function getDayClass(data) {
      var date = data.date,
        mode = data.mode;
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i = 0; i < vm.events.length; i++) {
          var currentDay = new Date(vm.events[i].date).setHours(0,0,0,0);
            if (dayToCheck === currentDay) {
              return vm.events[i].status;
            }
        }
      }
      return '';
    }

  }
}());