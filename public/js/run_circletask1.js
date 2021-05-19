//CIRCLE TASK 1

// pages of instructions for task 1 practice trials
var circle1_instruct = {
    on_load: staircase_init(),
    type: "instructions",
    pages: [
        "<p><b>Breath Task (A)</b></p>" +
        "<p>We are ready for the main task.</p>" +
        "<p class='description'>The main task will be just like what you just practiced.<br>" +
        instruct_viewpulse,
        
        "<p><b>Breathe with the Circle</b></p>" +
        instruct_breathealong,        
        
        "<p><b>Keyboard Responses</b></p>" +
        "<p>Please also continue to track the circle with the keyboard arrows.</p>" +
        instruct_keypressalong,        
        
        "<p><b>Noticing Change</b></p>" +
        "<p class='description'>After you breathe along with the circle for up to a minute " +
        "we will ask if your breathing" +
        "<em_black> sped up, slowed down, </em_black> or <em_black> stayed the same.</em_black> </p>"+
        "<p>We will also ask you to rate how confident you are in your decision.</p>",
        instruct_getready,        
    ],
    show_clickable_nav: true,
    post_trial_gap: 500,
    on_finish: function() {
        staircase_init();
    }
};

var circle1_repeat_instruct = {
    on_load: staircase_init(),
    type: "instructions",
    pages: [
        "<p><b>Breath Task (B)</b></p>" +
        "<p>We would like you to repeat the breath tracking task task.</p>" +
        "<p class='description'>The task will be just like what you did before.<br>" +
        instruct_viewpulse,
        
        "<p><b>Breathe with the Circle</b></p>" +
        instruct_breathealong,        
        
        "<p><b>Keyboard Responses</b></p>" +
        "<p>Please also continue to track the circle with the keyboard arrows.</p>" +
        instruct_keypressalong,        
        
        "<p><b>Noticing Change</b></p>" +
        "<p class='description'>After you breathe along with the circle for up to a minute " +
        "we will ask if your breathing" +
        "<em_black> sped up, slowed down, </em_black> or <em_black> stayed the same.</em_black> </p>"+
        "<p>We will also ask you to rate how confident you are in your decision.</p>",
        instruct_getready,        
    ],
    show_clickable_nav: true,
    post_trial_gap: 500,
    on_finish: function() {
        staircase_init();
    }
};

// instructions if the person fails to track the circle
var repeat_circle1_instruct = {
    type: "instructions",    
    pages: [
        "<p>We noticed that you were having trouble tracking the circle.</p>" +
        "<p>We can only use your data if it is clear you are paying attention.</p>" +        
        instruct_breathealong + instruct_keypressalong,
        
    ],
    show_clickable_nav: true,
    // key_forward: 's',
    post_trial_gap: 500
};

//Circle 1 NODE bad trial repeat instructions
var repeat_circle1_node = {
    timeline: [repeat_circle1_instruct],
    conditional_function: function(){
        if(repeatneeded){            
            return true;
        } else {
            //console.log(repeatneeded, detectACC, "Circle 1 Good to go!");
            return false;
        }
    }
}

let circle1Trials = generatetrials(NUMBER_OF_TRIALS_1)
shuffle(circle1Trials);

var circle1_node = {
    timeline: [fixation, circleTask1, detectchange, confidencerating, arousalrating, entrain_reminder, repeat_circle1_node],
    on_timeline_start: function() {
        //console.log("Prep Circle 1");
        pData.Block = "Circle1";
        pData.NumPulses = NUMBER_OF_PULSES_1;        
        pData.ChangeType = circle1Trials.pop(); //select 1 from the trial list        
    },   
    loop_function: function(){
        saveSessionData2(pData.Block);
        //console.log("Track ACC: ",pData.TrackACC);
        if(circle1Trials.length > 0){ 
            //console.log("Do staircase for acc: ", pData.DetectACC);
            nextStep(pData.DetectACC);           
            return true; //keep looping when there are more trials to use
        } else {
            pData.TrialNum = 0;            
            return false; //break out of loop when trials are used up
        }        
    }
}

//Circle 1 Repeat NODE
let circle1RepeatTrials = generatetrials(NUMBER_OF_TRIALS_1)
shuffle(circle1RepeatTrials);

var circle1_repeat_node = {
    timeline: [fixation, circleTask1, detectchange, confidencerating, arousalrating, entrain_reminder, repeat_circle1_node],
    on_timeline_start: function() {
        //console.log("Prep Circle 1");
        pData.Block = "Circle1Repeat";
        pData.NumPulses = NUMBER_OF_PULSES_1;        
        pData.ChangeType = circle1RepeatTrials.pop(); //select 1 from the trial list        
    },   
    loop_function: function(){
        saveSessionData2(pData.Block);
        //console.log("Track ACC: ",pData.TrackACC);
        if(circle1RepeatTrials.length > 0){ 
            //console.log("Do staircase for acc: ", pData.DetectACC);
            nextStep(pData.DetectACC);           
            return true; //keep looping when there are more trials to use
        } else {
            pData.TrialNum = 0;            
            return false; //break out of loop when trials are used up
        }        
    }
}
