(function() {
  angular.module('baby')
    .directive('radialBar', radialBar);

    function radialBar($window) {
      function linker(scope, el) {
        var d3 = $window.d3;
        el = el[0];
        var data;
        var start = 0;
        var pastPercentage = start/24;

        scope.$watch('data', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              data = newVal;
              d3.select('svg').remove();
              render(newVal);
              start = newVal;
              pastPercentage = start/24;
            }
        });

        function render(count) {
          var fraction = count/24;
          var diagramWidth = document.getElementById('progress').clientWidth;
          var τ = 2 * Math.PI,
            width = diagramWidth,
            height = 25,
            outerRadius = Math.min(width,height)/2,
            innerRadius = (outerRadius/5)*4,
            min = Math.min(width,height),
            fontSize = (Math.min(width,height)/4);


          var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius)
              .startAngle(0);
          var svg = d3.select('#progress').append('svg')
              .attr('width', '30%')
              .attr('height', '30%')
              .attr('viewBox','0 0 '+min +' '+min )
              .attr('preserveAspectRatio','xMinYMin')
              .append('g')
              .attr('transform', 'translate('+min/2+','+min/2+')');

          var text = svg.append('text')
              .text(Math.round(pastPercentage * 100) + '%')
              .attr('text-anchor', 'middle')
              .style('font-size',fontSize+'px')
              .attr('dy',fontSize/3)
              .attr('dx',2);

          svg.append('path')
              .datum({endAngle: τ}) // tell it where to start
              .style('fill', '#7cc35f')
              .attr('d', arc);

          var foreground = svg.append('path')
              .attr('class', 'foreground')
              .datum({endAngle: pastPercentage *  τ})
              .style('fill', '#57893e')
              .attr('d', arc);

            foreground.transition()
                .duration(300)
                .call(arcTween, fraction * τ);

          function arcTween(transition, newAngle) {
            transition.attrTween('d', function(d) {
              var interpolate = d3.interpolate(d.endAngle, newAngle);
              return function(t) {
                  d.endAngle = interpolate(t);
                  text.text(Math.round((d.endAngle/τ)*100)+'%');
                  return arc(d);
              };
            });
          }

        }

      } // end of linker

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
