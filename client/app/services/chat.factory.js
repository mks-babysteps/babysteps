(function() {
  'use strict';

  angular
    .module('baby')
    .factory('messages', messages);

  function messages($firebaseArray) {
    var messagesRef = new Firebase("https://torrid-torch-2854.firebaseio.com/");
    return $firebaseArray(messagesRef);
  }
})();