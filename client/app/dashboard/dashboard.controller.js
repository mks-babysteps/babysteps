(function(){
  'use strict';

  angular
    .module('baby.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);
    function DashboardCtrl($state, $uibModal, dashboard, auth){
      var vm = this;

      vm.displayChildren = displayChildren;
      vm.displayUsers = displayUsers;
      vm.removeChild = removeChild;
      vm.username = auth.current().username;

      function displayChildren(){
        dashboard.getUser()
          .then(function(data){
            var userObj = data.data[0];
            // console.log('data', data);
            vm.children = userObj.children;
             // console.log('chillun', vm.children);
          });
      }

      vm.open = function() {
        vm.modalInstance = $uibModal.open({
          templateUrl: 'app/child/child.html',
          controller: 'ChildCtrl as child'
        });
      };

      function displayUsers(){
        dashboard.getUser()
          .then(function(data){
            var userObj = data.data;
            vm.users = userObj;
          });
      }

      function removeChild(childFirstName){
        // console.log('on click this is passed into removeChild', childFirstName);
        dashboard.removeThisChild(childFirstName)
          .then(function(){
            // console.log('refreshed');
            $state.reload('dashboard');
          });
      }

    }

})();