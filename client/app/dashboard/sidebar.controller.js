(function() {
  'use strict';

  angular
    .module('baby') // ??
    // should be in dashboard, milestones, etc.
    // should also have linkes to children, milestones, etc.
    .controller('SidebarCtrl', SidebarCtrl);

  function SidebarCtrl(auth, $state, $scope) {

    var vm = this;

    // vm.inChat = false;

    // vm.authed = auth.isAuthed();
    vm.logout = logout;
    // vm.chat = chat;
    // vm.leave = leave;

    function logout() {
      auth.logout();
      $state.go('login');
    }

    // function chat() {
    //   vm.inChat = true;
    //   $state.go('chat');
    // }

    // function leave() {
    //   vm.inChat = false;
    //   $state.go('dashboard');
    // }

    // // Listeners
    // $scope.$on('loggedOut', function() {
    //   vm.authed = false;
    // });

    // $scope.$on('loggedIn', function() {
    //   vm.authed = true;
    // });
  }
})();

// in auth factory
//   function parseJwt(token) {
//     var base64Url = token.split('.')[1];
//     var base64 = base64Url.replace('-', '+').replace('_', '/');
//     return JSON.parse($window.atob(base64));
//   }

// function isAuthed() {
//     var token = getToken();
//     if (token) {
//       var params = parseJwt(token);
//       return Math.round(new Date().getTime() / 1000) <= params.exp;
//     } else {
//       console.error('no token found!');
//       return false;
//     }
//   }