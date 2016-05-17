(function() {
  'use strict';

  angular
    .module('baby')
    .factory('dashboard', dashboard);

  function dashboard($http) {
    var service = {
      getUser: getUser,
      addChild: addChild,
      removeThisChild: removeThisChild,
      editChild: editChild,
      imageUrl: imageUrl,
      childImageUrl: childImageUrl,
      getUserByUN: getUserByUN
    };
    return service;

    function getUser() {
      return $http.get('/dashboard');
    }

    function getUserByUN(username) {
      return $http.post('/dashboard', {username: username});
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

    function editChild(childObj) {
      return $http.post('/edit', childObj);
    }

    function imageUrl(Blob) {
      var imageUrlString = Blob;
      var imageUrlObj = {url: imageUrlString.url};
      return $http.post('/dashboard/image', imageUrlObj);
    }

    function childImageUrl(Blob, firstName) {
      var imageUrlString = Blob;
      var imageUrlObj = {url: imageUrlString.url, firstName: firstName};
      return $http.post('/dashboard/childImage', imageUrlObj);
    }
  }
})();