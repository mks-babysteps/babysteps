(function(){
  'use strict';

  angular
    .module('baby')
    .factory('dashboard', dashboard);

    function dashboard($http){
      var service = {
        getUser: getUser
      };
      return service;
    
      function getUser(){
        return $http.get('/dashboard');
      }
    }






})();