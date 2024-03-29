//Get User ID and Validate
const authnum = getAuthNum()
var goodId = false;

// Authentication
firebase.auth().signInAnonymously()
  .then(() => {
    // Signed in..

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorMessage)
  })

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    pData.AuthId = user.uid;
    console.log("Just registered user ID: ",pData.AuthId);

    // ...
  } else {
    // User is signed out
    // ...
  }
});



var idText = '<table>' +
    '<tr>'+
    '<td><p class="inputQ">Please enter your Prolific ID: </p></td>' +
    '<td><p class="input"><input name="userId1" id="userId1" type="text"> </td>' +
    '</tr><tr>'+
    '<td><p class="inputQ">Please enter your Prolific ID again to confirm: </p></td>' +
    '<td><p class="input"><input name = "userId2" id="userId2" type="text"> </p></td>'+
    '</tr></table>';

var userId_trial = {
type: 'survey-html-form',        
html:  function(){
    return idText
},
autofocus: 'userId1',
data: { taskType: "userID"},
on_finish: function(data){       
    //console.log(data.response);
    
    if(data.response.userId1 && data.response.userId1 == data.response.userId2){
        //console.log(data.response.userId1);
        pData.UserId  = data.response.userId1;
        goodId = true;
    }        
}
};

// Logs that a user ID has been created
var validateID_node = {
    timeline: [userId_trial],
    on_load: function() { pData.TrialNum = 1; },
    loop_function: function(){                
        if(goodId){            
            console.log("Good ID: ", pData.UserId); //make sure the number matches the timeline order (from 0)
            saveSessionData2("GetID");
            pData.TrialNum = 0;
            return false; //exit loop
        } else {  
            pData.TrialNum++;          
            idText = '<p>Sorry, those IDs are invalid or do not match. Please try again: ' +
            '<input name="userId1" id="userId1" type="text" /> </p>' +
            '<p> Please enter your ID a second time to make sure we get it right: ' +
            '<input name = "userId2" id="userId2" type="text" /> </p>';
            //console.log("Bad ID");
            return true; //break out of loop when ID is valid
        }
    }
}