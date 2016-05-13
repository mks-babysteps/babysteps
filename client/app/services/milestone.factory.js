(function () {
  'use strict';

  angular
    .module('baby')
    .factory('milestone', milestone);

  function milestone($http) {
    var service = {
        getCondition: getCondition
    };

    return service;

    function getCondition(condition) {
      return $http.get('/milestone', {
        headers: {
          condition: condition
        }
      });
    }

  }
})();
