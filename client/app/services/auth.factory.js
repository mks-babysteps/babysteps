(function () {
  'use strict';

  angular
    .module('baby')
    .factory('auth', auth);

  function auth($http, $state, $localStorage) {
    return {
      current: current,
      signup: signup,
      logout: logout,
      signin: signin
    };

  function current() {
    return {
      username: $localStorage.username,
      token: $localStorage.token
    };
  }

  function signup(userObj) {
    return $http.post('/signup', userObj)
      .success(function(resp, data) {
        if (resp.success) {
          $localStorage.username = userObj.username;
          $localStorage.token = data.token;
          $http.defaults.headers.common.username = userObj.username;
          $http.defaults.headers.common.token = data.token;
          $state.go('dashboard');
        }
      });
  }

  function signin(username, password) {
    return $http.get('/login', {
      headers: {
        username: username,
        password: password
      }
    });
  }

  function logout() {
    $localStorage.$reset();
    $state.go('landing');
  }
}
})();
