var firebaseConfig = {
    apiKey: "AIzaSyAZxL1ZA5gN4VvAFYCLbCfpIo2w194Hz3U",
  authDomain: "fir-8e7cc.firebaseapp.com",
  databaseURL: "https://fir-8e7cc-default-rtdb.firebaseio.com",
  projectId: "fir-8e7cc",
  storageBucket: "fir-8e7cc.appspot.com",
  messagingSenderId: "646402315627",
  appId: "1:646402315627:web:bc7ce0bf1690a46dbbe82e",
  measurementId: "G-HL2E418NB2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var name = document.getElementById('fname').value;
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
localStorage.setItem("nome",name)
localStorage.setItem("up","in")
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    window.location.href = "index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    swal("Good job!", "You clicked the button!", "success");
    console.log("sent");
    window.location.href = "index.html";
});
function  getId(id){
    return document.getElementById(id).value;
}
function nav1() {
    var signup = document.getElementById('signup');
    var signin = document.getElementById('signin');

    signup.style.display = "none"

    signin.style.display = "block"
}

function n() {
    var signup = document.getElementById('signup');
    var signin = document.getElementById('signin');

    signup.style.display = "block"

    signin.style.display = "none"

    win
}

document.getElementById('signin').style.display = "none";
