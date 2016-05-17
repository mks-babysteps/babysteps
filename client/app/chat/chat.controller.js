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

    // functions
    function addMessage(text) {
      vm.text = text;
      vm.chat.string = '';
      vm.messages.$add({
        'message': vm.text,
        'username': vm.username,
        'image': vm.imageUrl,
        'time': vm.dt
      });
      console.log(vm.messages);
    }

    function displayUsers(username) {
      //console.log("username: ", username)
      dashboard.getUserByUN(username)
        .then(function(data) {
          var userObj = data.data;
          vm.imageUrl = userObj[0].imageUrl;
        });
    }

    function clearInput() {
      $('#clearInput').val('');
    }

    // function getDate() {
    //   vm.dt = Date.now() / 1000 | 0;
    //   console.log(vm.dt);
    //   return vm.dt;
    // }
  }
})();