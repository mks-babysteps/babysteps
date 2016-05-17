(function() {
  angular.module('baby')
    .directive('radialBar', radialBar);

    function radialBar($window) {
      function linker(scope, el) {
        console.log('running radial!');
        var d3 = $window.d3;
        el = el[0];
        var data;
        var hasProgress = false;

        scope.$watch('data', function(newVal, oldVal) {
            console.log('newVal: ', newVal);
            if(newVal !== oldVal) {
              data = newVal;
              d3.select('svg').remove();
              render(newVal, hasProgress);
              hasProgress = true;
            }
        });
        // render();
        // setTimeout(render, 5000);
        function render(count, hasProgress) {
          console.log('i am rendering!');
          console.log('this scope data: ', scope.data);
          // var $container = $('.chart-container'),
          var fraction = count/23;
          var diagramWidth = document.getElementById('progress').clientWidth;
          var diagramHeight = document.getElementById('progress').clientHeight;
          var τ = 2 * Math.PI,
            width = diagramWidth,
            height = 25,
            outerRadius = Math.min(width,height)/2,
            innerRadius = (outerRadius/5)*4,
            // fontSize = (Math.min(width,height)/4);
            fontSize = (Math.min(width,height)/4);
            // console.log('height: ', height);
            // console.log('width: ', width);


          // console.log('my font size: ', fontSize);
          if(hasProgress === false) {
            var arc = d3.svg.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius)
                .startAngle(0);
            var svg = d3.select('#progress').append("svg")
                .attr("width", '100%')
                .attr("height", '100%')
                .attr('viewBox','0 0 '+Math.min(width,height) +' '+Math.min(width,height) )
                .attr('preserveAspectRatio','xMinYMin')
                .append("g")
                .attr("transform", "translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")");

            var text = svg.append("text")
                .text('0%')
                .attr("text-anchor", "middle")
                .style("font-size",fontSize+'px')
                .attr("dy",fontSize/3)
                .attr("dx",2);

            var background = svg.append("path")
                .datum({endAngle: τ}) // tell it where to start
                .style("fill", "#7cc35f")
                .attr("d", arc);

            var foreground = svg.append("path")
                .datum({endAngle: 0 * τ})
                .style("fill", "#57893e")
                .attr("d", arc);

            (function() {
              foreground.transition()
                  .duration(3000)
                  .call(arcTween, fraction * τ);
            })()
          }

          if(hasProgress === true) {
              foreground.transition()
                  .duration(500)
                  .call(arcTween, fraction * τ);
          }

          function arcTween(transition, newAngle) {
            transition.attrTween("d", function(d) {
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
