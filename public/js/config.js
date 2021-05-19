// experiment main settings
const EXPERIMENT_START_TIME = new Date().getTime();

//these are mostly for debugging
const EZPULSES = 8; // Easy to set all at once  default = 8
const NUMBER_OF_TRIALS_1 = 15; // original: 15
const NUM_BART_TRIALS = 20; //the proportion of time you must be tracking the circle with keyboard to pass, original: 20

//CIRCLE TASK
const NUMBER_OF_ENTRAIN_PULSES = EZPULSES;
const NUMBER_OF_PRACTICE_PULSES_1 = EZPULSES;
const NUMBER_OF_PRACTICE_PULSES_2 = EZPULSES;
const NUMBER_OF_PULSES_1 = EZPULSES; // original: 8 --> 10
const NUMBER_OF_PULSES_2 = EZPULSES; // original: 12 --> 10
const NUMBER_OF_TRIALS_2 = 12; // original: 10

const CRIT_TRACK_ACC = 80; //the proportion of time you must be tracking the circle with keyboard to pass
const FIRST_PULSE_TIME = 5000; //first pulse time in ms
const startRadius = 50;       

//BART TASK
const MAX_BART_PUMPS = 64; // the number of pumps the balloon can take without popping will be between 1 and this value

//TRIAL CONTROL
let greenlight = true; //allows study to keep running- QC checks can turn off this light
let repeatneeded = false; //start by assuming that people are doing the tasks correctly

//Staircase Variables
const STARTING_RATE_CHANGE = 0.5;
const STARTING_STEP_SIZE = 0.1;
const STAIR_DOWN_COUNT=2; //2 down rule
const STAIR_UP_COUNT=1;   //1 up rule
const STAIR_REVERSALS=2; //how many reversals before we change step size
const STAIR_FACTOR = 0.5; //what to do to the step after a successful down step


// QUESTIONNAIRE CONTROL
let scaleWidth = 400; //how wide likert scales should be (in pixels)

