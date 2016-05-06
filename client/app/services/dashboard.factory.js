(function(){
  'use strict';

  angular
    .module('baby')
    .factory('dashboard', dashboard);

  function dashboard($http,$state) {
    var service = {
      getUser: getUser,
      addChild: addChild,
      removeThisChild: removeThisChild,
      goMilestone: goMilestone,
      editChild: editChild, 
      goVaccinations: goVaccinations
    };
    return service;

    function getUser() {
      return $http.get('/dashboard');
    }

    function removeThisChild(childName) {
      return $http.post('/dashboard', {firstName: childName});
    }

    function addChild(params) {
      return $http.post('/dashboard/addChild', params)
        .success(function(resp){
          console.log('resp', resp);
        });
    }

    function goMilestone(condition) {
      var conditionObj = {condition: condition};
        $state.go('milestone', conditionObj);
    }

    function editChild(childObj) {
      return $http.post('/edit', childObj);
    }

    function goVaccinations(condition) {
      var conditionObj = {condition : condition};
        $state.go('vaccinations', conditionObj);
    }

  }
})();