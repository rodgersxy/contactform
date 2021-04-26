 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDV5JKXTaky1gTACb_eCzsMT1xNjFovERI",
    authDomain: "contactform-1b16c.firebaseapp.com",
    projectId: "contactform-1b16c",
    storageBucket: "contactform-1b16c.appspot.com",
    messagingSenderId: "767734604500",
    appId: "1:767734604500:web:b9fa0ae7fb0b700b9a1141",
    measurementId: "G-RS3HCE3GNB"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  

  // Reference messages collection

  var messagesRef = firebase.database().ref('messages');



// listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    // Get the value
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // save message
    saveMessage(name, company, email, phone, message);
   
}
// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }