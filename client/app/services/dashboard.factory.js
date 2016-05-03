(function(){
  'use strict';

  angular
    .module('baby')
    .factory('dashboard', dashboard);

    function dashboard($http){
      var service = {
        getUser: getUser,
        removeThisChild : removeThisChild
      };
      return service;
    
      function getUser(){
        return $http.get('/dashboard');
      }

      function removeThisChild(childName, userName){
        return $http.post('/dashboard', {firstName: childName, userName: userName});
      }
    }






})();