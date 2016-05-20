(function () {
  'use strict';

  angular
    .module('baby')
    .factory('auth', auth);

  function auth($http, $state, $localStorage, $rootScope) {
    var service = {
      current: current,
      signup: signup,
      logout: logout,
      signin: signin,
      checkAuth: checkAuth
    };
    return service;

    function current() {
      return {
        username: $localStorage.username,
        token: $localStorage.token
      };
    }

    function signup(userObj) {
      return $http.post('/signup', userObj)
        .success(function(resp) {
          if (resp.success) {
            $localStorage.username = userObj.username;
            $localStorage.token = resp.token;
            $http.defaults.headers.common.username = userObj.username;
            $http.defaults.headers.common.token = resp.token;
            $state.go('dashboard');
            $rootScope.$broadcast('loggedIn');
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

    function checkUser(token) {
      return $http.post('/auth', {
        token: token
      }).then(function(data) {
        return data.data.success;
      });
    }

    function checkAuth() {
      var token = $localStorage.token;
      if (token) {
        checkUser(token).then(function(bool) {
          return bool;
        });
      } else {
        return false;
      }
    }

  }
})();
