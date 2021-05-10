// Database Functions
// saves the data to firebase

function now(){
    var now = new Date().getTime() - EXPERIMENT_START_TIME;
    return now
}


var pData = {
    StartTime: EXPERIMENT_START_TIME,
    Time: now(),        
    EventNum: 1,
    Block: "",
    TrialNum: 0,        

    //ID
    UserId: "",
    AuthId: "",
    ConsentId: "",
    ConsentStatus: false,
    
    //Participant Performance
    TrackACC: "",
    DetectACC: "",
            
    //Participant Responses
    DetectedEarly: "", //did the participant finish the trial early (for task version B)
    DetectedChange: "",
    EntrainOK: "",
    Confidence: "",
    Arousal: "",

    //Staircase Control Variables
    NumPulses: NUMBER_OF_PRACTICE_PULSES_1, //allows us to manipulate the numPulses based on prac vs. main trials
    TotalRateChange: STARTING_RATE_CHANGE,
    StepSize: STARTING_STEP_SIZE,
    ChangeType: "",
    goodcount: 0,
    badcount: 0,
    reversalCount: 0,
    hardbumper: false,
    easybumper: false,

    //BART Data
    BARTpoints: 0,
    BARTpumps: 0,
    BARTlimit: 0,
    BARTtotalpoints: 0,
    BARTtotalpumps: 0,
    BARTburst: 0,

    //MAIA QUESTIONNAIRE
    MAIA_01: "",
    MAIA_02: "",
    MAIA_03: "",
    MAIA_04: "",
    MAIA_05: "",
    MAIA_06: "",
    MAIA_07: "",
    MAIA_08: "",
    MAIA_09: "",
    MAIA_10: "",
    MAIA_11: "",
    MAIA_12: "",
    MAIA_13: "",
    MAIA_14: "",
    MAIA_15: "",
    MAIA_16: "",
    MAIA_17: "",
    MAIA_18: "",
    MAIA_19: "",
    MAIA_20: "",
    MAIA_21: "",
    MAIA_22: "",
    MAIA_23: "",
    MAIA_24: "",
    MAIA_25: "",
    MAIA_26: "",
    MAIA_27: "",
    MAIA_28: "",
    MAIA_29: "",
    MAIA_30: "",
    MAIA_31: "",
    MAIA_32: "",
    MAIA_33: "",
    MAIA_34: "",
    MAIA_35: "",
    MAIA_36: "",
    MAIA_37: "",
    MAIA_noticing: "", 
    MAIA_notdistracting: "",
    MAIA_notworrying: "",
    MAIA_attentionregulation: "",
    MAIA_emoaware: "",
    MAIA_selfreg: "",
    MAIA_bodylisten: "",
    MAIA_trusting: "",
    MAIA_total: "",

    //REI QUESTIONNAIRE
    RA_01: "",
    RA_02: "",
    RA_03: "",
    RA_04: "",
    RA_05: "",
    RA_06: "",
    RA_07: "",
    RA_08: "",
    RA_09: "",
    RA_10: "",
    
    RE_01: "",
    RE_02: "",
    RE_03: "",
    RE_04: "",
    RE_05: "",
    RE_06: "",
    RE_07: "",
    RE_08: "",
    RE_09: "",
    RE_10: "",
    
    EA_01: "",
    EA_02: "",
    EA_03: "",
    EA_04: "",
    EA_05: "",
    EA_06: "",
    EA_07: "",
    EA_08: "",
    EA_09: "",
    EA_10: "",
    
    EE_01: "",
    EE_02: "",
    EE_03: "",
    EE_04: "",
    EE_05: "",
    EE_06: "",
    EE_07: "",
    EE_08: "",
    EE_09: "",
    EE_10: "",
    
    RA_inv_01: "",
    RA_inv_02: "",
    RA_inv_03: "",
    RA_inv_04: "",
    RA_inv_05: "",
    
    RE_inv_01: "",
    RE_inv_03: "",
    RE_inv_05: "",
    RE_inv_07: "",
    RE_inv_09: "",
    
    EA_inv_01: "",
    EA_inv_06: "",
    EA_inv_08: "",
    EA_inv_10: "",
    
    EE_inv_04: "",
    EE_inv_06: "",
    EE_inv_07: "",
    EE_inv_08: "",
    EE_inv_09: "",
    
    REI_RA: "",
    REI_RE: "",
    REI_EA: "",    
    REI_EE: "",

    //PHQ 9
    PHQ9_01: "",
    PHQ9_02: "",
    PHQ9_03: "",
    PHQ9_04: "",
    PHQ9_05: "",
    PHQ9_06: "",
    PHQ9_07: "",
    PHQ9_08: "",
    PHQ9_09: "",
    PHQ9_total: "",

    //PHQ 15
    PHQ15_01: "",
    PHQ15_02: "",
    PHQ15_03: "",
    PHQ15_04: "",
    PHQ15_05: "",
    PHQ15_06: "",
    PHQ15_07: "",
    PHQ15_08: "",
    PHQ15_09: "",
    PHQ15_10: "",
    PHQ15_11: "",
    PHQ15_12: "",
    PHQ15_13: "",
    PHQ15_14: "",
    PHQ15_15: "",
    PHQ15_total: "",

    //GAD7 QUESTIONNAIRE
    GA7_01: "",
    GA7_02: "",
    GA7_03: "",
    GA7_04: "",
    GA7_05: "",
    GA7_06: "",
    GA7_07: "",
    GA7_total: "",

    //BISBAS QUESTIONNAIRE
    BISBAS_01: "",
    BISBAS_02: "",
    BISBAS_03: "",
    BISBAS_04: "",
    BISBAS_05: "",
    BISBAS_06: "",
    BISBAS_07: "",
    BISBAS_08: "",
    BISBAS_09: "",
    BISBAS_10: "",    
    BISBAS_11: "",
    BISBAS_12: "",
    BISBAS_13: "",
    BISBAS_14: "",
    BISBAS_15: "",
    BISBAS_16: "",
    BISBAS_17: "",
    BISBAS_18: "",
    BISBAS_19: "",
    BISBAS_20: "",    
    BISBAS_21: "",
    BISBAS_22: "",
    BISBAS_23: "",
    BISBAS_24: "",    
    BISBAS_inv_02: "",
    BISBAS_inv_22: "",
    BAS_Drive: "",
    BAS_FunSeeking: "",
    BAS_RewardResponsivenes: "",    
    BIS: ""
};

function saveSessionData2(blockName = ""){
    pData.Block = blockName;    
    pData.Time= now();
    firebase.database().ref('sessions/' + pData.AuthId + '/' + pData.EventNum).set(pData);
    pData.EventNum = pData.EventNum + 1;
}


function saveSummaryData() {
    var user = firebase.auth().currentUser;
    firebase.database().ref('data/' + user.uid ).push().set({
        StartTime: EXPERIMENT_START_TIME,
        Time: now(),
        UserId: userId,
        Authentation: authnum
//        practice: extractTaskData('Practice Task 1'),
//        task1: extractTaskData("Circle Task 1"),
//        quesiton1: extractTaskQuestion("Circle Task 1"),
//        task2: extractTaskData("Circle Task 2"),
//        quesiton2: extractTaskQuestion("Circle Task 2"),
//        questionnaire: extractSurveyForm('q1'),
//        endQuestions: extractSurveyForm('first'),
        
    });
}


