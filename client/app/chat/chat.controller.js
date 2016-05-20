(function() {
  'use strict';

  angular
    .module('baby.chat')
    .controller('ChatCtrl', ChatCtrl);

  function ChatCtrl(messages, auth, dashboard) {
    // initialize
    var vm = this;

    // variables
    vm.username = auth.current().username;
    vm.chat = {string: ''};
    vm.text = '';
    vm.messages = messages;
    vm.addMessage = addMessage;
    vm.displayUsers = displayUsers;
    vm.clearInput = clearInput;
    vm.dt = Date.now();
    vm.currentTime = currentTime;

    function currentTime() {
      return Date.now();
    }

    // functions
    function addMessage(text) {
      vm.text = text;
      vm.chat.string = '';
      vm.messages.$add({
        'message': vm.text,
        'username': vm.username,
        'image': vm.imageUrl,
        'time': currentTime()
      });
      console.log(vm.messages);
    }

    function displayUsers() {
      dashboard.getUser()
        .then(function(data) {
          var userObj = data.data;
          vm.imageUrl = userObj[0].imageUrl;
        });
    }

    function clearInput() {
      $('#clearInput').val('');
    }

  }
})();