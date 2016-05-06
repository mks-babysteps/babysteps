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
    vm.message = 'Invalid user and password combination';
    
    // functions
    vm.login = login;

    function login(username, password) {
      auth.signin(username, password)
        .then(function(data) {
          console.log(data.data);
          if (data.data.success) {
            $rootScope.$broadcast('loggedIn');
            $localStorage.username = username;
            $http.defaults.headers.common.username = username;
            $state.go('dashboard');
          } else {
            vm.error = true;
          }
        });
    }
  }
})();