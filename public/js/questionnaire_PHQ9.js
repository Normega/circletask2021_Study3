/*
PHQ9

*/

var PHQ9_items = [
     
    "0 - not at all", 
    "1 - several days", 
    "2 - more than half the days", 
    "3 - nearly every day"
  ];
  

var PHQ9_all = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'How often have you been bothered by the following over the past 2 weeks?.</p>',
    questions: [
      
/*
Items are pre-ordered in this scale so do not randomize 
*/

        {prompt: "Little interest or pleasure in doing things?", name: 'PHQ9_01', labels: PHQ9_items, required: true},
        {prompt: "Feeling down, depressed, or hopeless?", name: 'PHQ9_02', labels: PHQ9_items, required: true},
        {prompt: "Trouble falling or staying asleep, or sleeping too much?", name: 'PHQ9_03', labels: PHQ9_items, required: true},
        {prompt: "Feeling tired or having little energy?", name: 'PHQ9_04', labels: PHQ9_items, required: true},          
        {prompt: "Poor appetite or overeating?", name: 'PHQ9_05', labels: PHQ9_items, required: true},  
        {prompt: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?", name: 'PHQ9_06', labels: PHQ9_items, required: true},  
        {prompt: "Trouble concentrating on things, such as reading the newspaper or watching television?", name: 'PHQ9_07', labels: PHQ9_items, required: true},  
        {prompt: "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?", name: 'PHQ9_08', labels: PHQ9_items, required: true},  
        {prompt: "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?", name: 'PHQ9_09', labels: PHQ9_items, required: true},  
       
  
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    
    
    on_finish: function(data){
        pData.PHQ9_01 = data.response.PHQ9_01;
        pData.PHQ9_02 = data.response.PHQ9_02;
        pData.PHQ9_03 = data.response.PHQ9_03;
        pData.PHQ9_04 = data.response.PHQ9_04;
        pData.PHQ9_05 = data.response.PHQ9_05;
        pData.PHQ9_06 = data.response.PHQ9_06;
        pData.PHQ9_07 = data.response.PHQ9_07;
        pData.PHQ9_08 = data.response.PHQ9_08;
        pData.PHQ9_09 = data.response.PHQ9_09;

 
        pData.PHQ9_total = (pData.PHQ9_01 + pData.PHQ9_02 + pData.PHQ9_03 + pData.PHQ9_04 + 
            pData.PHQ9_05 + pData.PHQ9_06 + pData.PHQ9_07 + pData.PHQ9_08 + pData.PHQ9_09);
     
    },    
 };
 

 var PHQ9_instruct = {
    type: "html-keyboard-response",
    stimulus: "<p class='image'><img style='width:256px; height:256px;' src='/assets/questionnaire.png' /></p>",
    choices: ['ArrowRight'], 
    prompt: "<p class='description'> We'd like you " +
            "to answer some questions about any feelings of depression you may have.</p><br>" + 
            "<p class='description'>Press <em_black>RIGHT ARROW</em_black> to continue.</p>",    
    post_trial_gap: 500
};

 var PHQ9_node ={
    timeline: [PHQ9_instruct, PHQ9_all],
    on_timeline_start: function(){resetLogVars();},
    on_timeline_finish: function(){        
        
        saveSessionData2("questionnaire_PHQ9");
        
    },

};
