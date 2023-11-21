// Your web app's Firebase configuration

// const firebaseConfig = {
//     apiKey: "AIzaSyBpHkxDIKfF-bXYT2wcB8pi1i6tifn1m8o",
//     authDomain: "contact-form-myportfolio-19aac.firebaseapp.com",
//     databaseURL: "https://contact-form-myportfolio-19aac-default-rtdb.firebaseio.com",
//     projectId: "contact-form-myportfolio-19aac",
//     storageBucket: "contact-form-myportfolio-19aac.appspot.com",
//     messagingSenderId: "862806211114",
//     appId: "1:862806211114:web:ca10d5d2696a4d31e22153"
// };

const firebaseConfig = {
    apiKey: "AIzaSyAbRbpzbUUzqBzaq4cTo9QPvLRkpuFWFAM",
    authDomain: "krishantha-pathum.firebaseapp.com",
    databaseURL: "https://krishantha-pathum-default-rtdb.firebaseio.com",
    projectId: "krishantha-pathum",
    storageBucket: "krishantha-pathum.appspot.com",
    messagingSenderId: "965403865719",
    appId: "1:965403865719:web:478ae0b48440fb5e0b8c72",
    measurementId: "G-N42KRMXCL0"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref("contactForm");

//listen for a submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //get input values  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var message =getElementVal("message");

    saveMessages(name, email, phone, message);

   //enable the alert
   document.querySelector(".alert").style.display = "block";
   //hide the alert after 3 seconds
   setTimeout(() => {
       document.querySelector(".alert").style.display = "none";
   },3000);

   //clear the form
   document.getElementById("contactForm").reset();

}

const saveMessages = (name, email, phone, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        phone: phone,
        message: message,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

