(function () {
  'use strict';

  angular
    .module('baby')
    .factory('events', events);

  // Milestone.$inject = [$http];

  function events($http) {
    var service = {
      addEvent: addEvent,
      getEvents: getEvents,
      deleteEvent: deleteEvent,
      editEvent: editEvent
    };
    return service;

    function addEvent(eventDetails) {
      return $http.post('/events', eventDetails);
    }

    function getEvents() {
      return $http.get('/events');
    }

    function deleteEvent(dt) {
      return $http.post('/events/remove', dt);
    }

    function editEvent(eventDetails) {
      return $http.post('/events/edit', eventDetails);
    }

  }
})();