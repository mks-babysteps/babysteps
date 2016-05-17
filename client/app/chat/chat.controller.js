(function() {
  'use strict';

  angular
    .module('baby.chat')
    .controller('ChatCtrl', ChatCtrl);

  function ChatCtrl(messages, auth) {
    // initialize
    var vm = this;

    // variables
    // vm.messages = messages;
    vm.username = auth.current().username;
    vm.chat = {string: ''};
    vm.text = '';
    vm.messages = messages;
    vm.addMessage = addMessage;

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
    }
})();