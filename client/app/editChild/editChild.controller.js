(function () {
  'use strict';

  angular
    .module('baby.dashboard')
    .controller('EditChildCtrl', EditChildCtrl);

  function EditChildCtrl($uibModalInstance, dashboard) {
    // initialize
    var vm = this;

    // variables
    vm.altInputFormats = ['M!/d!/yyyy'];
    vm.conditions = ['Normal', 'Cerebral Palsy', 'Down Syndrome'];
    vm.dateOptions = {
      dateDisabled: vm.disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
    vm.events = [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];
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

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);


    // functions
    vm.editChild = editChild;
    vm.clear = clear;
    vm.close = close;
    vm.disabled = disabled;
    vm.getDayClass = getDayClass;
    vm.open1 = open1;
    vm.setDate = setDate;
    vm.today = today;
    vm.toggleMin = toggleMin;

    // start up functions
    vm.toggleMin();
    vm.today();

    function close() {
      $uibModalInstance.close();
    }

    function today() {
      vm.dt = new Date();
    }

    function editChild(firstName, lastName, birthday, condition) {
      var childObj = {
        'firstName': firstName,
        'lastName': lastName,
        'birthday': birthday,
        'condition': condition
      };
      dashboard.editChild(childObj);
      vm.close();
    }

    function clear() {
      vm.dt = null;
    }

    function disabled(data) {
      var date = data.data;
      var mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
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
})();
