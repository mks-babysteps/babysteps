(function() {
  'use strict';

  angular
    .module('baby')
    .factory('dashboard', dashboard);

  function dashboard($http, $state) {
    var service = {
      getUser: getUser,
      addChild: addChild,
      removeThisChild: removeThisChild,
      goMilestone: goMilestone,
      editChild: editChild,
      goVaccinations: goVaccinations,
      imageUrl: imageUrl,
      childImageUrl: childImageUrl
    };
    return service;

    function getUser() {
      return $http.get('/dashboard');
    }

    function removeThisChild(childName) {
      return $http.post('/dashboard/removeChild', {firstName: childName});
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

    function goVaccinations(firstName) {
      //console.log('inside govax', firstName);
      var firstNameObj = {firstName : firstName};
      $state.go('vaccinations', firstNameObj);
      //console.log('end of govax');
    }

    function imageUrl(Blob) {
      var imageUrlString = Blob;
      var imageUrlObj = {url: imageUrlString.url};
      return $http.post('/dashboard/image', imageUrlObj);
    }

    function childImageUrl(Blob, firstName) {
      var imageUrlString = Blob;
      var imageUrlObj = {url: imageUrlString.url, firstName: firstName};
      //console.log("childImageUrl", imageUrlObj);
      return $http.post('/dashboard/childImage', imageUrlObj);
    }
  }
})();