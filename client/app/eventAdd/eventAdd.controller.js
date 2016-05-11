(function () {
  'use strict';

  angular
    .module('baby.events')
    .controller('EventsAddCtrl', EventsAddCtrl);

    function EventsAddCtrl($state, events, $uibModalInstance) {
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
    vm.displayEvents = displayEvents;

    function init() {
      displayEvents();
    }

    function storeEvent(appointment, doctor, location, dt, childName) {
      var eventObj = {};
      eventObj.appointment = appointment;
      eventObj.doctor = doctor;
      eventObj.location = location;
      eventObj.dt = dt;
      eventObj.childName = vm.childName;
      console.log("This is the object we are going to send",eventObj)
      events.addEvent(eventObj)
        .then(function(data) {
          displayEvents();
        });
    }

    function compareDates(date2) {
      return new Date().getDate() > new Date(date2).getDate();
    }

    function displayEvents() {
      console.log('getting Events')
      events.getEvents()
        .then(function(data) {
          var events = data.data.events
          console.log(events)
          vm.allChildren = data.data.children;
          vm.comingEvents = [];
          vm.pastEvents = [];
          for(var i = 0; i < events.length; i++) {
            var today = new Date();
            var eventDates = new Date(events[i].dt);
            if(today < eventDates) {
              vm.comingEvents.push(events[i]);
            } else {
              vm.pastEvents.push(events[i]);
            }
          }
        });
    }

    function dateFilter(eventDate) {
      return function(eventDate) {

      }
    }

    function inputName(childName) {
      console.log("This is the child Name",childName);
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
    };

    // Disable weekend selection
    function disabled(data) {
      var date = data.date,
      mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    function open1() {
      vm.popup1.opened = true;
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