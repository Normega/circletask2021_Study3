/*
GA-7 

*/

var GA7_items = [
     
    "0 - not at all", 
    "1 - several days", 
    "2 - more than half the days", 
    "3 - nearly every day"
  ];
  

var GA7_all = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'How often have you been bothered by the following over the past 2 weeks?.</p>',
    questions: [
      
/*
Items are pre-ordered in this scale so do not randomize 
*/

        {prompt: "Feeling nervous, anxious or on edge?", name: 'GA7_01', labels: GA7_items, required: true},
        {prompt: "Not being able to stop or control worrying?", name: 'GA7_02', labels: GA7_items, required: true},
        {prompt: "Worrying too much about different things?", name: 'GA7_03', labels: GA7_items, required: true},
        {prompt: "Trouble relaxing?", name: 'GA7_04', labels: GA7_items, required: true},          
        {prompt: "Being so restless that it is hard to sit still?", name: 'GA7_05', labels: GA7_items, required: true},  
        {prompt: "Becoming easily annoyed or irritable?", name: 'GA7_06', labels: GA7_items, required: true},  
        {prompt: "Feeling afraid as if something awful might happen?", name: 'GA7_07', labels: GA7_items, required: true},  
       
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    
    
    on_finish: function(data){
        pData.GA7_01 = data.response.GA7_01;
        pData.GA7_02 = data.response.GA7_02;
        pData.GA7_03 = data.response.GA7_03;
        pData.GA7_04 = data.response.GA7_04;
        pData.GA7_05 = data.response.GA7_05;
        pData.GA7_06 = data.response.GA7_06;
        pData.GA7_07 = data.response.GA7_07;

 
        pData.GA7_total = (pData.GA7_01 + pData.GA7_02 + pData.GA7_03 + pData.GA7_04 + 
            pData.GA7_05 + pData.GA7_06 + pData.GA7_07 );
     
    },    
 };
 

 var GA7_instruct = {
    type: "html-keyboard-response",
    stimulus: "<p class='image'><img style='width:256px; height:256px;' src='/assets/questionnaire.png' /></p>",
    choices: ['ArrowRight'], 
    prompt: "<p class='description'>We'd like you " +
            "to answer some questions about feelings of anxiety.</p><br>" + 
            "<p class='description'>Press <em_black>RIGHT ARROW</em_black> to continue.</p>",    
    post_trial_gap: 500
};

 var GA7_node ={
    timeline: [GA7_instruct, GA7_all],
    on_timeline_start: function(){resetLogVars();},
    on_timeline_finish: function(){        
        
        saveSessionData2("questionnaire_GA7");
        
    },

};
