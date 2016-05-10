(function () {
  'use strict';

  angular
    .module('baby')
    .run(run);

  function run($http, $state, auth, $rootScope, $localStorage) {
    if (auth.current().token) {
      $http.defaults.headers.common.username = auth.current().username;
      $http.defaults.headers.common.token = auth.current().token;
    }
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      var requiredLogin = toState.data.requiredLogin;

      if (requiredLogin && !$localStorage.token) {
        event.preventDefault();
        $state.go('login');
      }
    });
  }
})();
