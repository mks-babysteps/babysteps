(function(){
  'use strict';

  angular
    .module('baby.dashboard')
    .controller('dashboardController', function($scope){
        //need to create a factory to fetch Children data
        $scope.searchChild = function(){
          console.log('in searchChild');
        };
    });
})();
