(function() {
  angular.module('baby')
    .directive('matrixDiagram', matrixDiagram);

    function matrixDiagram($window) {
      console.log('running matrix');
      function link(scope, elem, attrs, controller) {
        var d3 = $window.d3;

        // // dimensions
        // var margin = {top: 80, right: 0, bottom: 10, left: 80}
        // var width = 720;
        // var height = 300;

        // // scales
        // var x = d3.scale.ordinal().rangeBands([0, width]); // text, cells
        // var z = d3.scale.linear().domain([0, 4]).clamp(true); // opacity
        // var c = d3.scale.category10().domain(d3.range(10)); // coloring (143)

        // // set up the svg
        // var svg = d3.select('body')
        //   .append('svg')
        //     .attr('width', width + margin.left + margin.right)
        //     .attr('height', height + margin.top + margin.bottom)
        //     .style('margin-left', -margin.left + 'px')
        //   .append('g')
        //     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        // // create rectangle
        // svg.append('rect')
        //   .attr('class', 'background')
        //   .attr('width', width)
        //   .attr('height', height);
        // console.log('this is activity: ', controller.activity);
        // // create rows
        // var row = svg.selectAll('.row1')
        //   .data(controller.activity)
        // .enter().append('g')
        //   .attr('class', 'row')
        //   // .attr('transform', function(d, i) {
        //   //   console.log('this is i: ', i);
        //   //   return 'translate(0,' + x(i) + ')';
        //   // })
        //   .each(row);

        // // add lines to separate rows
        // row.append('line')
        //   .attr('x2', width);

        // // add text for the rows
        // row.append('text')
        //   .attr('x', -6)
        //   .attr('y', x.rangeBand() / 2)
        //   .attr('dy', '.32em')
        //   .attr('text-anchor', 'end')
        //   .text(function(d, i) { return d.activity; });

        // // create columns
        // var column = svg.selectAll('.column')
        //   .data(d3.range(1,24))
        // .enter().append('g')
        //   .attr('class', 'column')
        //   .attr('transform', function(d, i) { return 'translate(' + x(i) + ')rotate(-90)'; });

        // column.append('line')
        //   .attr('x1', -width);

        // column.append("text")
        //   .attr("x", 6)
        //   .attr("y", x.rangeBand() / 2)
        //   .attr("dy", ".32em")
        //   .attr("text-anchor", "start")
        //   .text(function(d, i) { return i; });

        // function row(row) {
        //   var cell = d3.select(this).selectAll(".cell")
        //     .data(function(d) {
        //       console.log('first cell: ', d);
        //       return d;
        //     })
        //   .enter().append("rect")
        //     .attr("class", "cell")
        //     .attr("x", function(d) {
        //       console.log('second cell: ', d);
        //       return x(d);
        //     })
        //     .attr("width", x.rangeBand())
        //     .attr("height", x.rangeBand())
        //     .style("fill-opacity", function(d) {
        //       if(d) {
        //         return 1;
        //       }
        //     })
        //     .style("fill", function(d) {
        //      console.log('this is datum: ', d);
        //      return d;
        //     })
        //     .on("mouseover", mouseover)
        //     .on("mouseout", mouseout);
        // }

        // function mouseover(p) {
        //   d3.selectAll(".row1 text").classed("active", function(d, i) { return i == p.y; });
        //   d3.selectAll(".column text").classed("active", function(d, i) { return i == p.x; });
        // }

        // function mouseout() {
        //   d3.selectAll("text").classed("active", false);
        //

        ////////////////////////////////////////////////////////////////


  var miserables = {
                    "nodes":
                      [
                        { "name": "can use spoon", "group":  0 },
                        { "name": "drinks unassisted", "group":  0 },
                        { "name": "finger feeds", "group":  0 },
                        { "name": "responsive smile", "group":  0 },
                        { "name": "two word phrases", "group":  0 },
                        { "name": "first words", "group":  0 },
                        { "name": "walks alone", "group":  0 },
                        { "name": "stands", "group":  0 },
                        { "name": "crawls", "group":  0 },
                        { "name": "able to sit up", "group":  0 }
                      ],
                    "links":
                      [
                        { "source":  0,  "target":  13,  "value":  1 },
                        { "source":  0,  "target":  14,  "value":  1 },
                        { "source":  0,  "target":  15,  "value":  1 },
                        { "source":  0,  "target":  16,  "value":  1 },
                        { "source":  0,  "target":  17,  "value":  1 },
                        { "source":  0,  "target":  18,  "value":  1 },
                        { "source":  0,  "target":  19,  "value":  1 },
                        { "source":  0,  "target":  20,  "value":  1 },
                        { "source":  0,  "target":  21,  "value":  1 },
                        { "source":  0,  "target":  22,  "value":  1 },
                        { "source":  0,  "target":  23,  "value":  1 },
                        { "source":  0,  "target":  24,  "value":  1 },
                        { "source":  1,  "target":  12,  "value":  1 },
                        { "source":  1,  "target":  13,  "value":  1 },
                        { "source":  1,  "target":  14,  "value":  1 },
                        { "source":  1,  "target":  15,  "value":  1 },
                        { "source":  1,  "target":  16,  "value":  1 },
                        { "source":  1,  "target":  17,  "value":  1 },
                        { "source":  1,  "target":  18,  "value":  1 },
                        { "source":  1,  "target":  19,  "value":  1 },
                        { "source":  1,  "target":  20,  "value":  1 },
                        { "source":  1,  "target":  21,  "value":  1 },
                        { "source":  1,  "target":  22,  "value":  1 },
                        { "source":  1,  "target":  23,  "value":  1 },
                        { "source":  1,  "target":  24,  "value":  1 },
                        { "source":  2,  "target":  10,  "value":  1 },
                        { "source":  2,  "target":  11,  "value":  1 },
                        { "source":  2,  "target":  12,  "value":  1 },
                        { "source":  2,  "target":  13,  "value":  1 },
                        { "source":  2,  "target":  14,  "value":  1 },
                        { "source":  2,  "target":  15,  "value":  1 },
                        { "source":  2,  "target":  16,  "value":  1 },
                        { "source":  2,  "target":  17,  "value":  1 },
                        { "source":  2,  "target":  18,  "value":  1 },
                        { "source":  2,  "target":  19,  "value":  1 },
                        { "source":  2,  "target":  20,  "value":  1 },
                        { "source":  2,  "target":  21,  "value":  1 },
                        { "source":  2,  "target":  22,  "value":  1 },
                        { "source":  2,  "target":  23,  "value":  1 },
                        { "source":  2,  "target":  24,  "value":  1 },
                        { "source":  3,  "target":  2,  "value":  1 },
                        { "source":  3,  "target":  3,  "value":  1 },
                        { "source":  3,  "target":  4,  "value":  1 },
                        { "source":  3,  "target":  5,  "value":  1 },
                        { "source":  4,  "target":  23,  "value":  1 },
                        { "source":  4,  "target":  24,  "value":  1 },
                        { "source":  5,  "target":  12,  "value":  1 },
                        { "source":  5,  "target":  13,  "value":  1 },
                        { "source":  5,  "target":  14,  "value":  1 },
                        { "source":  5,  "target":  15,  "value":  1 },
                        { "source":  5,  "target":  16,  "value":  1 },
                        { "source":  5,  "target":  17,  "value":  1 },
                        { "source":  5,  "target":  18,  "value":  1 },
                        { "source":  5,  "target":  19,  "value":  1 },
                        { "source":  5,  "target":  20,  "value":  1 },
                        { "source":  5,  "target":  21,  "value":  1 },
                        { "source":  5,  "target":  22,  "value":  1 },
                        { "source":  5,  "target":  23,  "value":  1 },
                        { "source":  5,  "target":  24,  "value":  1 },
                        { "source":  6,  "target":  12,  "value":  1 },
                        { "source":  6,  "target":  13,  "value":  1 },
                        { "source":  6,  "target":  14,  "value":  1 },
                        { "source":  6,  "target":  15,  "value":  1 },
                        { "source":  6,  "target":  16,  "value":  1 },
                        { "source":  6,  "target":  17,  "value":  1 },
                        { "source":  6,  "target":  18,  "value":  1 },
                        { "source":  6,  "target":  19,  "value":  1 },
                        { "source":  6,  "target":  20,  "value":  1 },
                        { "source":  6,  "target":  21,  "value":  1 },
                        { "source":  6,  "target":  22,  "value":  1 },
                        { "source":  6,  "target":  23,  "value":  1 },
                        { "source":  6,  "target":  24,  "value":  1 },
                        { "source":  7,  "target":  12,  "value":  1 },
                        { "source":  7,  "target":  13,  "value":  1 },
                        { "source":  7,  "target":  14,  "value":  1 },
                        { "source":  7,  "target":  15,  "value":  1 },
                        { "source":  7,  "target":  16,  "value":  1 },
                        { "source":  7,  "target":  17,  "value":  1 },
                        { "source":  7,  "target":  18,  "value":  1 },
                        { "source":  7,  "target":  19,  "value":  1 },
                        { "source":  7,  "target":  20,  "value":  1 },
                        { "source":  7,  "target":  21,  "value":  1 },
                        { "source":  7,  "target":  22,  "value":  1 },
                        { "source":  7,  "target":  23,  "value":  1 },
                        { "source":  7,  "target":  24,  "value":  1 },
                        { "source":  8,  "target":  8,  "value":  1 },
                        { "source":  8,  "target":  9,  "value":  1 },
                        { "source":  8,  "target":  10,  "value":  1 },
                        { "source":  8,  "target":  11,  "value":  1 },
                        { "source":  8,  "target":  12,  "value":  1 },
                        { "source":  8,  "target":  13,  "value":  1 },
                        { "source":  8,  "target":  14,  "value":  1 },
                        { "source":  8,  "target":  15,  "value":  1 },
                        { "source":  8,  "target":  16,  "value":  1 },
                        { "source":  8,  "target":  17,  "value":  1 },
                        { "source":  8,  "target":  18,  "value":  1 },
                        { "source":  8,  "target":  19,  "value":  1 },
                        { "source":  8,  "target":  20,  "value":  1 },
                        { "source":  8,  "target":  21,  "value":  1 },
                        { "source":  8,  "target":  22,  "value":  1 },
                        { "source":  8,  "target":  23,  "value":  1 },
                        { "source":  8,  "target":  24,  "value":  1 },
                        { "source":  9,  "target":  8,  "value":  1 },
                        { "source":  9,  "target":  9,  "value":  1 },
                        { "source":  9,  "target":  10,  "value":  1 },
                        { "source":  9,  "target":  11,  "value":  1 },
                        { "source":  9,  "target":  12,  "value":  1 },
                        { "source":  9,  "target":  13,  "value":  1 },
                        { "source":  9,  "target":  14,  "value":  1 },
                        { "source":  9,  "target":  15,  "value":  1 },
                        { "source":  9,  "target":  16,  "value":  1 },
                        { "source":  9,  "target":  17,  "value":  1 },
                        { "source":  9,  "target":  18,  "value":  1 },
                        { "source":  9,  "target":  19,  "value":  1 },
                        { "source":  9,  "target":  20,  "value":  1 },
                        { "source":  9,  "target":  21,  "value":  1 },
                        { "source":  9,  "target":  22,  "value":  1 },
                        { "source":  9,  "target":  23,  "value":  1 },
                        { "source":  9,  "target":  24,  "value":  1 }
                      ],
                    "months": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
                   }


var margin = {top: 50, right: 100, bottom: 10, left: 100},
    width = 500,
    height = 250;

var x = d3.scale.ordinal().rangeBands([0, height]),
    y = d3.scale.linear().domain([1, 24]).range([0, 480]),
    // y = d3.scale.ordinal().rangeBands([0, height]),
    z = d3.scale.linear().domain([0, 4]).clamp(true),
    c = d3.scale.category10().domain(d3.range(10));

var svg = d3.select(".diagram").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("margin-left", margin.left + "px")
  .style("margin-top", margin.top + "px")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//d3.json("foo.json", function(miserables) {
  var matrix = [],
      nodes = miserables.nodes,
      numRows = nodes.length;
      n = miserables.months.length + 1;
  console.log('BEFORE MATRIX: ', matrix);
  // Compute index per node.
  // i represents the index number for each node
  // j represents the month
  // z represents the cell value
  nodes.forEach(function(node, i) {
    // represents how many rows
    // node.index = i;
    node.count = 0;
    matrix[i] = d3.range(n).map(function(j) {
      return {x: j, y: i, z: 0};
    });
    // console.log('matrix[i]: ', matrix[i]);
  });

  console.log('AFTER MATRIX: ', matrix);

  // Convert links to matrix; count character occurrences.
  miserables.links.forEach(function(link) {
    console.log('----forEach BEFORE-------');
    // console.log('link :', link);
    // console.log('matrix: ', matrix);
    // console.log('matrix[link.source]: ', matrix[link.source]);
    // console.log('matrix[link.source][link.target]: ', matrix[link.source][link.target]);
    console.log('value: ', link.value);
    console.log('current: ', matrix[link.source][link.target].z)
    console.log('-------end after----------');
    matrix[link.source][link.target].z += link.value;
    // matrix[link.target][link.source].z += link.value;
    // matrix[link.source][link.source].z += link.value;
    // matrix[link.target][link.target].z += link.value;
    nodes[link.source].count += link.value;
    // nodes[link.target].count += link.value;
    console.log('----forEach AFTER-------');
    // console.log('link :', link);
    // console.log('matrix: ', matrix);
    // console.log('matrix[link.source]: ', matrix[link.source]);
    // console.log('matrix[link.source][link.target]: ', matrix[link.source][link.target]);
    console.log('current: ', matrix[link.source][link.target].z)
    console.log('-------end after----------');
  });

 //alert("matrix = "+  )

  // Precompute the orders.
  var orders = {
    name: d3.range(numRows).sort(function(a, b) { return d3.ascending(nodes[a].name, nodes[b].name); }),
    count: d3.range(numRows).sort(function(a, b) { return nodes[b].count - nodes[a].count; })
    // group: d3.range(numRows).sort(function(a, b) { return nodes[b].group - nodes[a].group; })
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
        // console.log('rows d: ', d);
        // console.log('x(i): ', x(i));
        // return "translate(0," + x(i) + ")";
        return "translate(0," + x(i) + ")";

      })
      .each(row);

  row.append("line")
      .attr("class", "diagram")
      .attr("x2", width);

  row.append("text")
      .attr("x", -6)
      .attr("y", x.rangeBand() / 5)
      .attr("dy", ".32em")
      .attr("text-anchor", "end")
      .text(function(d, i) { return nodes[i].name; });

  // translate decides the space between vertical lines
  var column = svg.selectAll(".column")
      .data(miserables.months)
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
      .attr("x", 6)
      .attr("y", x.rangeBand() / 5)
      .attr("dy", "-1.5em")
      .attr("text-anchor", "start")
      // .text(function(d, i) { return nodes[i].name; });
      .text(function(d, i) { return d; });

  // fill opacity determines actual coloring
  function row(row) {
    var cell = d3.select(this).selectAll(".cell")
        .data(row.filter(function(d) {
          // console.log('d inside row: ', d);
          console.log('d.z: ', d.z);
          return d.z;
        }))
      .enter().append("rect")
        .attr("class", "cell")
        .attr("x", function(d) {
          console.log('d.x: ', d.x);
          return y(d.x);
        })
        // .attr("width", x.rangeBand())
        .attr("width", 21)
        .attr("height", x.rangeBand())
        .style("fill-opacity", function(d) { return z(d.z); })

        .style("fill", function(d) {
          // console.log('row d: ', d);
          // console.log('nodes d.x: ', nodes[d.x].group);
          // console.log('nodes d.y: ', nodes[d.y].group);
          // return nodes[d.x].group == nodes[d.y].group ? c(nodes[d.x].group) : null;
          // return nodes[d.x].group == nodes[d.y].group ? c(0) : null;
          // console.log('color: ', c(0));
          // return nodes[d.x] == nodes[d.y] ? c(0) : null;
          // return
        })
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
    console.log('running: ', value);
    x.domain(orders[value]);
    console.log('orders: ', orders[value]);

    var t = svg.transition().duration(2500);

    t.selectAll(".row")
        .delay(function(d, i) { return x(i) * 4; })
        .attr("transform", function(d, i) { return "translate(0," + x(i) + ")"; })
      // .selectAll(".cell")
      //   .delay(function(d) { return x(d.x) * 4; })
      //   .attr("x", function(d) { return x(d.x); });

    // t.selectAll(".column")
    //     .delay(function(d, i) { return x(i) * 4; })
    //     .attr("transform", function(d, i) { return "translate(" + x(i) + ")rotate(-90)"; });
  }

  var timeout = setTimeout(function() {
    order("count");
    d3.select("#order").property("selectedIndex", 1).node();
  }, 500);
// });
      }

      return {
        restrict: 'EA',
        scope: {},
        controller: 'MilestoneCtrl',
        controllerAs: 'vm',
        bindToController: {
          links: '=',
          activity: '='
        },
        link: link
      };
    }
})();
