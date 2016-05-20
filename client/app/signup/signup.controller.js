(function () {
  'use strict';

  angular
    .module('baby.signup')
    .controller('SignupCtrl', SignupCtrl);

  function SignupCtrl($state, auth, $localStorage) {
    // initialize
    var vm = this;

    // variables
    vm.error = false;
    vm.message = '';

    // functions
    vm.signup = signup;
    vm.loggedIn = loggedIn;

    function signup(firstname, lastname, email, username, password) {
      var userObj = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password
      };
      console.log(userObj);

      auth.signup(userObj)
        .then(function(resp) {
          if(resp) {
            vm.error = true;
            vm.message = resp.data.message;
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