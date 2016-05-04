(function(){
  'use strict';

  angular
    .module('baby')
    .factory('dashboard', dashboard);

    function dashboard($http){
      var service = {
        getUser: getUser,
        addChild: addChild,
        removeThisChild : removeThisChild
      };
      return service;

      function getUser(userName){
        return $http.get('/dashboard', {userName: userName});
      }

      function removeThisChild(childName, userName){
        return $http.post('/dashboard', {firstName: childName, userName: userName});
      }

      function addChild(params){
        return $http.post('/dashboard/addChild', params)
          .success(function(resp){
            console.log('resp', resp);
            console.log('resp.success', resp.success);
          });
      }
    }
})();