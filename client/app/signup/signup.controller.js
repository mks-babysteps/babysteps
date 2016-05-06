(function () {
  'use strict';

  angular
    .module('baby.signup')
    .controller('SignupCtrl', SignupCtrl);

  function SignupCtrl($state, auth) {
    // initialize
    var vm = this;

    // variables
    vm.error = false;
    vm.message = '';

    // functions
    vm.signup = signup;

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