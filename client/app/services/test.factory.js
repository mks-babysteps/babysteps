(function () {
  'use strict';

  angular
    .module('baby')
    .factory('test', test);

  function test($http) {
    var service = {
        double: double,
        getName: getName
    };

    return service;

    function double(x) {
      return x * 2;
    }

    function getName(id) {
      return $http.get('http://jsonplaceholder.typicode.com/users/'+id);
    }

  }
})();

// test factory for jasmine test
