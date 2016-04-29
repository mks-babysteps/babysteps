(function () {
  'use strict';

  angular
    .module('baby')
    .run(run);

  function run($state) {
    // // set headers & load dashboard if logged in
    // if (Auth.current().token) {
    //   // append authentication information to each HTTP request
    //   $http.defaults.headers.common['username'] = Auth.current().username
    //   $http.defaults.headers.common['token'] = Auth.current().token

      // // go to dashboard
      // $state.go('dashboard')
    // }
    $state.go('landing');
  }

})();
