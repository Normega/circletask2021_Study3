/*
PHQ15 

*/

var PHQ15_items = [
     
    "0 - not at all", 
    "1 - bothered a little", 
    "2 - bothered a lot", 
  ];
  

var PHQ15_all = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'How often have you been bothered by the following over the past week?.</p>',
    questions: [
      
/*
Items are pre-ordered in this scale so do not randomize 
*/

        {prompt: "Stomach pain?", name: 'PHQ15_01', labels: PHQ15_items, required: true},
        {prompt: "Back pain?", name: 'PHQ15_02', labels: PHQ15_items, required: true},
        {prompt: "Pain in your arms, legs or joints (knees, hips, etc.)?", name: 'PHQ15_03', labels: PHQ15_items, required: true},
        {prompt: "Menstrual cramps or other problems with your periods (if applicable)?", name: 'PHQ15_04', labels: PHQ15_items, required: false},          
        {prompt: "Headaches?", name: 'PHQ15_05', labels: PHQ15_items, required: true},  
        {prompt: "Dizziness?", name: 'PHQ15_06', labels: PHQ15_items, required: true},  
        {prompt: "Feeling your heart pound or race?", name: 'PHQ15_07', labels: PHQ15_items, required: true},  
        {prompt: "Shortness of breath?", name: 'PHQ15_08', labels: PHQ15_items, required: true},  
        {prompt: "Pain or problems during sexual intercourse?", name: 'PHQ15_09', labels: PHQ15_items, required: true},  
       {prompt: "Constipation, loose bowels or diarrhea?", name: 'PHQ15_10', labels: PHQ15_items, required: true},  
       {prompt: "Nausea, gas or indigestion?", name: 'PHQ15_11', labels: PHQ15_items, required: true},  
       {prompt: "Feeling tired or having low energy?", name: 'PHQ15_12', labels: PHQ15_items, required: true},  
       {prompt: "Trouble sleeping?", name: 'PHQ15_13', labels: PHQ15_items, required: true},  
       {prompt: "Chest pain?", name: 'PHQ15_14', labels: PHQ15_items, required: true},  
       {prompt: "Fainting spells?", name: 'PHQ15_15', labels: PHQ15_items, required: true},  
  
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    
    
    on_finish: function(data){
        pData.PHQ15_01 = data.response.PHQ15_01;
        pData.PHQ15_02 = data.response.PHQ15_02;
        pData.PHQ15_03 = data.response.PHQ15_03;
        pData.PHQ15_04 = data.response.PHQ15_04;
        pData.PHQ15_05 = data.response.PHQ15_05;
        pData.PHQ15_06 = data.response.PHQ15_06;
        pData.PHQ15_07 = data.response.PHQ15_07;
        pData.PHQ15_08 = data.response.PHQ15_08;
        pData.PHQ15_09 = data.response.PHQ15_09;
        pData.PHQ15_10 = data.response.PHQ15_10;
        pData.PHQ15_11 = data.response.PHQ15_11;
        pData.PHQ15_12 = data.response.PHQ15_12;
        pData.PHQ15_13 = data.response.PHQ15_13;
        pData.PHQ15_14 = data.response.PHQ15_14;
        pData.PHQ15_15 = data.response.PHQ15_15;
 
        pData.PHQ15_total = (pData.PHQ15_01 + pData.PHQ15_02 + pData.PHQ15_03 + pData.PHQ15_04 + 
            pData.PHQ15_05 + pData.PHQ15_06 + pData.PHQ15_07 + pData.PHQ15_08 + pData.PHQ15_09 + 
            pData.PHQ15_10 + pData.PHQ15_11 + pData.PHQ15_12 + pData.PHQ15_13 + pData.PHQ15_14 + pData.PHQ15_15);
     
    },    
 };
 

 var PHQ15_instruct = {
    type: "html-keyboard-response",
    stimulus: "<p class='image'><img style='width:256px; height:256px;' src='/assets/questionnaire.png' /></p>",
    choices: ['ArrowRight'], 
    prompt: "<p class='description'>We'd like you " +
            "to answer some questions about any unpleasant body sensations you may have.</p><br>" + 
            "<p class='description'>Press <em_black>RIGHT ARROW</em_black> to continue.</p>",    
    post_trial_gap: 500
};

 var PHQ15_node ={
    timeline: [PHQ15_instruct, PHQ15_all],
    on_timeline_start: function(){resetLogVars();},
    on_timeline_finish: function(){        
        
        saveSessionData2("questionnaire_PHQ15");
        
    },

};
