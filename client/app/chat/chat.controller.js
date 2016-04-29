// (function() {
//   'user strict';

//   angular
//     .module('baby.chat')
//     .controller('ChatCtrl', ChatCrl);

//     function ChatCtrl($scope, $state, Messages, Auth) {
    
//       $scope.messages = Messages;
//       $scope.username = Auth.username;
//       $scope.chat = {
//         string: ''
//       };
//       $scope.text;

//       $scope.addMessage = function(text) {
//         $scope.text = text;
//         $scope.chat.string = '';
//         $scope.messages.$add(
//         {
//           "message": $scope.text,
//           "username": $scope.username
//         });
//       };
//     };
// })();