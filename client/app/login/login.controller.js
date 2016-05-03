(function () {
  'use strict';

  angular
    .module('baby.login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($state, auth, localStorageService, $http) {

    var vm = this;

    vm.login = login;
    vm.redirectToSignup = redirectToSignup;
    vm.error = false;
    vm.message = 'Invalid user and password combination';

    function login(username, password) {
      auth.signIn(username, password)
        .then(function(data) {
          if (data.data.success) {
            localStorageService.set('username', username);
            $http.defaults.headers.common.username = username;
            $state.go('dashboard');
          } else {
            vm.error = true;
          }
        });
    }

    function redirectToSignup() {
      $state.go('signup');
    };
  }
})();
