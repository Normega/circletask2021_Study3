let rateData = [pData.TotalRateChange];

function staircase_init(){
    pData.StepSize = .1;
    pData.goodcount = 0;
    pData.hardbumper = false;
    pData.easybumper = false;
    pData.reversalCount = 0;
    pData.TotalRateChange = STARTING_RATE_CHANGE;
    pData.StepSize = STARTING_STEP_SIZE;
}

function nextStep(correct){
    
    if(correct){
        pData.goodcount ++;
    } else {
        pData.badcount ++;
    }

    if (pData.goodcount == STAIR_DOWN_COUNT){
        pData.goodcount = 0; //reset the count
        pData.hardbumper = true;
        pData.TotalRateChange -= pData.StepSize        
        if (pData.TotalRateChange < .01){
            pData.TotalRateChange =.01;
        }
    }

    if (pData.badcount == STAIR_UP_COUNT){
        pData.badcount = 0; //reset the count
        pData.easybumper = true;
        pData.TotalRateChange += pData.StepSize
        if (pData.TotalRateChange > 1){
            pData.TotalRateChange =1;
        }
    }

    //check if a full reversal has been made - only update step if # of reversals is hit
    if (pData.hardbumper & pData.easybumper) { 
        pData.reversalCount ++;
        pData.hardbumper = false;
        pData.easybumper = false;
        if (pData.reversalCount == STAIR_REVERSALS) {
            pData.reversalCount = 0;
            pData.StepSize = pData.StepSize * STAIR_FACTOR;          
        }         
    }

    rateData.push(pData.TotalRateChange);

}

function graphSteps(c){
    var ctx = c.getContext('2d')
    var dataPoints = [];

    
    for (var i = 0; i < rateData.length; i++) {
        dataPoints.push({
          x: i,
          y: rateData[i]
        });
      }
      console.log(dataPoints);
     
      var chartdef = {
        title: "Staircase for Circle Task 1",
        xLabel: "Trial",
        yLabel: "Change Rate",
        //labelFont: '19pt Arial', 
        //dataPointFont: '10pt Arial',
        renderTypes: [CanvasChart.renderType.lines, CanvasChart.renderType.points],
        dataPoints: dataPoints        
      };
      
      CanvasChart.render("jspsych-canvas-stimulus",chartdef);
}

var graph_trial = {
    type: "canvas-keyboard-response",
    stimulus: graphSteps,
    canvas_size: [500, 800],
    prompt: "<p>Please press <b>'RIGHT ARROW'</b> to continue...</p>",        
    show_clickable_nav: true,
    post_trial_gap: 500,
};
