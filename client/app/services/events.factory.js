(function () {
  'use strict';

  angular
    .module('baby')
    .factory('events', events);

  // Milestone.$inject = [$http];

  function events($http) {
    var service = {
      addEvent: addEvent,
      getEvents: getEvents
    };
    return service;

    function addEvent(eventDetails) {
      return $http.post('/events', eventDetails);
    }

    function getEvents() {
      return $http.get('/events');
    }

  }
})();