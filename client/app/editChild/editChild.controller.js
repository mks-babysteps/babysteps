(function () {
  'use strict';

  angular
    .module('baby.login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($state, auth, $localStorage, $http) {

    // initializations
    var vm = this;
    vm.toggleMin();

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
    vm.format = vm.formats[0];
    vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      opened: false
    };
    vm.popup1 = {
      opened: false
    };

    // functions
    vm.addChild = addChild;
    vm.clear = clear;
    vm.close = close;
    vm.disabled = disabled;
    vm.today = today;
    vm.toggleMin = toggleMin;
    vm.open1 = open1;
    vm.setDate = setDate;

    function close() {
      $uibModalInstance.close();
    }

    function today() {
      vm.dt = new Date();
    };

    function addChild() {
      var childObj = {
        'firstName': firstName,
        'lastName': lastName,
        'birthday': birthday,
        'condition': condition
      };
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
  }
})();
