// Circle Task
// v.0.7
// Authors: Kyle Logie and Norman Farb
// Email: norman.farb@utoronto.ca



// Experiment-wide Variables
var maintimeline = []; // the main experiment timeline

////////////////////////////////////////////////////////
// Populate the Experiment Timeline
////////////////////////////////////////////////////////
(firebase.auth);


maintimeline.push(preload); //helpers.js
maintimeline.push(welcome_trial); //instructions.js


maintimeline.push(QC_node); //instructions.js
maintimeline.push(consent_node); //consent.js
maintimeline.push(validateID_node); //getID.js

maintimeline.push(demographics_node); //questionnaire_Demographics.js

maintimeline.push(entrain_node);    //entrain.js
maintimeline.push(practice_node);   //practice1.js
maintimeline.push(practice2_node);    //practice2.js  


maintimeline.push(circle1_instruct);    //run_circletask1.js
maintimeline.push(circle1_node);    //run_circletask1.js

maintimeline.push(bart_instruct);    //run_circletask1.js
maintimeline.push(bart_node);    //run_circletask1.js

//maintimeline.push(graph_trial);

maintimeline.push(MAIA_node); //questionnaire_MAIA.js    
maintimeline.push(REI_node); //questionnaire_MAIA.js  
maintimeline.push(BISBAS_node); //questionnaire_MAIA.js    
maintimeline.push(GA7_node); //questionnaire_MAIA.js    
maintimeline.push(PHQ9_node); //questionnaire_MAIA.js    
maintimeline.push(PHQ15_node); //questionnaire_MAIA.js    

maintimeline.push(circle1_repeat_instruct);    //run_circletask1.js
maintimeline.push(circle1_repeat_node);    //run_circletask1.js

maintimeline.push(bart_repeat_instruct);    //run_circletask1.js
maintimeline.push(bart_repeat_node);    //run_circletask1.js

maintimeline.push(debrief_trial);    //instructions.js*/
maintimeline.push(goodbye_trial);    //instructions.js*/


// start the experiment
jsPsych.init({
    timeline: maintimeline, //unsaved
    show_progress_bar: true,
    on_finish: function () {
        console.log(jsPsych.data.get().json());
        saveSummaryData(jsPsych.data.get().json());
    }
});