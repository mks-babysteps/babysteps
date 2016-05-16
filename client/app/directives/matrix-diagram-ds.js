(function() {
  angular.module('baby')
    .directive('matrixDiagram', matrixDiagram);

    function matrixDiagram($window) {
      function linker(scope) {
        scope.$watch('data', function(newVal, oldVal) {
            if(newVal !== oldVal) {
              var d3 = $window.d3;
              var condition = newVal;
              var matrix = [];
              var nodes = condition.nodes;
              var numRows = nodes.length;
              var n = condition.months.length + 1;

              // fill opacity determines actual coloring
              var row1 = function(row) {
                d3.select(this).selectAll('.cell')
                    .data(row.filter(function(d) {
                      return d.z;
                    }))
                  .enter().append('rect')
                    .attr('class', 'cell')
                    .attr('x', function(d) {
                      return y(d.x);
                    })
                    .attr('width', cw)
                    .attr('height', x.rangeBand())
                    .style('fill-opacity', function(d) { return z(d.z); })
                    .on('mouseover', mouseover)
                    .on('mouseout', mouseout);
              };

              var mouseover = function(p) {
                d3.selectAll('.row text').classed('active', function(d, i) {
                  return i === p.y;
                });
                d3.selectAll('.column text').classed('active', function(d, i) {
                  return i === p.x - 1;
                });
              };

              var mouseout = function() {
                d3.selectAll('text').classed('active', false);
              };

              var order = function(value) {
                x.domain(orders[value]);
                var t = svg.transition().duration(1500);
                t.selectAll('.row')
                    .delay(function(d, i) { return x(i) * 4; })
                    .attr('transform', function(d, i) { return 'translate(0,' + x(i) + ')'; });
              };

              var margin = {top: 40, right: 120, bottom: 10, left: 123},
                  width = 780,
                  height = 500;

              var x = d3.scale.ordinal().rangeBands([0, height]),
                  y = d3.scale.linear().domain([1, 24]).range([0, width-31.7]),
                  // y = d3.scale.ordinal().rangeBands([0, height]),
                  z = d3.scale.linear().domain([0, 4]).clamp(true),
                  cw = y(1) - y(0);

              var svg = d3.select('#diagram').append('svg')
                  .attr('width', width + margin.left + margin.right)
                  .attr('height', height + margin.top + margin.bottom)
                  .style('margin-left', margin.left + 'px')
                .style('margin-top', margin.top + 'px')
                .append('g')
                  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

              svg.append('text')
                .text('month')
                .style('text-anchor', 'middle')
                .attr('x', width / 2)
                .attr('transform', 'translate(0,' + -30 + ')')
                .attr('class','axis-label');

              svg.append('text')
                .text('')
                .style('text-anchor', 'middle')
                .attr('y', (height / 2))
                // .attr('dx', ')
                // .attr('transform', 'rotate(-90)')
                .attr('transform', 'translate('+ -300 + ',' + 220 +') rotate(-90)')
                .attr('class','axis-label');



              // Compute index per node.
              // i represents the index number for each node
              // j represents the month
              // z represents the cell value
              nodes.forEach(function(node, i) {
                node.count = 0;
                matrix[i] = d3.range(n).map(function(j) {
                  return {x: j, y: i, z: 0};
                });
              });

              condition.cell.forEach(function(link) {
                matrix[link.milestone][link.month].z += link.value;
                nodes[link.milestone].count += link.value;
              });

              // Precompute the orders.
              var orders = {
                name: d3.range(numRows).sort(function(a, b) {
                 return d3.ascending(nodes[a].name, nodes[b].name);
                }),
                count: d3.range(numRows).sort(function(a, b) {
                  return nodes[b].count - nodes[a].count;
                }),
                smallRange: d3.range(numRows).sort(function(a, b) {
                  return nodes[a].count - nodes[b].count;
                }),
                earliest: d3.range(numRows).sort(function(a, b) {
                  return nodes[a].begin - nodes[b].begin;
                }),
                latest: d3.range(numRows).sort(function(a, b) {
                  return nodes[b].begin - nodes[a].begin;
                })
              };

              // The default sort order.
              x.domain(orders.name);

              svg.append('rect')
                  .attr('class', 'background')
                  .attr('width', width)
                  .attr('height', height);

              var row = svg.selectAll('.row')
                  .data(matrix)
                .enter().append('g')
                  .attr('class', 'row')
                  .attr('transform', function(d, i) {
                    return 'translate(0,' + x(i) + ')';
                  })
                  .each(row1);

              row.append('line')
                  .attr('id', 'diagram')
                  .attr('x2', width);

              row.append('text')
                  .attr('x', -6)
                  .attr('y', x.rangeBand() / 5)
                  .attr('dy', '1.8em')
                  .attr('text-anchor', 'end')
                  .text(function(d, i) { return nodes[i].name; });

              // translate decides the space between vertical lines
              var column = svg.selectAll('.column')
                  .data(condition.months)
                .enter().append('g')
                  .attr('class', 'column')
                  .attr('transform', function(d) {
                    return 'translate(' + y(d) + ')rotate(-90)';
                  });

              column.append('line')
                  .attr('id', 'diagram')
                  .attr('x1', -500);

              column.append('text')
                  .attr('transform', 'rotate(90)')
                  .attr('x', 11)
                  .attr('y', x.rangeBand() / 5)
                  .attr('dy', '-1.5em')
                  .attr('text-anchor', 'start')
                  .text(function(d) { return d; });

              d3.select('#order').on('change', function() {
                clearTimeout(timeout);
                order(this.value);
              });


              var timeout = setTimeout(function() {
                order('earliest');
                d3.select('#order').property('selectedIndex', 3).node();
              }, 750);

            }
        }); // end of scope.$watcher
      }

      return {
        restrict: 'EA',
        scope: {
          data: '='
        },
        controller: function(){},
        link: linker
      };
    }
})();
