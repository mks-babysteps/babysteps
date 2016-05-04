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
    vm.logout = logout;
    // vm.chat = chat;
    // vm.leave = leave;

    function logout() {
      auth.logout();
      $state.go('login');
    }

    $scope.$on('loggedOut', function() {
      vm.authed = false;
    });

    $scope.$on('loggedIn', function() {
      vm.authed = true;
    });
  }

    // function chat() {
    //   vm.inChat = true;
    //   $state.go('chat');
    // }

    // function leave() {
    //   vm.inChat = false;
    //   $state.go('dashboard');
    // }
})();