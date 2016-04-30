(function () {
  'use strict';

  angular
    .module('baby')
    .factory('Milestone', Milestone);

  // Milestone.$inject = [$http];

  function Milestone ($http) {
    var service = {
        getCondition: getCondition
    };
    return service;

    function getCondition() {
      $http.post('/milestone')
        .then(function(res) {
            console.log(res);
    });
    }

  }
})();