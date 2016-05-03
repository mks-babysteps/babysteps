(function(){
  'use strict';

  angular
    .module('baby.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);
    function DashboardCtrl($state, dashboard){

      var vm = this;

      vm.displayUsers = displayUsers;

      function displayUsers(){
        dashboard.getUser()
          .then(function(data){
            var userObj = data.data[0];
            console.log('data', data);
            console.log('chillun', userObj.children);
            vm.children = userObj.children;
          });
      }

    }

})();