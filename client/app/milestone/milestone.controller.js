(function () {
  'use strict';

  angular
    .module('baby.milestone',[])
    .controller('MilestoneCtrl', MilestoneCtrl);

  function MilestoneCtrl($state, milestone, $stateParams) {
    // initialize
    var vm = this;

    // variables
    var currentChildCondition = $stateParams.condition;

    // functions
    vm.displayCondition = displayCondition;
    vm.init = init;
    vm.condition = $stateParams.condition;

    function init() {
      displayCondition();
    }

    function displayCondition() {
      milestone.getCondition(currentChildCondition)
        .then(function(data) {
          var conditionData = data.data[0];
          console.log(conditionData);
          // vm.grossMotor = conditionData.grossMotor;
          // vm.personalSocial = conditionData.personalSocial;
          // vm.language = conditionData.language;

          AmCharts.useUTC = true;
          AmCharts.makeChart( 'chartdiv', {
            'type': 'serial',
            'categoryField': 'category',
            'rotate': true,
            'startDuration': 1,
            'theme': 'light',
            'categoryAxis': {
              'gridPosition': 'start'
            },
            'trendLines': [],
            'graphs': [ {
              'balloonText': 'Month Start:[[open]] Month End:[[close]]',
              'closeField': 'Month End',
              'fillAlphas': 1,
              'id': 'AmGraph-1',
              'openField': 'Month Start',
              'title': 'graph 1',
              'type': 'column'
            } ],
            'guides': [],
            'valueAxes': [ {
              'id': 'ValueAxis-1',
              'stackType': 'regular',
              'title': 'Axis title'
            } ],
            'allLabels': [],
            'balloon': {},
            'titles': [ {
              'id': 'Title-1',
              'size': 15,
              'text': 'Chart Title'
            } ],
            'dataProvider': [ {
              'category': 'Walks Alone',
              'Month Start': conditionData.grossMotor.walksalone[0],
              'Month End': conditionData.grossMotor.walksalone[1]
              },
              {
              'category': 'Stands Alone',
              'Month Start': conditionData.grossMotor.stands[0],
              'Month End': conditionData.grossMotor.stands[1]
              },
              {
              'category': 'Crawls',
              'Month Start': conditionData.grossMotor.crawls[0],
              'Month End': conditionData.grossMotor.crawls[1]
              },
              {
              'category': 'Sits Alone',
              'Month Start': conditionData.grossMotor.sitsalone[0],
              'Month End': conditionData.grossMotor.sitsalone[1]
              },
              //Personal Social
              {
              'category': 'Uses Spoon',
              'Month Start': conditionData.personalSocial.usesspoon[0],
              'Month End': conditionData.personalSocial.usesspoon[1]
              },
              {
              'category': 'Drinks Unassisted',
              'Month Start': conditionData.personalSocial.drinksunassisted[0],
              'Month End': conditionData.personalSocial.drinksunassisted[1]
              },
              {
              'category': 'Finger Feeds',
              'Month Start': conditionData.personalSocial.fingerfeeds[0],
              'Month End': conditionData.personalSocial.fingerfeeds[1]
              },
              {
              'category': 'Responsive Smile',
              'Month Start': conditionData.personalSocial.responsivesmile[0],
              'Month End': conditionData.personalSocial.responsivesmile[1]
              },
              //Language
              {
              'category': 'Two Word Phrases',
              'Month Start': conditionData.language.twowordphrases[0],
              'Month End': conditionData.language.twowordphrases[1]
              },
              {
              'category': 'First Words',
              'Month Start': conditionData.language.firstwords[0],
              'Month End': conditionData.language.firstwords[1]
              },
            ]
          });
        });
    }
  }

}
)();