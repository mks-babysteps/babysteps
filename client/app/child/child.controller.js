(function () {
  'use strict';

  angular
    .module('baby.dashboard')
    .controller('ChildCtrl', ChildCtrl);

  function ChildCtrl($uibModalInstance, dashboard) {
        
        var vm = this;

        vm.conditions = ['None', 'Cerebral Palsy', 'Down Syndrome'];

        vm.addChild = function(firstName, lastName, birthday, condition) {
          //console.log("Addchild in ChildCtrl", name, " + ", birthday, " + ", condition);
        	var childObj = {
        		'firstName': firstName,
            'lastName': lastName,
        		'birthday': birthday,
        		'condition': condition
        	};
          //console.log("params", childObj);
        	dashboard.addChild(childObj);
          //console.log('Name: ', name,' birthday: ', birthday, ' condition: ', condition);
          vm.close();
        };

        vm.close = function() {
          $uibModalInstance.close();
        };

        vm.today = function() {
          vm.dt = new Date();
        };

        vm.today();

        vm.clear = function() {
          vm.dt = null;
        };

        vm.inlineOptions = {
          customClass: getDayClass,
          minDate: new Date(),
          showWeeks: true
        };

        vm.dateOptions = {
          formatYear: 'yy',
          maxDate: new Date(2050, 5, 22),
          minDate: new Date(1993, 2, 6),
          startingDay: 1
        };

        vm.toggleMin = function() {
          vm.inlineOptions.minDate = vm.inlineOptions.minDate ? null : new Date();
          vm.dateOptions.minDate = vm.inlineOptions.minDate;
        };

        vm.toggleMin();

        vm.open1 = function() {
          vm.popup1.opened = true;
        };

        vm.setDate = function(year, month, day) {
          vm.dt = new Date(year, month, day);
        };

        vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.formats[0];
        vm.altInputFormats = ['M!/d!/yyyy'];

        vm.popup1 = {
          opened: false
        };

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