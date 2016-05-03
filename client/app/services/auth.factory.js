(function () {
  'use strict';

  angular
    .module('baby')
    .factory('auth', auth);

  function auth($http, $state, $rootScope, $window) {
    return {
      signup: signup,
      logout: logout,
      saveToken: saveToken,
      getToken: getToken,
      isAuthed: isAuthed,
      attachToken: attachToken,
      parseJwt: parseJwt
    };

  function signup(userObj) {
    return $http.post('/signup', userObj)
      .success(function(resp) {
        if (resp.data.token && resp.success) {
          saveToken(resp.data.token);
          $state.go('dashboard');
          $rootScope.$broadcast('loggedIn');
        }
          return resp;
      });
  }

  function logout() {
    $window.localStorage.removeItem('jwtToken');
    delete $window.localStorage['jwtToken'];
    $rootScope.$broadcast('loggedOut');
  }

  function saveToken(token) {
    $window.localStorage['jwtToken'] = token;
  }

  function getToken() {
    return $window.localStorage['jwtToken'];
  }

  function isAuthed() {
    var token = getToken();
    if (token) {
      var params = parseJwt(token);
      return Math.round(new Date().getTime() / 1000) <= params.exp;
    } else {
      console.error('no token found!');
      return false;
    }
  }

  // attach token to request headers & return modified request
  // this function is used in ui-router and other services when necessary.
  function attachToken(request) {
    var token = getToken();
    if (token) {
      request.headers = request.headers || {};
      request.headers['x-access-token'] = token;
    }
    return request;
  }

  // parse the token (decode) to detect the expiration. (used in isAuthed())
  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  }
  
})();

    //   signIn: function (username, password) {
    //     $http.post('/landing/login', {
    //       user: {
    //         username: username,
    //         password: password
    //       }
    //     }).success(function (data) {
    //       $localStorage.username = username;
    //       $localStorage.token = data.token;
    //       $http.defaults.headers.common.username = username;
    //       $http.defaults.headers.common.token = data.token;
    //       $state.go('tab.classrooms');
    //     });
    //   },

    //   signOut: function () {
    //     $localStorage.$reset();
    //     $state.go('landing');
    //   }
    // };