(function () {
  'use strict';

  angular
    .module('baby.signup')
    .controller('SignupCtrl', SignupCtrl);

  function SignupCtrl($state, auth) {
    
    var vm = this;

    vm.error = false;
    vm.message = '';

    // Functions
    vm.redirectToLogin = redirectToLogin;
    vm.signup = signup;

    function redirectToLogin() {
      $state.go('login');
    }
  
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
  }
})();