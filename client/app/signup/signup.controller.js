(function () {
  'use strict';

  angular
    .module('baby.signup')
<<<<<<< HEAD
    .controller('SignupCtrl', SignupCtrl);
=======
    .controller('SignupCtrl', SignupController);
>>>>>>> 08e6d195363d11aeeda697cef73f41c797f5ba43

  function SignupCtrl (Auth, $state) {
    // initialization
    var vm = this;
    // activate();

    // // variables
    // vm.username = username;

    // // functions
    // vm.create = signup;

    // // implementation details
    // function signup () {
    // };
  };
})();


// vm.signup = function(username, email, phonenumber, firstname, lastname, password) {
//     var userObj = {
//       username: username,
//       email: email,
//       firstname: firstname,
//       lastname: lastname,
//       password: password
//     }
//     console.log(userObj);

//     Auth.signup(userObj)
//       .then(function(resp) {
//         if (resp.data.success) {
//           $state.go('tab.profile');
//           $rootScope.$broadcast('loggedIn');
//         } else {
//           vm.error = true;
//           vm.message = resp.data.message;
//         }
//       });
//   }
// });
