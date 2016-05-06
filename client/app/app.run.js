(function () {
  'use strict';

  angular
    .module('baby')
    .run(run);

  function run($http, $state, auth, $rootScope, $localStorage) {
    // if (auth.current().token) {
    //   // appends authentication information to each http request
    //   $http.defaults.headers.common.username = auth.current().username;
    //   $http.defaults.headers.common.token = auth.current().token;

    //   $state.go('dashboard');
    // } else {
    //   $state.go('landing');
    // }
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      var requiredLogin = toState.data.requiredLogin;

      if (requiredLogin && !$localStorage.token) {
        event.preventDefault();
        $state.go('login');
      }
    });
  }
})();
