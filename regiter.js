import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCZfVQvTD6_pXUyoHnUslBAjx1K6wkdqdk",
    authDomain: "tasks-2038a.firebaseapp.com",
    projectId: "tasks-2038a",
    storageBucket: "tasks-2038a.appspot.com",
    messagingSenderId: "210125741194",
    appId: "1:210125741194:web:feb203747feb1d4c4b2173",
    measurementId: "G-H1578C9YC1"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const analytics = getAnalytics(app);


// the divs
const container = document.getElementById("login");
const container2 = document.getElementById("signup");
//the signup and return buttons
const log = document.getElementById("signupbtn");
const signIn = document.getElementById("rtnToLg")

signupbtn.addEventListener("click", () =>
{
    login.style.display = "none";
    signup.style.display  ="block";

});
rtnToLg.addEventListener("click", () =>{
    login.style.display ="block";
    signup.style.display ="none";
});

//the login div contents
const logEmail = document.getElementById("loginEmail");
const logPassword = document.getElementById("loginPasscode");

//the sign up iv contents
const signEmail = document.getElementById("signupEmail");
const cnfSignEmail = document.getElementById("ConfirmSignupEmail");
const signPassword = document.getElementById("signupPassword");
const cnfSignPassword = document.getElementById("ConfirmSignupPassword");

//login and create account buttons
const logBtn = document.getElementById("loginBtn");
const createAcct = document.getElementById("crtAcctBtn");


var
email,
password,
registerEmail,
cnfRegisterEmail,
registerPassword,
cnfRegisterPassword;
//account creation verification
createAcct.addEventListener("click", () =>{
    var isVerified = true;
    registerEmail = signEmail.value;
    cnfRegisterEmail = cnfSignEmail.value;
    if( registerEmail != cnfRegisterEmail ){
        window.alert("Email fields do not match. Try again.");
        isVerified =false;
    }
    registerPassword = signPassword.value;
    cnfRegisterPassword = cnfSignPassword.value;

    if(registerPassword != cnfRegisterPassword){
        window.alert("Password fields do not match. Try again.");
        isVerified = false;
    }
    if(registerEmail == null || cnfRegisterEmail == null ||  registerPassword == null || cnfRegisterPassword ==null){
        window.alert("Fill out the fields");
        isVerified = false;
    }

    if(isVerified){
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then(() =>{
        window.alert("Successfull account creation");
        window.location =  "./tasks.html";
    })
        .catch( (error) =>{
            const errorMessage = error.message;
            window.alert(errorMessage);
        });
    }
});

//sign in verification
logBtn.addEventListener("click", ()=>{
    email = logEmail.value;
    password = logPassword.value;
   var isVerified=true

    if(isVerified){
        signInWithEmailAndPassword(auth, email, password)
        .then( ()=>{
            window.alert("Welcome!");
            window.location ="./tasks.html";
        })
        .catch((error) =>{
            const errorMessage = error.message;
            window.alert(errorMessage);
        });
    }
});

