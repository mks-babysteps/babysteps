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
        'username': vm.username
      });
      console.log(vm.messages);
      }

    function displayUsers() {
      dashboard.getUser()
        .then(function(data) {
          var userObj = data.data;
          vm.users = userObj;
          vm.children = userObj[0].children;
          vm.imageUrl = vm.users[0].imageUrl;
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