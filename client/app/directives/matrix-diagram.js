(function() {
  angular.module('baby')
    .directive('matrixDiagram', matrixDiagram);

    function matrixDiagram($window) {
      function link(scope, elem, attrs, controller) {

      }

      return {
        restrict: 'EA',
        scope: {},
        controller: 'MilestoneCtrl',
        bindToController: {
          nodes: '=',
          activity: '=',
          categories: '='
        },
        link: link
      }
    }
})();
