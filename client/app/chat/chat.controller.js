// (function() {
//   'user strict';

//   angular
//     .module('baby.chat')
//     .controller('ChatCtrl', ChatCrl);

//   function ChatCtrl($scope, $state, messages, auth) {
  
//     vm = this;

//     vm.messages = messages;
//     vm.username = $localStorage.username;
//     vm.chat = { string: '' };
//     vm.text;

//     vm.addMessage = addMessage;

//     function addMessage(text) {
//       vm.text = text;
//       vm.chat.string = '';
//       vm.messages.$add({
//           "message": vm.text,
//           "username": vm.username
//         });
//       }
//     }
// })();