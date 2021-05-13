/*
Rational‐Experiential Inventory–40 (Pacini & Epstein, 1999)
*/

var REI_items = [     
    "1 - Definitely True of Myself", 
    "2", 
    "3", 
    "4",
    "5 - Definitely Not True of Myself"
  ];
  

var REI_Ability = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements. ' +
                'Using the following scale, please rate the extent that these items refer to you.</p>',
    questions: [      
      
    /*
    Rational Ability Subscale (all 40 items are randomized, but the 4 subscales are presented here as individual chunks )
    */
    {prompt: "I’m not that good at figuring out complicated problems", name: 'RA_01', labels: REI_items, required: true},
    {prompt: "I am not very good at solving problems that require careful logical analysis", name: 'RA_02', labels: REI_items, required: true},
    {prompt: "I am not a very analytical thinker", name: 'RA_03', labels: REI_items, required: true},
    {prompt: "Reasoning things out carefully is not one of my strong points", name: 'RA_04', labels: REI_items, required: true},          
    {prompt: "I don’t reason well under pressure", name: 'RA_05', labels: REI_items, required: true},  
    {prompt: "I am much better at figuring things out logically than most people", name: 'RA_06', labels: REI_items, required: true},  
    {prompt: "I have a logical mind", name: 'RA_07', labels: REI_items, required: true},  
    {prompt: "I have no problem thinking things through carefully", name: 'RA_08', labels: REI_items, required: true},  
    {prompt: "Using logic usually works well for me in figuring out problems in my life", name: 'RA_09', labels: REI_items, required: true},  
    {prompt: "I usually have clear, explainable reasons for my decisions", name: 'RA_10', labels: REI_items, required: true},  
    ],
    randomize_question_order: true,
    scale_width: scaleWidth,  

    on_finish: function(data){
        pData.RA_01 = data.response.RA_01;
        pData.RA_02 = data.response.RA_02;
        pData.RA_03 = data.response.RA_03;
        pData.RA_04 = data.response.RA_04;
        pData.RA_05 = data.response.RA_05;
        pData.RA_06 = data.response.RA_06;
        pData.RA_07 = data.response.RA_07;
        pData.RA_08 = data.response.RA_08;
        pData.RA_09 = data.response.RA_09;
        pData.RA_10 = data.response.RA_10;
    },    
};            

var REI_RationalEngagement = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements. ' +
                'Using the following scale, please rate the extent that these items refer to you.</p>',
    questions: [
    /*
    Rational Engagement Subscale 
    */
         
        {prompt: "I try to avoid situations that require thinking in depth about something", name: 'RE_01', labels: REI_items, required: true},
        {prompt: "I enjoy intellectual challenges", name: 'RE_02', labels: REI_items, required: true},
        {prompt: "I don’t like to have to do a lot of thinking", name: 'RE_03', labels: REI_items, required: true},
        {prompt: "I enjoy solving problems that require hard thinking", name: 'RE_04', labels: REI_items, required: true},          
        {prompt: "Thinking is not my idea of an enjoyable activity", name: 'RE_05', labels: REI_items, required: true},  
        {prompt: "I prefer complex problems to simple problems", name: 'RE_06', labels: REI_items, required: true},  
        {prompt: "Thinking hard and for a long time about something gives me little satisfaction", name: 'RE_07', labels: REI_items, required: true},  
        {prompt: "I enjoy thinking in abstract terms", name: 'RE_08', labels: REI_items, required: true},  
        {prompt: "Knowing the answer without having to understand the reasoning behind it is good enough for me", name: 'RE_09', labels: REI_items, required: true},
        {prompt: "Learning new ways to think would be very appealing to me", name: 'RE_10', labels: REI_items, required: true},  
    ],
    randomize_question_order: true,
    scale_width: scaleWidth,

    on_finish: function(data){
        pData.RE_01 = data.response.RE_01;
        pData.RE_02 = data.response.RE_02;
        pData.RE_03 = data.response.RE_03;
        pData.RE_04 = data.response.RE_04;
        pData.RE_05 = data.response.RE_05;
        pData.RE_06 = data.response.RE_06;
        pData.RE_07 = data.response.RE_07;
        pData.RE_08 = data.response.RE_08;
        pData.RE_09 = data.response.RE_09;
        pData.RE_10 = data.response.RE_10;
    },    
};                       
        
var REI_ExperientialAbility = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements. ' +
                'Using the following scale, please rate the extent that these items refer to you.</p>',
    questions: [        
    /*
    Experiental Ability Subscale 
    */        
        {prompt: "I don’t have a very good sense of intuition", name: 'EA_01', labels: REI_items, required: true},
        {prompt: "Using my gut feelings usually works well for me in figuring out problems in my life", name: 'EA_02', labels: REI_items, required: true},
        {prompt: "I believe in trusting my hunches", name: 'EA_03', labels: REI_items, required: true},
        {prompt: "I trust my initial feelings about people", name: 'EA_04', labels: REI_items, required: true},          
        {prompt: "When it comes to trusting people, I can usually rely on my gut feelings", name: 'EA_05', labels: REI_items, required: true},  
        {prompt: "If I were to rely on my gut feelings, I would often make mistakes", name: 'EA_06', labels: REI_items, required: true},  
        {prompt: "I hardly ever go wrong when I listen to my deepest gut feelings to find an answer", name: 'EA_07', labels: REI_items, required: true},  
        {prompt: "My snap judgments are probably not as good as most people’s", name: 'EA_08', labels: REI_items, required: true},  
        {prompt: "I can usually feel when a person is right or wrong, even if I can’t explain how I know", name: 'EA_09', labels: REI_items, required: true},
        {prompt: "I suspect my hunches are inaccurate as often as they are accurate", name: 'EA_10', labels: REI_items, required: true},  
    ],
    randomize_question_order: true,
    scale_width: scaleWidth,
        
    on_finish: function(data){    
        pData.EA_01 = data.response.EA_01;
        pData.EA_02 = data.response.EA_02;
        pData.EA_03 = data.response.EA_03;
        pData.EA_04 = data.response.EA_04;
        pData.EA_05 = data.response.EA_05;
        pData.EA_06 = data.response.EA_06;
        pData.EA_07 = data.response.EA_07;
        pData.EA_08 = data.response.EA_08;
        pData.EA_09 = data.response.EA_09;
        pData.EA_10 = data.response.EA_10;
    },    
};
   
var REI_ExperientialEngagement = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements. ' +
                'Using the following scale, please rate the extent that these items refer to you.</p>',
    questions: [

 /*
Experiental Engagement Subscale 
*/
        {prompt: "I like to rely on my intuitive impressions", name: 'EE_01', labels: REI_items, required: true},
        {prompt: "Intuition can be a very useful way to solve problems", name: 'EE_02', labels: REI_items, required: true},
        {prompt: "I often go by my instincts when deciding on a course of action", name: 'EE_03', labels: REI_items, required: true},
        {prompt: "I don’t like situations in which I have to rely on intuition", name: 'EE_04', labels: REI_items, required: true},          
        {prompt: "I think there are times when one should rely on one’s intuition", name: 'EE_05', labels: REI_items, required: true},  
        {prompt: "I think it is foolish to make important decisions based on feelings", name: 'EE_06', labels: REI_items, required: true},  
        {prompt: "I don’t think it is a good idea to rely on one’s intuition for important decisions", name: 'EE_07', labels: REI_items, required: true},  
        {prompt: "I generally don’t depend on my feelings to help me make decisions", name: 'EE_08', labels: REI_items, required: true},  
        {prompt: "I would not want to depend on anyone who described himself or herself as intuitive", name: 'EE_09', labels: REI_items, required: true},
        {prompt: "I tend to use my heart as a guide for my actions", name: 'EE_10', labels: REI_items, required: true},  
    ],
    randomize_question_order: true,
    scale_width: scaleWidth,

    on_finish: function(data){
        pData.EE_01 = data.response.EE_01;
        pData.EE_02 = data.response.EE_02;
        pData.EE_03 = data.response.EE_03;
        pData.EE_04 = data.response.EE_04;
        pData.EE_05 = data.response.EE_05;
        pData.EE_06 = data.response.EE_06;
        pData.EE_07 = data.response.EE_07;
        pData.EE_08 = data.response.EE_08;
        pData.EE_09 = data.response.EE_09;
        pData.EE_10 = data.response.EE_10;

    },    
 };
 

 var REI_instruct = {
    type: "html-keyboard-response",
    stimulus: "<p class='image'><img style='width:256px; height:256px;' src='/assets/questionnaire.png' /></p>",
    choices: ['ArrowRight'], 
    prompt: "<p class='description'>We'd like you " +
            "to answer some questions about your thinking style and decision making.</p><br>" + 
            "<p class='description'>Press <em_black>RIGHT ARROW</em_black> to continue.</p>",    
    post_trial_gap: 500
};

var REI_node ={
    timeline: [REI_instruct, REI_Ability, REI_RationalEngagement, REI_ExperientialAbility, REI_ExperientialEngagement],
    on_timeline_start: function(){ resetLogVars(); },
    on_timeline_finish: function(){        
            /*
        #inverse score for:
        (RA_01, RA_02, RA_03, RA_04, RA_05,
        RE_01,RE_03,RE_05, RE_07, RE_09,
        EA_01, EA_06, EA_08, EA_10,
        EE_04, EE_06, EE_07, EE_08, EE_09)

        Could definitely pull from list here but coded it this way because wasn't sure the syntax would work.
        */
        
        pData.RA_inv_01 = 6 - pData.RA_01;
        pData.RA_inv_02 = 6 - pData.RA_02;
        pData.RA_inv_03 = 6 - pData.RA_03;
        pData.RA_inv_04 = 6 - pData.RA_04;
        pData.RA_inv_05 = 6 - pData.RA_05;

        pData.RE_inv_01 = 6 - pData.RE_01;
        pData.RE_inv_03 = 6 - pData.RE_03;
        pData.RE_inv_05 = 6 - pData.RE_05;
        pData.RE_inv_07 = 6 - pData.RE_07;
        pData.RE_inv_09 = 6 - pData.RE_09;

        pData.EA_inv_01 = 6 - pData.EA_01;
        pData.EA_inv_06 = 6 - pData.EA_06;
        pData.EA_inv_08 = 6 - pData.EA_08;
        pData.EA_inv_10 = 6 - pData.EA_10;

        pData.EE_inv_04 = 6 - pData.EE_04;
        pData.EE_inv_06 = 6 - pData.EE_06;
        pData.EE_inv_07 = 6 - pData.EE_07;
        pData.EE_inv_08 = 6 - pData.EE_08;
        pData.EE_inv_09 = 6 - pData.EE_09;

        pData.REI_RA = (pData.RA_inv_01 + pData.RA_inv_02 + pData.RA_inv_03 + pData.RA_inv_04 + pData.RA_inv_05 + pData.RA_06 + pData.RA_07 + pData.RA_08 + pData.RA_09 + pData.RA_10)/10;
        pData.REI_RE = (pData.RE_inv_01 + pData.RE_inv_03 + pData.RE_inv_05 + pData.RE_inv_07 + pData.RE_inv_09 + pData.RE_02 + pData.RE_04 + pData.RE_06 + pData.RE_08 + pData.RE_10)/10;
        pData.REI_EA = (pData.EA_inv_01 + pData.EA_inv_06 + pData.EA_inv_08 + pData.EA_inv_10 + pData.EA_02 + pData.EA_03 + pData.EA_04 + pData.EA_05 + pData.EA_07 + pData.EA_09)/10;
        pData.REI_EE = (pData.EE_inv_04 + pData.EE_inv_06 + pData.EE_inv_07 + pData.EE_inv_08 + pData.EE_inv_09 + pData.EE_01 + pData.EE_02 + pData.EE_03 + pData.EE_05 + pData.EE_10)/10;      
        saveSessionData2("questionnaire_REI");
        
    },
};
