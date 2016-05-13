(function() {
  angular.module('baby')
    .directive('matrixDiagram', matrixDiagram);

    function matrixDiagram($window) {
      function link(scope, elem, attrs, controller) {
        var d3 = $window.d3;
        console.log('CONTROLLER: ', controller.activity);
      var condition = {
                        "nodes":
                          [
                            { "name": "can use spoon", 'begin': 13, 'end': 24},
                            { "name": "drinks unassisted", 'begin': 12, 'end': 24},
                            { "name": "finger feeds", 'begin': 10, 'end': 24},
                            { "name": "responsive smile", 'begin': 2, 'end': 5},
                            { "name": "two word phrases", 'begin': 23, 'end': 24},
                            { "name": "first words", 'begin': 12, 'end': 24},
                            { "name": "walks alone", 'begin': 12, 'end': 24},
                            { "name": "stands", 'begin': 12, 'end': 24},
                            { "name": "crawls", 'begin': 8, 'end': 22},
                            { "name": "able to sit up", 'begin': 6, 'end': 24}
                          ],
                        "cell":
                          [
                            { "milestone":  0,  "month":  13,  "value":  1 },
                            { "milestone":  0,  "month":  14,  "value":  1 },
                            { "milestone":  0,  "month":  15,  "value":  1 },
                            { "milestone":  0,  "month":  16,  "value":  1 },
                            { "milestone":  0,  "month":  17,  "value":  1 },
                            { "milestone":  0,  "month":  18,  "value":  1 },
                            { "milestone":  0,  "month":  19,  "value":  1 },
                            { "milestone":  0,  "month":  20,  "value":  1 },
                            { "milestone":  0,  "month":  21,  "value":  1 },
                            { "milestone":  0,  "month":  22,  "value":  1 },
                            { "milestone":  0,  "month":  23,  "value":  1 },
                            { "milestone":  0,  "month":  24,  "value":  1 },
                            { "milestone":  1,  "month":  12,  "value":  1 },
                            { "milestone":  1,  "month":  13,  "value":  1 },
                            { "milestone":  1,  "month":  14,  "value":  1 },
                            { "milestone":  1,  "month":  15,  "value":  1 },
                            { "milestone":  1,  "month":  16,  "value":  1 },
                            { "milestone":  1,  "month":  17,  "value":  1 },
                            { "milestone":  1,  "month":  18,  "value":  1 },
                            { "milestone":  1,  "month":  19,  "value":  1 },
                            { "milestone":  1,  "month":  20,  "value":  1 },
                            { "milestone":  1,  "month":  21,  "value":  1 },
                            { "milestone":  1,  "month":  22,  "value":  1 },
                            { "milestone":  1,  "month":  23,  "value":  1 },
                            { "milestone":  1,  "month":  24,  "value":  1 },
                            { "milestone":  2,  "month":  10,  "value":  1 },
                            { "milestone":  2,  "month":  11,  "value":  1 },
                            { "milestone":  2,  "month":  12,  "value":  1 },
                            { "milestone":  2,  "month":  13,  "value":  1 },
                            { "milestone":  2,  "month":  14,  "value":  1 },
                            { "milestone":  2,  "month":  15,  "value":  1 },
                            { "milestone":  2,  "month":  16,  "value":  1 },
                            { "milestone":  2,  "month":  17,  "value":  1 },
                            { "milestone":  2,  "month":  18,  "value":  1 },
                            { "milestone":  2,  "month":  19,  "value":  1 },
                            { "milestone":  2,  "month":  20,  "value":  1 },
                            { "milestone":  2,  "month":  21,  "value":  1 },
                            { "milestone":  2,  "month":  22,  "value":  1 },
                            { "milestone":  2,  "month":  23,  "value":  1 },
                            { "milestone":  2,  "month":  24,  "value":  1 },
                            { "milestone":  3,  "month":  2,  "value":  1 },
                            { "milestone":  3,  "month":  3,  "value":  1 },
                            { "milestone":  3,  "month":  4,  "value":  1 },
                            { "milestone":  3,  "month":  5,  "value":  1 },
                            { "milestone":  4,  "month":  23,  "value":  1 },
                            { "milestone":  4,  "month":  24,  "value":  1 },
                            { "milestone":  5,  "month":  12,  "value":  1 },
                            { "milestone":  5,  "month":  13,  "value":  1 },
                            { "milestone":  5,  "month":  14,  "value":  1 },
                            { "milestone":  5,  "month":  15,  "value":  1 },
                            { "milestone":  5,  "month":  16,  "value":  1 },
                            { "milestone":  5,  "month":  17,  "value":  1 },
                            { "milestone":  5,  "month":  18,  "value":  1 },
                            { "milestone":  5,  "month":  19,  "value":  1 },
                            { "milestone":  5,  "month":  20,  "value":  1 },
                            { "milestone":  5,  "month":  21,  "value":  1 },
                            { "milestone":  5,  "month":  22,  "value":  1 },
                            { "milestone":  5,  "month":  23,  "value":  1 },
                            { "milestone":  5,  "month":  24,  "value":  1 },
                            { "milestone":  6,  "month":  12,  "value":  1 },
                            { "milestone":  6,  "month":  13,  "value":  1 },
                            { "milestone":  6,  "month":  14,  "value":  1 },
                            { "milestone":  6,  "month":  15,  "value":  1 },
                            { "milestone":  6,  "month":  16,  "value":  1 },
                            { "milestone":  6,  "month":  17,  "value":  1 },
                            { "milestone":  6,  "month":  18,  "value":  1 },
                            { "milestone":  6,  "month":  19,  "value":  1 },
                            { "milestone":  6,  "month":  20,  "value":  1 },
                            { "milestone":  6,  "month":  21,  "value":  1 },
                            { "milestone":  6,  "month":  22,  "value":  1 },
                            { "milestone":  6,  "month":  23,  "value":  1 },
                            { "milestone":  6,  "month":  24,  "value":  1 },
                            { "milestone":  7,  "month":  12,  "value":  1 },
                            { "milestone":  7,  "month":  13,  "value":  1 },
                            { "milestone":  7,  "month":  14,  "value":  1 },
                            { "milestone":  7,  "month":  15,  "value":  1 },
                            { "milestone":  7,  "month":  16,  "value":  1 },
                            { "milestone":  7,  "month":  17,  "value":  1 },
                            { "milestone":  7,  "month":  18,  "value":  1 },
                            { "milestone":  7,  "month":  19,  "value":  1 },
                            { "milestone":  7,  "month":  20,  "value":  1 },
                            { "milestone":  7,  "month":  21,  "value":  1 },
                            { "milestone":  7,  "month":  22,  "value":  1 },
                            { "milestone":  7,  "month":  23,  "value":  1 },
                            { "milestone":  7,  "month":  24,  "value":  1 },
                            { "milestone":  8,  "month":  8,  "value":  1 },
                            { "milestone":  8,  "month":  9,  "value":  1 },
                            { "milestone":  8,  "month":  10,  "value":  1 },
                            { "milestone":  8,  "month":  11,  "value":  1 },
                            { "milestone":  8,  "month":  12,  "value":  1 },
                            { "milestone":  8,  "month":  13,  "value":  1 },
                            { "milestone":  8,  "month":  14,  "value":  1 },
                            { "milestone":  8,  "month":  15,  "value":  1 },
                            { "milestone":  8,  "month":  16,  "value":  1 },
                            { "milestone":  8,  "month":  17,  "value":  1 },
                            { "milestone":  8,  "month":  18,  "value":  1 },
                            { "milestone":  8,  "month":  19,  "value":  1 },
                            { "milestone":  8,  "month":  20,  "value":  1 },
                            { "milestone":  8,  "month":  21,  "value":  1 },
                            { "milestone":  8,  "month":  22,  "value":  1 },
                            { "milestone":  8,  "month":  23,  "value":  1 },
                            { "milestone":  8,  "month":  24,  "value":  1 },
                            { "milestone":  9,  "month":  8,  "value":  1 },
                            { "milestone":  9,  "month":  9,  "value":  1 },
                            { "milestone":  9,  "month":  10,  "value":  1 },
                            { "milestone":  9,  "month":  11,  "value":  1 },
                            { "milestone":  9,  "month":  12,  "value":  1 },
                            { "milestone":  9,  "month":  13,  "value":  1 },
                            { "milestone":  9,  "month":  14,  "value":  1 },
                            { "milestone":  9,  "month":  15,  "value":  1 },
                            { "milestone":  9,  "month":  16,  "value":  1 },
                            { "milestone":  9,  "month":  17,  "value":  1 },
                            { "milestone":  9,  "month":  18,  "value":  1 },
                            { "milestone":  9,  "month":  19,  "value":  1 },
                            { "milestone":  9,  "month":  20,  "value":  1 },
                            { "milestone":  9,  "month":  21,  "value":  1 },
                            { "milestone":  9,  "month":  22,  "value":  1 },
                            { "milestone":  9,  "month":  23,  "value":  1 },
                            { "milestone":  9,  "month":  24,  "value":  1 }
                          ],
                        "months": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
                       }

      var margin = {top: 50, right: 120, bottom: 10, left: 120},
          width = 780,
          height = 500;

      var x = d3.scale.ordinal().rangeBands([0, height]),
          y = d3.scale.linear().domain([1, 24]).range([0, width-31.7]),
          // y = d3.scale.ordinal().rangeBands([0, height]),
          z = d3.scale.linear().domain([0, 4]).clamp(true),
          c = d3.scale.category10().domain(d3.range(10));
          cw = y(1) - y(0);
      var svg = d3.select(".diagram").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .style("margin-left", margin.left + "px")
        .style("margin-top", margin.top + "px")
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      svg.append("text")
        .text("Month")
        .style("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("transform", "translate(0," + -22 + ")")
        .attr("class","axis-label");

      svg.append("text")
        .text("Milestones")
        .style("text-anchor", "middle")
        .attr("y", (height / 2))
        // .attr("dx", "")
        // .attr("transform", "rotate(-90)")
        .attr("transform", "translate("+ -340 + "," + 220 +") rotate(-90)")
        .attr("class","axis-label");

        var matrix = [],
            nodes = condition.nodes,
            numRows = nodes.length;
            n = condition.months.length + 1;
        console.log('BEFORE MATRIX: ', matrix);
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

        console.log('AFTER MATRIX: ', matrix);

        // Convert cell to matrix; count character occurrences.
        condition.cell.forEach(function(link) {
          matrix[link.milestone][link.month].z += link.value;
          nodes[link.milestone].count += link.value;
        });

        // Precompute the orders.
        var orders = {
          name: d3.range(numRows).sort(function(a, b) { return d3.ascending(nodes[a].name, nodes[b].name); }),
          count: d3.range(numRows).sort(function(a, b) { return nodes[b].count - nodes[a].count; }),
          smallRange: d3.range(numRows).sort(function(a, b) { return nodes[a].count - nodes[b].count; }),
          earliest: d3.range(numRows).sort(function(a, b) { return nodes[a].begin - nodes[b].begin; }),
          latest: d3.range(numRows).sort(function(a, b) { return nodes[b].begin - nodes[a].begin; })
        };

        // The default sort order.
        x.domain(orders.name);

        svg.append("rect")
            .attr("class", "background")
            .attr("width", width)
            .attr("height", height);

        var row = svg.selectAll(".row")
            .data(matrix)
          .enter().append("g")
            .attr("class", "row")
            .attr("transform", function(d, i) {
              return "translate(0," + x(i) + ")";
            })
            .each(row);

        row.append("line")
            .attr("class", "diagram")
            .attr("x2", width+20);

        row.append("text")
            .attr("x", -6)
            .attr("y", x.rangeBand() / 5)
            .attr("dy", "1.8em")
            .attr("text-anchor", "end")
            .text(function(d, i) { return nodes[i].name; });

        // translate decides the space between vertical lines
        var column = svg.selectAll(".column")
            .data(condition.months)
          .enter().append("g")
            .attr("class", "column")
            .attr("transform", function(d, i) {
              return "translate(" + y(d) + ")rotate(-90)";
            });

        column.append("line")
            .attr("class", "diagram")
            .attr("x1", -width);

        column.append("text")
            .attr('transform', function(d, i) {
              return "rotate(90)";
            })
            .attr("x", 11)
            .attr("y", x.rangeBand() / 5)
            .attr("dy", "-1.5em")
            .attr("text-anchor", "start")
            .text(function(d, i) { return d; });

        // fill opacity determines actual coloring
        function row(row) {
          var cell = d3.select(this).selectAll(".cell")
              .data(row.filter(function(d) {
                return d.z;
              }))
            .enter().append("rect")
              .attr("class", "cell")
              .attr("x", function(d) {
                return y(d.x);
              })
              .attr("width", cw)
              .attr("height", x.rangeBand())
              .style("fill-opacity", function(d) { return z(d.z); })
              .on("mouseover", mouseover)
              .on("mouseout", mouseout);
        }

        function mouseover(p) {
          d3.selectAll(".row text").classed("active", function(d, i) {
            return i == p.y;
          });
          d3.selectAll(".column text").classed("active", function(d, i) { return i == p.x - 1; });
        }

        function mouseout() {
          d3.selectAll("text").classed("active", false);
        }

        d3.select("#order").on("change", function() {
          clearTimeout(timeout);
          order(this.value);
        });

        function order(value) {
          x.domain(orders[value]);
          var t = svg.transition().duration(2500);
          t.selectAll(".row")
              .delay(function(d, i) { return x(i) * 4; })
              .attr("transform", function(d, i) { return "translate(0," + x(i) + ")"; })
        }

        var timeout = setTimeout(function() {
          order("earliest");
          d3.select("#order").property("selectedIndex", 3).node();
        }, 750);

      }

      return {
        restrict: 'EA',
        scope: {},
        controller: 'MilestoneCtrl',
        controllerAs: 'vm',
        link: link
      };
    }
})();
