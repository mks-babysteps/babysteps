(function () {
  'use strict';

  angular
    .module('baby.events')
    .controller('EventsAddCtrl', EventsAddCtrl);

    function EventsAddCtrl($state, events, $uibModalInstance, event) {

    // initialize
    var vm = this;

    //functions
    vm.today = today;
    vm.disabled = disabled;
    vm.open1 = open1;
    vm.getDayClass = getDayClass;
    vm.storeEvent = storeEvent;
    vm.init = init;
    vm.inputName = inputName;
    vm.populateChildren = populateChildren;
    vm.close = close;
    vm.updateEvent = updateEvent;

    //event Edit variables
    vm.childName = event[0];
    vm.appointment = event[1];
    vm.doctor = event[2];
    vm.dt = event[3];
    vm.location = event[4];
    vm.notes = event[5];

    function init() {
      populateChildren();
    }

    function updateEvent(appointment, doctor, location, dt, childName, notes) {
      var updateObj = {};
      updateObj.appointment = appointment;
      updateObj.doctor = doctor;
      updateObj.location = location;
      updateObj.dt = dt;
      updateObj.childName = vm.childName;
      updateObj.oldDt = event[3];
      updateObj.notes = notes;
      events.editEvent(updateObj);
    }

    function close() {
      $state.reload('events');
      $uibModalInstance.close();
    }

    function storeEvent(appointment, doctor, location, dt, child, notes) {
      var eventObj = {};
      eventObj.appointment = appointment;
      eventObj.doctor = doctor;
      eventObj.location = location;
      eventObj.dt = dt;
      eventObj.childName = vm.childName;
      eventObj.notes = notes;
      events.addEvent(eventObj)
        .then(function() {
          close();
        });
    }

    function populateChildren() {
      events.getEvents()
        .then(function(data) {
          vm.allChildren = data.data.children;
        });
    }

    function inputName(childName) {
      vm.childName = childName;
    }

    vm.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };

    vm.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

    vm.formats = [
      'dd-MMMM-yyyy',
      'yyyy/MM/dd',
      'dd.MM.yyyy',
      'shortDate'
    ];

    vm.popup1 = {
      opened: false
    };

    vm.format = vm.formats[0];

    vm.altInputFormats = ['M!/d!/yyyy'];

    vm.status = {
      isopen: false
    };

    function today() {
      vm.dt = new Date();
    }

    // disable weekend selection
    function disabled(data) {
      var date = data.date,
      mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    function open1() {
      vm.popup1.opened = true;
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