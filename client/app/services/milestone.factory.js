(function () {
  'use strict';

  angular
    .module('baby')
    .factory('milestone', milestone);

  function milestone($http) {
    var service = {
        getConditionBy: getConditionBy
    };

    return service;

    function getConditionBy(child) {
      return $http.get('/milestone', {
        headers: {
          child: child
        }
      });
    }

  }
})();
