(function () {
  'use strict';

  angular
    .module('baby.login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($state, $rootScope, auth, $localStorage, $http) {
    // initialize
    var vm = this;

    // variables
    vm.error = false;
    vm.message = '';

    // functions
    vm.login = login;
    vm.loggedIn = loggedIn;

    function login(username, password) {
      auth.signin(username, password)
        .then(function(data) {
          console.log(data.data);
          if (data.data.success) {
            $rootScope.$broadcast('loggedIn');
            $localStorage.username = username;
            $localStorage.token = data.data.token;
            $http.defaults.headers.common.username = username;
            $http.defaults.headers.common.token = $localStorage.token;
            $state.go('dashboard');
          } else {
              vm.error = true;
              vm.message = 'username or password invalid!';
              console.log(vm.message);
          }
        });
    }

    function loggedIn() {
      if($localStorage.username && $localStorage.token) {
        $state.go('dashboard');
      }
    }
  }
})();
