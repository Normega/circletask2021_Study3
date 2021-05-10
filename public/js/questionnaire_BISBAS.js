/*
BIS-BAS 

Carver, C. S., & White, T. L. (1994). Behavioral inhibition, behavioral activation, and affective responses to impending reward and punishment: The BIS/BAS scales. Journal of Personality and Social Psychology, 67, 319-333


https://local.psy.miami.edu/people/faculty/ccarver/availbale-self-report-instruments/bisbas-scales/#:~:text=A%20behavioral%20approach%20system%20(BAS,move%20away%20from%20something%20unpleasant.

*/

var BISBAS_items = [
     
    "1 - very true for me", 
    "2 - somewhat true for me", 
    "3 - somewhat false for me", 
    "4 - very false for me"
  ];
  

var BISBAS_all = {
    type: 'survey-likert',
    preamble:   '<p>Below you will find a list of statements.' +
                'Using the following scale, indicate how much you agree or disagree with what the statement says.</p>',
    questions: [
      
      
/*
Items are pre-ordered in this scale so do not randomize 
*/

        {prompt: "1.  A person's family is the most important thing in life.", name: 'BISBAS_01', labels: BISBAS_items, required: true},
        {prompt: "2.  Even if something bad is about to happen to me, I rarely experience fear or nervousness.", name: 'BISBAS_02', labels: BISBAS_items, required: true},
        {prompt: "3.  I go out of my way to get things I want.", name: 'BISBAS_03', labels: BISBAS_items, required: true},
        {prompt: "4.  When I'm doing well at something I love to keep at it.", name: 'BISBAS_04', labels: BISBAS_items, required: true},          
        {prompt: "5.  I'm always willing to try something new if I think it will be fun.", name: 'BISBAS_05', labels: BISBAS_items, required: true},  
        {prompt: "6.  How I dress is important to me.", name: 'BISBAS_06', labels: BISBAS_items, required: true},  
        {prompt: "7.  When I get something I want, I feel excited and energized.", name: 'BISBAS_07', labels: BISBAS_items, required: true},  
        {prompt: "8.  Criticism or scolding hurts me quite a bit.", name: 'BISBAS_08', labels: BISBAS_items, required: true},  
        {prompt: "9.  When I want something I usually go all-out to get it.", name: 'BISBAS_09', labels: BISBAS_items, required: true},  
        {prompt: "10.  I will often do things for no other reason than that they might be fun.", name: 'BISBAS_10', labels: BISBAS_items, required: true},  
         
        
        {prompt: "11.  It's hard for me to find the time to do things such as get a haircut.", name: 'BISBAS_11', labels: BISBAS_items, required: true},
        {prompt: "12.  If I see a chance to get something I want I move on it right away.", name: 'BISBAS_12', labels: BISBAS_items, required: true},
        {prompt: "13.  I feel pretty worried or upset when I think or know somebody is angry at me.", name: 'BISBAS_13', labels: BISBAS_items, required: true},
        {prompt: "14.  When I see an opportunity for something I like I get excited right away.", name: 'BISBAS_14', labels: BISBAS_items, required: true},          
        {prompt: "15.  I often act on the spur of the moment.", name: 'BISBAS_15', labels: BISBAS_items, required: true},  
        {prompt: "16.  If I think something unpleasant is going to happen I usually get pretty 'worked up.'", name: 'BISBAS_16', labels: BISBAS_items, required: true},  
        {prompt: "17.  I often wonder why people act the way they do.", name: 'BISBAS_17', labels: BISBAS_items, required: true},  
        {prompt: "18.  When good things happen to me, it affects me strongly.", name: 'BISBAS_18', labels: BISBAS_items, required: true},  
        {prompt: "19.  I feel worried when I think I have done poorly at something important.", name: 'BISBAS_19', labels: BISBAS_items, required: true},
        {prompt: "20.  I crave excitement and new sensations.", name: 'BISBAS_20', labels: BISBAS_items, required: true},  
        
        {prompt: "21.  When I go after something I use a 'no holds barred' approach.", name: 'BISBAS_21', labels: BISBAS_items, required: true},  
        {prompt: "22.  I have very few fears compared to my friends.", name: 'BISBAS_22', labels: BISBAS_items, required: true},  
        {prompt: "23.  It would excite me to win a contest.", name: 'BISBAS_23', labels: BISBAS_items, required: true},  
        {prompt: "24.  I worry about making mistakes.", name: 'BISBAS_24', labels: BISBAS_items, required: true},  
  
    ],
    randomize_question_order: false,
    scale_width: scaleWidth,
    
    
    on_finish: function(data){
        pData.BISBAS_01 = data.response.BISBAS_01;
        pData.BISBAS_02 = data.response.BISBAS_02;
        pData.BISBAS_03 = data.response.BISBAS_03;
        pData.BISBAS_04 = data.response.BISBAS_04;
        pData.BISBAS_05 = data.response.BISBAS_05;
        pData.BISBAS_06 = data.response.BISBAS_06;
        pData.BISBAS_07 = data.response.BISBAS_07;
        pData.BISBAS_08 = data.response.BISBAS_08;
        pData.BISBAS_09 = data.response.BISBAS_09;
        pData.BISBAS_10 = data.response.BISBAS_10;
        
        pData.BISBAS_11 = data.response.BISBAS_11;
        pData.BISBAS_12 = data.response.BISBAS_12;
        pData.BISBAS_13 = data.response.BISBAS_13;
        pData.BISBAS_14 = data.response.BISBAS_14;
        pData.BISBAS_15 = data.response.BISBAS_15;
        pData.BISBAS_16 = data.response.BISBAS_16;
        pData.BISBAS_17 = data.response.BISBAS_17;
        pData.BISBAS_18 = data.response.BISBAS_18;
        pData.BISBAS_19 = data.response.BISBAS_19;
        pData.BISBAS_20 = data.response.BISBAS_20;
        
        pData.BISBAS_21 = data.response.BISBAS_21;
        pData.BISBAS_22 = data.response.BISBAS_22;
        pData.BISBAS_23 = data.response.BISBAS_23;
        pData.BISBAS_24 = data.response.BISBAS_24;
        
 
        
/*
#inverse score for:
(BISBAS_02, BISBAS_22)

*/
 
        pData.BISBAS_inv_02 = 5 - pData.BISBAS_02;
        pData.BISBAS_inv_22 = 5 - pData.BISBAS_22;
        
        
        pData.BAS_Drive = (pData.BISBAS_03 + pData.BISBAS_09 + pData.BISBAS_12 + pData.BISBAS_21)/4;
        
        pData.BAS_FunSeeking =  (pData.BISBAS_05 + pData.BISBAS_10 + pData.BISBAS_15 + pData.BISBAS_20 )/4;

        pData.BAS_RewardResponsivenes =  (pData.BISBAS_04 + pData.BISBAS_07 + pData.BISBAS_14 + pData.BISBAS_23 )/4;
        
        pData.BIS =  (pData.BISBAS_inv_02 + pData.BISBAS_08 + pData.BISBAS_13 + pData.BISBAS_16 + pData.BISBAS_19 + pData.BISBAS_inv_22 + pData.BISBAS_24 )/7;
    },    
 };
 

 var BISBAS_instruct = {
    type: "html-keyboard-response",
    stimulus: "<p class='image'><img style='width:256px; height:256px;' src='/assets/questionnaire.png' /></p>",
    choices: ['ArrowRight'], 
    prompt: "<p class='description'>We'd like you to answer some questions about what motivates you.</p><br>" + 
            "<p class='description'>Press <em_black>RIGHT ARROW</em_black> to continue.</p>",    
    post_trial_gap: 500
};

 var BISBAS_node ={
    timeline: [BISBAS_instruct, BISBAS_all],
    on_timeline_start: function(){resetLogVars();},
    on_timeline_finish: function(){        
        
        saveSessionData2("questionnaire_BISBAS");
        
    },

};
