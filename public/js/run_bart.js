

// populates the trial array based on experiment specified number of trials
function generateBARTtrials(numtrials) {   
    var bucket = [];    

    for (var j = 0; j < numtrials; j ++){
        bucket.push(getRandomInt(1,MAX_BART_PUMPS));        
    }
    return bucket;
}

//BART TASK

// pages of instructions for task 1 practice trials
var bart_instruct = {
    on_load: function(){
        resetBART();    
    },
    type: "instructions",
    pages: [
        "<p><b>BART Task (A)</b></p>" +
        "<p class='description'>In this task, you will be presented with 20 balloons, one at a time.</p><br>" +
        "<p class='description'>For each balloon, press the <em_blue>UP ARROW</em_blue> to pump up the balloon. " +
        "Each time you increase the balloon size you will earn a temporary point.</p><br>"+
        
        "<p class='description'>At any time, you can press the <em_red>DOWN ARROW</em_red> to stop inflating the balloon and move " +
        "your points to your secure bank. Your goal is to bank as many points as you can across the 20 balloons.</p><br>"+

        "<p class='description'>However, every time you inflate the balloon there is a chance that it will <em_black>POP</b>.</p><br>" +
        
        "<p class='description'>If the balloon pops, you lose all your temporary points for that balloon (the bank points remain safe).</p><br>" +

        "<p class='description'>You will have to figure out how risky to be in inflating the balloon. <br>" +
        "Too safe, and you won't earn many points for banking.<br>" +
        "Too risky, and you'll pop before you have a chance to bank your points</p>",
        
        instruct_getready,        
    ],
    show_clickable_nav: true,
    post_trial_gap: 500,
};

var bart_repeat_instruct = {
    on_load: function(){
        resetBART();
    },
    type: "instructions",
    pages: [
        "<p><b>BART Task (B)</b></p>" +
        "<p class='description'>We would like you to do the balloon task one more time.<br>" +
        "In this task, you will be presented with 20 balloons, one at a time.</p><br>" +
        "<p class='description'>For each balloon, press the <em_blue>UP ARROW</em_blue> to pump up the balloon. " +
        "Each time you increase the balloon size you will earn a temporary point.</p><br>"+
        
        "<p class='description'>At any time, you can press the <em_red>DOWN ARROW</em_red> to stop inflating the balloon and move " +
        "your points to your secure bank. Your goal is to bank as many points as you can across the 20 balloons.</p><br>"+

        "<p class='description'>However, every time you inflate the balloon there is a chance that it will <em_black>POP</b>.</p><br>" +
        
        "<p class='description'>If the balloon pops, you lose all your temporary points for that balloon (the bank points remain safe).</p><br>" +

        "<p class='description'>You will have to figure out how risky to be in inflating the balloon. <br>" +
        "Too safe, and you won't earn many points for banking.<br>" +
        "Too risky, and you'll pop before you have a chance to bank your points</p>",
        
        instruct_getready,        
    ],
    show_clickable_nav: true,
    post_trial_gap: 500,
};


var respstr ="BART response placeholder";
// pages of instructions for task 1 practice trials
var bartDebrief = {    
    on_load: function() {                
        console.log(respstr);
    },
    type: "instructions",
    pages:[
        function(){return respstr;},                
    ],
    show_clickable_nav: true,
    post_trial_gap: 500,
};

let bartTrials = generateBARTtrials(NUM_BART_TRIALS);
var bart_node = {
    timeline: [bartTask, bartDebrief],
    on_timeline_start: function() {
        console.log("Prep BART");
        pData.Block = "BART";
        pData.BARTlimit = bartTrials.pop(); //select 1 from the trial list        
    },   
    loop_function: function(){
        saveSessionData2(pData.Block);
        //console.log("Track ACC: ",pData.TrackACC);
        if(bartTrials.length > 0){ 
            return true; //keep looping when there are more trials to use
        } else {
            pData.TrialNum = 0;            
            return false; //break out of loop when trials are used up
        }        
    }
}

let bartRepeatTrials = generateBARTtrials(NUM_BART_TRIALS);
var bart_repeat_node = {
    timeline: [bartTask, bartDebrief],
    on_timeline_start: function() {
        console.log("Prep BART");
        pData.Block = "BARTRepeat";
        pData.BARTlimit = bartRepeatTrials.pop(); //select 1 from the trial list        
    },   
    loop_function: function(){
        saveSessionData2(pData.Block);
        //console.log("Track ACC: ",pData.TrackACC);
        if(bartRepeatTrials.length > 0){ 
            return true; //keep looping when there are more trials to use
        } else {
            pData.TrialNum = 0;            
            return false; //break out of loop when trials are used up
        }        
    }
}
