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
    vm.editEvent = editEvent;

    function init() {
      displayEvents();
    }

    function open(childName, appointment, doctor, dt, location, notes) {
      vm.modalInstance = $uibModal.open({
        templateUrl: 'app/eventAdd/eventAdd.html',
        controller: 'EventsAddCtrl as eventadd',
        resolve: {
            event: function() {
              return [childName, appointment, doctor, dt, location, notes];
            }
          }
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

    function editEvent(childName, appointment, doctor, dt, location, notes) {
      vm.modalInstance = $uibModal.open({
        templateUrl: 'app/eventAdd/eventEdit.html',
        controller: 'EventsAddCtrl as eventadd',
        resolve: {
            event: function() {
              return [childName, appointment, doctor, dt, location, notes];
            }
          }
      });
    }

    }
})();