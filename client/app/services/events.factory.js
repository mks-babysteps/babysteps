(function () {
  'use strict';

  angular
    .module('baby')
    .factory('events', events);

  // Milestone.$inject = [$http];

  function events($http) {
    var service = {
      addEvent: addEvent
    };
    return service;

    function addEvent(eventDetails) {
      return $http.post('/events', eventDetails);
    }

  }
})();