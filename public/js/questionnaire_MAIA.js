/*
Mehling WE, Acree M, Stewart A, Silas J, Jones A (2018) 
The Multidimensional Assessment of Interoceptive Awareness, Version 2 (MAIA-2). 
PLoS ONE 13(12): e0208034.
*/

var MAIA_items = [
    "0 - Never", 
    "1", 
    "2", 
    "3", 
    "4",
    "5 - Always"
  ];
  

var MAIA_noticing = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'Please indicate how often each statement applies to you generally in daily life.</p>',
    questions: [
        {prompt: "1. When I am tense I notice where the tension is located in my body.", name: 'MAIA_01', labels: MAIA_items, required: true},
        {prompt: "2. I notice when I am uncomfortable in my body.", name: 'MAIA_02', labels: MAIA_items, required: true},
        {prompt: "3. I notice where in my body I am comfortable.", name: 'MAIA_03', labels: MAIA_items, required: true},
        {prompt: "4. I notice changes in my breathing, such as whether it slows down or speeds up.", name: 'MAIA_04', labels: MAIA_items, required: true},            
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    on_finish: function(data){
        pData.MAIA_01 = data.response.MAIA_01;
        pData.MAIA_02 = data.response.MAIA_02;
        pData.MAIA_03 = data.response.MAIA_03;
        pData.MAIA_04 = data.response.MAIA_04;
        pData.MAIA_noticing = (pData.MAIA_01 + pData.MAIA_02 + pData.MAIA_03 + pData.MAIA_04)/4;
    },    
 };

 var MAIA_notdistracting = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'Please indicate how often each statement applies to you generally in daily life.</p>',
    questions: [
        {prompt: "5. I ignore physical tension or discomfort until they become more severe.", name: 'MAIA_05', labels: MAIA_items, required: true},
        {prompt: "6. I distract myself from sensations of discomfort. ", name: 'MAIA_06', labels: MAIA_items, required: true},
        {prompt: "7. When I feel pain or discomfort, I try to power through it. ", name: 'MAIA_07', labels: MAIA_items, required: true},
        {prompt: "8. I try to ignore pain ", name: 'MAIA_08', labels: MAIA_items, required: true},
        {prompt: "9. I push feelings of discomfort away by focusing on something ", name: 'MAIA_09', labels: MAIA_items, required: true},
        {prompt: "10. When I feel unpleasant body sensations, I occupy myself with something else so I don’t have to feel them.", name: 'MAIA_10', labels: MAIA_items, required: true},   
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    on_finish: function(data){
        pData.MAIA_05 = data.response.MAIA_05;
        pData.MAIA_06 = data.response.MAIA_06;
        pData.MAIA_07 = data.response.MAIA_07;
        pData.MAIA_08 = data.response.MAIA_08;
        pData.MAIA_09 = data.response.MAIA_09;
        pData.MAIA_10 = data.response.MAIA_10;
        pData.MAIA_notdistracting = (6 - pData.MAIA_05 + 6 - pData.MAIA_06 + 6 - pData.MAIA_07 + 
                                    6 - pData.MAIA_08 + 6 - pData.MAIA_09 + 6 - pData.MAIA_10)/6;
    },
 };
 
 var MAIA_notworrying = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'Please indicate how often each statement applies to you generally in daily life.</p>',
    questions: [
        {prompt: "11. When I feel physical pain, I become upset.", name: 'MAIA_11', labels: MAIA_items, required: true},
        {prompt: "12. I start to worry that something is wrong if I feel any discomfort.", name: 'MAIA_12', labels: MAIA_items, required: true},
        {prompt: "13. I can notice an unpleasant body sensation without worrying about it.", name: 'MAIA_13', labels: MAIA_items, required: true},
        {prompt: "14. I can stay calm and not worry when I have feelings of discomfort or pain.", name: 'MAIA_14', labels: MAIA_items, required: true},
        {prompt: "15. When I am in discomfort or pain I can’t get it out of my mind", name: 'MAIA_15', labels: MAIA_items, required: true},            
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    on_finish: function(data){
        pData.MAIA_11 = data.response.MAIA_11;
        pData.MAIA_12 = data.response.MAIA_12;
        pData.MAIA_13 = data.response.MAIA_13;
        pData.MAIA_14 = data.response.MAIA_14;
        pData.MAIA_15 = data.response.MAIA_15;
        pData.MAIA_notworrying = (6 - pData.MAIA_11 + 6 - pData.MAIA_12 + 
            pData.MAIA_13 + pData.MAIA_14 + 6 - pData.MAIA_15)/5;
    },
 };

 var MAIA_attentionregulation = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'Please indicate how often each statement applies to you generally in daily life.</p>',
    questions: [
        {prompt: "16. I can pay attention to my breath without being distracted by things happening around me.", name: 'MAIA_16', labels: MAIA_items, required: true},
        {prompt: "17. I can maintain awareness of my inner bodily sensations even when there is a lot going on around me.", name: 'MAIA_17', labels: MAIA_items, required: true},
        {prompt: "18. When I am in conversation with someone, I can pay attention", name: 'MAIA_18', labels: MAIA_items, required: true},
        {prompt: "19. I can return awareness to my body if I am distracted.", name: 'MAIA_19', labels: MAIA_items, required: true},
        {prompt: "20. I can refocus my attention from thinking to sensing my body.", name: 'MAIA_20', labels: MAIA_items, required: true},
        {prompt: "21. I can maintain awareness of my whole body even when a part of me is in pain or discomfort.", name: 'MAIA_21', labels: MAIA_items, required: true},
        {prompt: "22. I am able to consciously focus on my body as a whole.", name: 'MAIA_22', labels: MAIA_items, required: true},
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    on_finish: function(data){
        pData.MAIA_16 = data.response.MAIA_16;
        pData.MAIA_17 = data.response.MAIA_17;
        pData.MAIA_18 = data.response.MAIA_18;
        pData.MAIA_19 = data.response.MAIA_19;
        pData.MAIA_20 = data.response.MAIA_20;
        pData.MAIA_21 = data.response.MAIA_21;
        pData.MAIA_22 = data.response.MAIA_22;
        pData.MAIA_attentionregulation = (pData.MAIA_16 + pData.MAIA_17 + pData.MAIA_18 + 
            pData.MAIA_19 + pData.MAIA_20 + pData.MAIA_21 + pData.MAIA_22)/7;
    },
 };
 
 var MAIA_emoaware = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'Please indicate how often each statement applies to you generally in daily life.</p>',
    questions: [
        {prompt: "23. I notice how my body changes when I am angry.", name: 'MAIA_23', labels: MAIA_items, required: true},
        {prompt: "24. When something is wrong in my life I can feel it in my body.", name: 'MAIA_24', labels: MAIA_items, required: true},
        {prompt: "25. I notice that my body feels different after a peaceful experience.", name: 'MAIA_25', labels: MAIA_items, required: true},
        {prompt: "26. I notice that my breathing becomes free and easy when I feel comfortable.", name: 'MAIA_26', labels: MAIA_items, required: true},
        {prompt: "27. I notice how my body changes when I feel happy / joyful.", name: 'MAIA_27', labels: MAIA_items, required: true},    
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    on_finish: function(data){
        pData.MAIA_23 = data.response.MAIA_23;
        pData.MAIA_24 = data.response.MAIA_24;
        pData.MAIA_25 = data.response.MAIA_25;
        pData.MAIA_26 = data.response.MAIA_26;
        pData.MAIA_27 = data.response.MAIA_27;
        pData.MAIA_emoaware = (pData.MAIA_23 + pData.MAIA_24 + pData.MAIA_25 + pData.MAIA_26 + pData.MAIA_27)/5;
    },
 };
 
 var MAIA_selfreg = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'Please indicate how often each statement applies to you generally in daily life.</p>',
    questions: [
        {prompt: "28. When I feel overwhelmed I can find a calm place inside.", name: 'MAIA_28', labels: MAIA_items, required: true},
        {prompt: "29. When I bring awareness to my body I feel a sense of calm.", name: 'MAIA_29', labels: MAIA_items, required: true},
        {prompt: "30. I can use my breath to reduce tension.", name: 'MAIA_30', labels: MAIA_items, required: true},
        {prompt: "31. When I am caught up in thoughts, I can calm my mind by focusing on my body/breathing.", name: 'MAIA_31', labels: MAIA_items, required: true},            
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    on_finish: function(data){
        pData.MAIA_28 = data.response.MAIA_28;
        pData.MAIA_29 = data.response.MAIA_29;
        pData.MAIA_30 = data.response.MAIA_30;
        pData.MAIA_31 = data.response.MAIA_31;
        pData.MAIA_selfreg = (pData.MAIA_28 + pData.MAIA_29 + pData.MAIA_30 + pData.MAIA_31)/4;
    },
 };

 var MAIA_bodylisten = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'Please indicate how often each statement applies to you generally in daily life.</p>',
    questions: [
        {prompt: "32. I listen for information from my body about my emotional state.", name: 'MAIA_32', labels: MAIA_items, required: true},
        {prompt: "33. When I am upset, I take time to explore how my body feels.", name: 'MAIA_33', labels: MAIA_items, required: true},
        {prompt: "34. I listen to my body to inform me about what to do.", name: 'MAIA_34', labels: MAIA_items, required: true},
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    on_finish: function(data){
        pData.MAIA_32 = data.response.MAIA_32;
        pData.MAIA_33 = data.response.MAIA_33;
        pData.MAIA_34 = data.response.MAIA_34;
        pData.MAIA_bodylisten = (pData.MAIA_32 + pData.MAIA_33 + pData.MAIA_34)/3;
    },
 };

 var MAIA_trusting = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'Please indicate how often each statement applies to you generally in daily life.</p>',
    questions: [
        {prompt: "35. I am at home in my body.", name: 'MAIA_35', labels: MAIA_items, required: true},
        {prompt: "36. I feel my body is a safe place.", name: 'MAIA_36', labels: MAIA_items, required: true},
        {prompt: "37. I trust my body sensations.", name: 'MAIA_37', labels: MAIA_items, required: true},
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    on_finish: function(data){
        pData.MAIA_35 = data.response.MAIA_35;
        pData.MAIA_36 = data.response.MAIA_36;
        pData.MAIA_37 = data.response.MAIA_37;
        pData.MAIA_trusting = (pData.MAIA_35 + pData.MAIA_36 + pData.MAIA_37)/3;
    },
 };

 var MAIA_instruct = {
    type: "html-keyboard-response",
    stimulus: "<p class='image'><img style='width:256px; height:256px;' src='/assets/questionnaire.png' /></p>",
    choices: ['ArrowRight'], 
    prompt: "<p class='description'>You've completed the first task! We now have a break where we'd like you " +
            "to answer some questions about your feelings of body awareness.</p><br>" + 
            "<p class='description'>Press <em_black>RIGHT ARROW</em_black> to continue.</p>",    
    post_trial_gap: 500
};

 var MAIA_node ={
    timeline: [MAIA_instruct, MAIA_noticing, MAIA_notdistracting, MAIA_notworrying, MAIA_attentionregulation,
                MAIA_emoaware, MAIA_selfreg, MAIA_bodylisten, MAIA_trusting],
    on_timeline_start: function(){resetLogVars();},
    on_timeline_finish: function(){        
        pData.MAIA_total = pData.MAIA_01 + pData.MAIA_02 + pData.MAIA_03 + pData.MAIA_04 + 
            6 - pData.MAIA_05 + 6 - pData.MAIA_06 + 
                           6 - pData.MAIA_07 + 6 - pData.MAIA_08 + 6 - pData.MAIA_09 + 6 - pData.MAIA_10 + 6 - pData.MAIA_11 + 
                           6 - pData.MAIA_12 + pData.MAIA_13 + pData.MAIA_14 + 6 - pData.MAIA_15 + pData.MAIA_16 + pData.MAIA_17 + 
                           pData.MAIA_18 + pData.MAIA_19 + pData.MAIA_20 + pData.MAIA_21 + pData.MAIA_22 + pData.MAIA_23 + pData.MAIA_24 + 
                           pData.MAIA_25 + pData.MAIA_26 + pData.MAIA_27 + pData.MAIA_28 + pData.MAIA_29 + pData.MAIA_30 + pData.MAIA_31 + 
                           pData.MAIA_32 + pData.MAIA_33 + pData.MAIA_34 + pData.MAIA_35 + pData.MAIA_36 + pData.MAIA_37;
        saveSessionData2("questionnaire_MAIA");
        
    },

};
