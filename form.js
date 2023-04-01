import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDGpjbkHxWEXUlNzBvxr6AlZq3VjbQedEs",
    authDomain: "formlogin-e8ce7.firebaseapp.com",
    projectId: "formlogin-e8ce7",
    storageBucket: "formlogin-e8ce7.appspot.com",
    messagingSenderId: "1047536158814",
    appId: "1:1047536158814:web:6d30c329f59b71812f4ccf"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


document.getElementById("reg-btn").addEventListener('click',function(){
 document.getElementById("register-div").style.display="inline";
 document.getElementById("login-div").style.display="none";

});

document.getElementById("log-btn").addEventListener('click',function(){
    document.getElementById("register-div").style.display="none";
    document.getElementById("login-div").style.display="inline";
   
   });

   document.getElementById("login-btn").addEventListener('click', function(){
     const  loginEmail= document.getElementById("login-email").value;
     const  loginPassword= document.getElementById("login-password").value;

   signInWithEmailAndPassword(auth, loginEmail,loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+"Was Login Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
  });
  });

  document.getElementById("register-btn").addEventListener('click',function(){
    const  registerEmail= document.getElementById("register-email").value;
    const  registerPassword= document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, registerEmail,registerPassword)
 .then((userCredential) => {
   const user = userCredential.user;
   document.getElementById("result-box").style.display="inline";
   document.getElementById("register-div").style.display="none";
   document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+"Was Registered Successfully";
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   document.getElementById("result-box").style.display="inline";
   document.getElementById("register-div").style.display="none";
   document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;

 });
 });