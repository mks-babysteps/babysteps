(function () {
  'use strict';

  angular
    .module('baby.login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($state, auth, $localStorage, $http) {

    var vm = this;

    vm.login = login;
    vm.redirectToSignup = redirectToSignup;
    vm.error = false;
    vm.message = 'Invalid user and password combination';

    function login(username, password) {
      auth.signIn(username, password)
        .then(function(data) {
          console.log(data.data);
          if (data.data.success) {
            $localStorage.username = username;
            $http.defaults.headers.common.username = username;
            $state.go('dashboard');
          } else {
            vm.error = true;
          }
        });
    }

    function redirectToSignup() {
      $state.go('signup');
    }
  }
})();
