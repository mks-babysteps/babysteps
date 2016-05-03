(function () {
  'use strict';

  angular
    .module('baby')
    .factory('auth', auth);

  // $localStorage
  function auth($http, $state, localStorageService) {
    return {
      signup: signup,
      signIn: signIn
    };

    function signup(userObj) {
      return $http.post('/signup', userObj)
        .success(function(resp) {
          if (resp.success) {
            $state.go('dashboard');
          }
          // $localStorage.username = username;
          // $localStorage.token = data.token;
          // $http.defaults.headers.common.username = username;
          // $http.defaults.headers.common.token = data.token;
        });
    }

    function signIn(username, password) {
      return $http.get('/login', {
        headers: {
          username: username,
          password: password
        }
      });
    }
  }
})();
