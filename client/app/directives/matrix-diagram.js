(function() {
  angular.module('baby')
    .directive('matrixDiagram', matrixDiagram);

    function matrixDiagram($window) {
      function link(scope, elem, attrs, controller) {
        var d3 = $window.d3;

        // dimensions
        var margin = {top: 80, right: 0, bottom: 10, left: 80}
        var width = 720;
        var height = 300;

        // scales
        var x = d3.scale.ordinal().rangeBands([0, width]); // text, cells
        var z = d3.scale.linear().domain([0, 4]).clamp(true); // opacity
        var c = d3.scale.category10().domain(d3.range(10)); // coloring (143)

        // set up the svg
        var svg = d3.select('body')
          .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .style('margin-left', -margin.left + 'px')
          .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        // create rectangle
        svg.append("rect")
          .attr("class", "background")
          .attr("width", width)
          .attr("height", height);

        var row = svg.selectAll(".row")
          .data(matrix)
        .enter().append("g")
          .attr("class", "row")
          .attr("transform", function(d, i) { return "translate(0," + x(i) + ")"; })
          .each(row);



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
