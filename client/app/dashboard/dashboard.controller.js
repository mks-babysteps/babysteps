(function(){
  'use strict';

  angular
    .module('baby.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

    function DashboardCtrl($scope, $state, $uibModal, dashboard, auth, filepickerService, $window) {
      // initialize
      var vm = this;

      // variables
      vm.username = auth.current().username;
      vm.files = JSON.parse($window.localStorage.getItem('files') || '[]');
      vm.pickFile = pickFile;
      //vm.onSuccess = onSuccess;

      // functions
      vm.displayChildren = displayChildren;
      vm.displayUsers = displayUsers;
      vm.removeChild = removeChild;
      vm.milestonePage = milestonePage;
      vm.open = open;
      vm.edit = edit;
      vm.vaccinationsPage = vaccinationsPage;
      vm.eventsPage = eventsPage;
      vm.pickFile = pickFile;

      function displayChildren() {
        dashboard.getUser()
          .then(function(data){
            console.log('displaying children data: ', data)
            var userObj = data.data[0];
            vm.children = userObj.children;
          });

      }

      function edit(firstName, lastName) {
        vm.modalInstance = $uibModal.open({
          templateUrl: 'app/editChild/editChild.html',
          controller: 'EditChildCtrl as myChild',
          resolve: {
            child: function() {
              return [firstName, lastName];
            }
          }
        });
      }

      function open() {
        vm.modalInstance = $uibModal.open({
          templateUrl: 'app/child/child.html',
          controller: 'ChildCtrl as child'
        });
      }

      function displayUsers() {
        dashboard.getUser()
          .then(function(data){
            // console.log('displaying user data: ', data)
            var userObj = data.data;
            vm.users = userObj;
            //console.log('vm.users', vm.users[0].imageUrl);
            vm.imageUrl = vm.users[0].imageUrl;

          });
      }

      function removeChild(childFirstName) {
        dashboard.removeThisChild(childFirstName)
          .then(function(){
            $state.reload('dashboard');
          });
      }

      function milestonePage(condition) {
        // dashboard.goMilestone(condition);
        $state.go('milestone', {condition: condition});
      }

      function vaccinationsPage(condition){
        console.log('condition', condition);
        dashboard.goVaccinations(condition);
      }

      function eventsPage() {
        dashboard.goEvents();
      }

      function uploadFile() {
        var file = vm.myFile;
        // console.log('file is ');
        // console.dir(file);
        var uploadUrl = '/fileUpload';
        fileUpload.uploadFileToUrl(file, uploadUrl);
      }

      function pickFile() {
        filepickerService.pick(
            {mimetype: 'image/*'},
            function(Blob) {
              console.log(Blob);
              dashboard.imageUrl(Blob)
              .then(function(data) {
                vm.imageUrl = data.data
                $state.reload();
              })
            }
        )
      };
    }
})();
