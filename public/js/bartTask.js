jsPsych.plugins["bart-task"] = (function () {
    var plugin = {};

    plugin.info = {
        name: "bart-task",
        description: "",
        parameters: {
            stimulus: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: "Stimulus",
                default: undefined,
                description: "The HTML string to be displayed",
            },
            choices: {
                type: jsPsych.plugins.parameterType.KEYCODE,
                array: true,
                pretty_name: "Choices",
                default: ['arrowup','arrowdown'], // up and down
                description: "The keys the subject is allowed to press to respond to the stimulus.",
            },
            prompt: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: "Prompt",
                default: null,
                description: "Any content here will be displayed below the stimulus.",
            },
            stimulus_duration: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: "Stimulus duration",
                default: null,
                description: "How long to hide the stimulus.",
            },
            response_ends_trial: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: "Response ends trial",
                default: true,
                description:
                    "If true, trial will end when subject makes a response.",
            },            
            bartLimit: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: "Max Number of Pumps",
                default: 32,
                description: "Number of pumps before the balloon pops.",
            },
            pumps: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: "Pumps so far",
                default: 0,
                description:
                    "A count of the number of pumps made.",
            },
            trialNumber: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: "Trial Number",
                default: 1,
                description: "The current trial number of the circle task.",
            },            
            earnings: {
                type: jsPsych.plugins.parameterType.FLOAT,
                pretty_name: "Earnings",
                default: 0,
                description: "Current earnings.",
            },
        },
    };

    plugin.trial = function (display_element, trial) {               
        //console.log("Starting a ",trial.speed," trial...");
        //var totalFrames = 0; // keeping track of animation frames 

        var new_html =
            '<div id="jspsych-html-keyboard-response-stimulus">' +
            trial.stimulus +
            "</div>";

        // add prompt
        if (trial.prompt !== null) {
            new_html += trial.prompt;
        }

        // draw the plug in
        display_element.innerHTML = new_html;

        // for storing responses        
        let current_response = "none"; //no response logged to begin
          
        // function to end trial when it is time      
        var end_trial = function() {
            

            // kill any remaining setTimeout handlers
            jsPsych.pluginAPI.clearAllTimeouts();

            // kill keyboard listeners
            if (typeof keyboardListener !== "undefined") {
                jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
            }

            // gather the data to store for the trial
            var trial_data = {
                task: "BART Task",
                trialNumber: trial.trialNumber,
                bartLimit: trial.bartLimit,
                pumps: pumps,                
                earnings: earnings,
                burst: bursted
            };

            // clear the display
            display_element.innerHTML = "";

            // move on to the next trial and store trial data
            jsPsych.finishTrial(trial_data);
        };

        // response listener always listening for key presses and recording them
        var register_response = function (info) {            
            //console.log(info.key);
            //if (info.key == 38){
            if (jsPsych.pluginAPI.compareKeys('ArrowUp', info.key)){
                current_response = "pump";
            //} else if (info.key == 40){
            } else if (jsPsych.pluginAPI.compareKeys('ArrowDown', info.key)){
                current_response = "cashout";
            }
            //console.log(`Current response: ${current_response} `);
            //console.log(`Key ${info.key} pressed`);                      
        };
      
        // start the response listener
        if (trial.choices != jsPsych.NO_KEYS) {
            var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: register_response,
            valid_responses: trial.choices,
            rt_method: 'performance',
            persist: true,
            allow_held_key: false
            });
        }

        // hide stimulus if stimulus_duration is set
        if (trial.stimulus_duration !== null) {
            jsPsych.pluginAPI.setTimeout(function () {
                display_element.querySelector(
                    "#jspsych-html-keyboard-response-stimulus"
                ).style.visibility = "hidden";
            }, trial.stimulus_duration);
        }
      

        // setting up variables
        const bartLimit = trial.bartLimit;
        const startRadius = 25;
        const pumpRChange = 3;
        const pumpEarningsChange = 10;
        
        var pumps = 0;
        var earnings = 0;

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        const x = (canvas.width / 2);
        const y = (canvas.height / 2);                             
        var radius = startRadius;

        var doneTrial = false;    
        //console.log("BARTlimit: ", trial.bartLimit, "Trial Number: ", trial.trialNumber);

        function getGradient(){
            var gradient = ctx.createRadialGradient(
                x, y, 0,
                x, y, radius
            );
            //gradient.addColorStop(0, "white");
            //gradient.addColorStop("0.5", "#E80000");        
            gradient.addColorStop(0, "#00A2FF");
            gradient.addColorStop(0.9, "#0080C9");
            gradient.addColorStop(1, "#005586");
            return gradient
        }

        function drawBalloon() {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);

            // Fill with gradient
            ctx.fillStyle = getGradient();
            ctx.lineWidth = 16;
            ctx.fill();
            ctx.closePath(); 
            
            // triangle bit at the bottom
            ctx.beginPath();
            ctx.moveTo(x,y+radius);
            ctx.lineTo(x+15,y+radius+15);
            ctx.lineTo(x-15,y+radius+15);
            ctx.lineTo(x,y+radius);
            ctx.fillStyle = getGradient();
            ctx.lineWidth = 16;
            ctx.fill();
            ctx.closePath(); 

        }        

        function drawBurst() {   
            var angle = (Math.PI * 2);
            var spacer = angle / 8;
            var spread = angle * .05;
            

            thisangle = 0*spacer;
            ctx.beginPath();
            ctx.arc(x, y, radius, thisangle-spread, thisangle+spread);            
            ctx.strokeStyle = getGradient();
            ctx.lineWidth = 16;
            ctx.stroke();
            ctx.closePath(); 

            thisangle = 1*spacer;
            ctx.beginPath();
            ctx.arc(x, y, radius, thisangle-spread, thisangle+spread);            
            ctx.strokeStyle = getGradient();
            ctx.lineWidth = 16;
            ctx.stroke();
            ctx.closePath(); 

            thisangle = 2*spacer;
            ctx.beginPath();
            ctx.arc(x, y, radius, thisangle-spread, thisangle+spread);            
            ctx.strokeStyle = getGradient();
            ctx.lineWidth = 16;
            ctx.stroke();
            ctx.closePath(); 

            thisangle = 3*spacer;
            ctx.beginPath();
            ctx.arc(x, y, radius, thisangle-spread, thisangle+spread);            
            ctx.strokeStyle = getGradient();
            ctx.lineWidth = 16;
            ctx.stroke();
            ctx.closePath(); 

            thisangle = 4*spacer;
            ctx.beginPath();
            ctx.arc(x, y, radius, thisangle-spread, thisangle+spread);            
            ctx.strokeStyle = getGradient();
            ctx.lineWidth = 16;
            ctx.stroke();
            ctx.closePath(); 

            thisangle = 5*spacer;
            ctx.beginPath();
            ctx.arc(x, y, radius, thisangle-spread, thisangle+spread);            
            ctx.strokeStyle = getGradient();
            ctx.lineWidth = 16;
            ctx.stroke();
            ctx.closePath(); 

            thisangle = 6*spacer;
            ctx.beginPath();
            ctx.arc(x, y, radius, thisangle-spread, thisangle+spread);            
            ctx.strokeStyle = getGradient();
            ctx.lineWidth = 16;
            ctx.stroke();
            ctx.closePath(); 
                   
            thisangle = 7*spacer;
            ctx.beginPath();
            ctx.arc(x, y, radius, thisangle-spread, thisangle+spread);            
            ctx.strokeStyle = getGradient();
            ctx.lineWidth = 16;
            ctx.stroke();
            ctx.closePath(); 

            ctx.font = '30px serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('POP!!!', x, y);

        }        

        function pump(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var prompt = document.getElementById("prompt");

            radius += 1;
            prompt.innerHTML = `UP ARROW = PUMP AGAIN, DOWN ARROW = SAVE EARNINGS<br>`+
                `Pumps: ${pumps}, Potential Earnings: ${earnings} points`;                
            //drawBalloon();
            drawBalloon()
            //for (i = 0; i < pumpRChange; i++) {}
        }

        function burst(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var prompt = document.getElementById("prompt");            
            //for (i = 0; i < Math.floor(pumpRChange/2); i++) {}
            radius += 1;
            prompt.innerHTML = `Oh no, it burst!`+
            `Pumps: ${pumps}, Earnings lost.`;               
            drawBurst();            
        }        
        
        var pumpframes = 0;
        var bursted = false;
        function playgame(){
            if (current_response == "pump"){
                current_response = "pumping";
                pumps += 1;                

                if (pumps >= bartLimit){
                    bursted = true;
                    pumpframes = 20;
                    earnings = 0;
                } else {
                    bursted = false;
                    pumpframes = pumpRChange;
                    earnings += pumpEarningsChange;
                }

            } else if (current_response == "pumping"){
                if (pumpframes > 0){
                    pumpframes -= 1;
                    if (bursted) {
                        burst();
                    } else {
                        pump();
                    }
                } else {
                    if (bursted) {
                        doneTrial = true;
                        end_trial(animationId);                    
                    } else {
                        current_response = "waiting";
                    }
                }                
        
            } else if (current_response == "cashout"){
                doneTrial = true;
                end_trial(animationId);
            }

            //totalFrames += 1;
            if(!doneTrial){
                requestAnimationFrame(playgame);
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var prompt = document.getElementById("prompt");
        prompt.innerHTML = `PRESS UP ARROW TO PUMP UP THE BALLOON, DOWN ARROW TO SAVE EARNINGS<br>`+
            `Pumps: ${pumps}, Potential Earnings: ${earnings} points`;
        drawBalloon();

        var animationId = requestAnimationFrame(playgame);
        //draw();
        //var animationId = setInterval(draw, framerate);
        
    };

    return plugin;
})();


