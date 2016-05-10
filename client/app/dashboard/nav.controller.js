(function() {
  'use strict';

  angular
    .module('baby')
    .controller('NavCtrl', NavCtrl);

  function NavCtrl(auth, $state, $scope) {
    // initialize
    var vm = this;

    // variables
    // vm.inChat = false;
    // vm.chat = chat;
    // vm.leave = leave;

    // functions
    vm.logout = logout;

    function logout() {
      auth.logout();
      $state.go('login');
      vm.authed = false;
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