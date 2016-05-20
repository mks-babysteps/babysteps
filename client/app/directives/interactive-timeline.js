(function() {
  angular.module('baby')
  .directive('timeLine', timeLine);

  function timeLine($window) {
    function link(scope, elem, attrs, vm) {
      // set up
      var d3 = $window.d3;
      var margin = [20, 15, 15, 120]; // top right bottom left
      var width = 960 - margin[1] - margin[3];
      var height = 500 - margin[0] - margin[2];
      var miniHeight = vm.laneLength * 12 + 50;
      var mainHeight = height - miniHeight - 50;

      // scales
      var x = d3.scale.linear()
        .domain([vm.timeBegin, vm.timeEnd])
        .range([0, width]);
      var x1 = d3.scale.linear()
        .range([0, width]);
      var y1 = d3.scale.linear()
        .domain([0, vm.laneLength])
        .range([0, mainHeight]);
      var y2 = d3.scale.linear()
        .domain([0, vm.laneLength])
        .range([0, miniHeight]);


      var chart = d3.select('body')
        .append('svg')
        .attr('width', width + margin[1] + margin[3])
        .attr('height', height + margin[0] + margin[2])
        .attr('class', 'chart');

      chart.append('defs').append('clipPath')
            .attr('id', 'clip')
            .append('rect')
            .attr('width', width)
            .attr('height', mainHeight);

      var main = chart.append('g')
        .attr('transform', 'translate(' + margin[3] + ',' + margin[0] + ')')
        .attr('width', width)
        .attr('height', mainHeight)
        .attr('class', 'main');

      var mini = chart.append('g')
        .attr('transform', 'translate(' + margin[3] + ',' + (mainHeight + margin[0]) + ')')
        .attr('width', width)
        .attr('height', miniHeight)
        .attr('class', 'mini');

      // main lanes and text
      main.append('g').selectAll('.laneLines')
        .data(vm.timelineItems)
        .enter().append('line')
        .attr('x1', margin[1])
        .attr('y1', function(d) {return y1(d.lane);})
        .attr('x2', width)
        .attr('y2', function(d) {return y1(d.lane);})
        .attr('stroke', 'lightgray');

      main.append('g').selectAll('.laneText')
        .data(vm.lanes)
        .enter().append('text')
        .text(function(d) {return d;})
        .attr('x', -margin[1])
        .attr('y', function(d, i) {return y1(i + 0.5);})
        .attr('dy', '0.5ex')
        .attr('text-anchor', 'end')
        .attr('class', 'laneText');

      // mini lanes and texts
      mini.append('g').selectAll('.laneLines')
        .data(vm.timelineItems)
        .enter().append('line')
        .attr('x1', margin[1])
        .attr('y1', function(d) {return y2(d.lane);})
        .attr('x2', width)
        .attr('y2', function(d) {return y2(d.lane);})
        .attr('stroke', 'lightgray');

      mini.append('g').selectAll('.laneText')
        .data(vm.lanes)
        .enter().append('text')
        .text(function(d) {return d;})
        .attr('x', -margin[1])
        .attr('y', function(d, i) {return y2(i + 0.5);})
        .attr('dy', '0.5ex')
        .attr('text-anchor', 'end')
        .attr('class', 'laneText');

      var itemRects = main.append('g')
        .attr('clip-path', 'url(#clip)');

      // mini item rects
      mini.append('g').selectAll('miniItems')
        .data(vm.timelineItems)
        .enter().append('rect')
        .attr('class', function(d) {return 'miniItem' + d.lane;})
        .attr('x', function(d) {return x(d.start);})
        .attr('y', function(d) {return y2(d.lane + 0.5) - 5;})
        .attr('width', function(d) {return x(d.end - d.start);})
        .attr('height', 10);

      // mini labels
      mini.append('g').selectAll('.miniLabels')
        .data(vm.timelineItems)
        .enter().append('text')
        .text(function(d) {return d.id;})
        .attr('x', function(d) {return x(d.start);})
        .attr('y', function(d) {return y2(d.lane + 0.5);})
        .attr('dy', '50ex');

      // brush
      var brush = d3.svg.brush()
        .x(x)
        .on('brush', display);

      mini.append('g')
        .attr('class', 'x brush')
        .call(brush)
        .selectAll('rect')
        .attr('y', 1)
        .attr('height', miniHeight - 1);

      display();

      function display() {
        var rects, labels,
          minExtent = brush.extent()[0],
          maxExtent = brush.extent()[1],
          visItems = vm.timelineItems.filter(function(d) {
            return d.start < maxExtent && d.end > minExtent;
          });

        mini.select('.brush')
          .call(brush.extent([minExtent, maxExtent]));

        x1.domain([minExtent, maxExtent]);

        rects = itemRects.selectAll('rect')
          .data(visItems, function(d) { return d.id; })
          .attr('x', function(d) {
            return x1(d.start);
          })
          .attr('width', function(d) {
            return x1(d.end) - x1(d.start);
          });

        rects.enter().append('rect')
          .attr('class', function(d) {return 'miniItem' + d.lane;})
          .attr('x', function(d) {return x1(d.start);})
          .attr('y', function(d) {return y1(d.lane) + 10;})
          .attr('width', function(d) {return x1(d.end) - x1(d.start);})
          .attr('height', function() {return 0.8 * y1(1);});

        rects.exit().remove();

        //update the item labels
        labels = itemRects.selectAll('text')
          .data(visItems, function(d) { return d.id; })
          .attr('x', function(d) {return x1(Math.max(d.start, minExtent) + 2);});

        labels.enter().append('text')
          .text(function(d) {return d.id;})
          .attr('x', function(d) {return x1(Math.max(d.start, minExtent));})
          .attr('y', function(d) {return y1(d.lane + 0.5);})
          .attr('text-anchor', 'start');

        labels.exit().remove();
      }

    }

    return {
      restrict: 'EA',
      scope: {},
      controller: 'VisualCtrl',
      controllerAs: 'vm',
      bindToController: {
        timelineItems: '=',
        lanes: '=',
        laneLength: '='
      },
      link: link
    };

  }
})();
