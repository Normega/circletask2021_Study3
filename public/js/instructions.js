// INSTRUCTIONS

let logo = "<p class='image'><img style='width:502px; height:130px;' src='/assets/CombinedLogo.png' /></p>";

// welcome message for experiment 1
var welcome_trial = {
    type: "html-keyboard-response",
    stimulus: logo,
    choices: ['ArrowRight'], //'rightarrow' stopped working
    prompt: "<p class='description'>Welcome to the study, please press <em_black>RIGHT ARROW</em_black> to continue.</p>",    
    post_trial_gap: 500
};


// welcome message for experiment 1
var debrief_trial = {
    type: "html-keyboard-response",
    stimulus: logo,
    choices: ['ArrowRight'], //'rightarrow' stopped working
    prompt: "<p class='description'> " +
    "<b>EXPERIMENT COMPLETE: DEBRIEFING INFORMATION</b>"+
    "</p><br><p class='description'> " +
    "Thanks for completing the study! It focused on how we come to know what is happening in our own bodies. Compared to the external senses, little is known about interoception, the sense of the body’s internal state. This research employs a novel approach to the measurement of interoceptive attention." +
    "</p><br><p class='description'> " +
    "The main dependent measure in this task was your ability to detect changes in your breathing when you matched your breath to the circle. We were interested in how reliable this estimate is, which is why we had you do the task twice. We are also interested whether your ability to detect changes in the breath could predict risk taking behavior in the ballon task." +
    "</p><br><p class='description'> " +
    "This research helps to develop tools for understanding body sensation, which could help predict a person's sense of well-being. Breath integration may be a useful way to probe such awareness relative to other tasks that are already used in research." + 
   "</p><br>"+
    "<p style='text-align:center;'>Please press <strong>RIGHT ARROW</strong> to continue.</p>",    
    post_trial_gap: 500
};

// end message
var postTrial = {
    type: "html-keyboard-response",
    choices: ['ArrowRight'],
    stimulus:
        "<p style='text-align:center;'> The experiment has concluded. Your authentation number is <b> ${x} </b>. Please make a note of it. </p>" +
        "<p style='text-align:center;'>Please press <strong>RIGHT ARROW</strong> to continue.</p>"    ,
    post_trial_gap: 500,
    authentation: authnum
};

var newtask_trial = {
    type: "html-keyboard-response",
    stimulus: "<p><strong>!!!</strong></p>",
    choices: ['ArrowRight'],
    prompt: "<p style='text-align:center;'>We are now going to ask you to do a similar breathing task.</p>" + 
            "<p style='text-align:center;'>However, the task instructions are slightly different. Please <strong>" +
            "READ CAREFULLY</strong> so you can understand how the second task differs from the first.</p>" + 
            "<p style='text-align:center;'>Please press <strong>RIGHT ARROW</strong> to continue.</p>"    
};


var goodbye_trial = {
    type: "html-keyboard-response",
    stimulus: logo,
    choices: ['ArrowRight'],
    prompt: "<p style='text-align:center;'>You have completed the Study.</p>" + 
            "<p style='text-align:center;'>Thanks for your participation.</p>" + 
            "<p style='text-align:center;'>Please click <a href='https://app.prolific.co/submissions/complete?cc=85996CFD'>" +
            "here </a> to confirm your completion with Prolific.</p>" +            
            "<p style='text-align:center;'>Please press <strong>RIGHT ARROW</strong> to exit.</p>"    
};

instruct_viewpulse = "<p class='description'>You will see the circle <em_blue>GROWING</em_blue> and " + 
"<em_red>SHRINKING.</em_red></p>";

instruct_breathealong = "<p class='description'><em_blue>BREATHE IN</em_blue> when the circle <em_blue>GROWS</em_blue>" +
" and <em_red>BREATHE OUT</em_red> when the circle <em_red>SHRINKS.</em_red></p>";

instruct_keypressalong = "<p class='description'>Press <em_blue>UP</em_blue> when the circle <em_blue>GROWS</em_blue>" +
" and <em_red>DOWN</em_red> when the circle <em_red>SHRINKS.</em_red></p>";

instruct_keypressalongPic = "<p>  <img style='width:500px; height:500px;' src='./assets/respiration_instruct.jpg'" +
                        "alt='Breathe with the circle'> </p>"

instruct_getready = "<p><b>Get Ready</b></p>"+
"<p class='description'>When you are ready, place your fingers on the <em_blue>UP ARROW</em_blue> and " +
"<em_red>DOWN ARROW</em_red> arrow keys.</p>" +
"<p class='description'>Please press <em_black>'RIGHT ARROW'</em_black> to begin!</p>";

instruct_whennotice = "<p class='description'>If you notice a change in your breathing, <em_black>immediately</em_black> " +
"press the <em_black> RIGHT ARROW.</em_black></p>" + 
"<p>However, the circle won't always change speeds, so don't press unless you are sure.</p>"

instruct_whennoticequick = "<p class='description'>Press <em_blue>RIGHT ARROW</em_blue> if " +
"you notice your breathing change speeds.</p>"