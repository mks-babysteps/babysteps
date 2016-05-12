(function () {
  'use strict';

  angular
    .module('baby.events',[])
    .controller('EventsCtrl', EventsCtrl);

  function EventsCtrl($state, events, $uibModal) {

    // initialize
    var vm = this;

    //functions
    vm.init = init;
    vm.open = open;
    vm.removeEvent = removeEvent;

    function init() {
      displayEvents();
    }

    function open() {
      vm.modalInstance = $uibModal.open({
        templateUrl: 'app/eventAdd/eventAdd.html',
        controller: 'EventsAddCtrl as eventadd'
      });
    }

    function displayEvents() {
      events.getEvents()
        .then(function(data) {
          var events = data.data.events;
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

    function removeEvent(dt) {
      events.deleteEvent({dt:dt});
      $state.reload('events');
    }

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
})();