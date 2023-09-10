//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
//  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
//  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//      apiKey: "AIzaSyDukcBqYe-HebKYm1ETmoZgDA5Achy6cyI",
//      authDomain: "authentication-add6c.firebaseapp.com",
//      databaseURL: "https://authentication-add6c-default-rtdb.firebaseio.com",
//      projectId: "authentication-add6c",
//      storageBucket: "authentication-add6c.appspot.com",
//      messagingSenderId: "668793330502",
//      appId: "1:668793330502:web:4ecae9edc105a7af6fa347",
//      measurementId: "G-VMKM6M5TJG"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const database = getDatabase(app);
//  const auth = getAuth();


//  signUp.addEventListener("click", (e) => {

//      var email = document.getElementById('email').value;
//      var password = document.getElementById('password').value;
//      var username = document.getElementById('username').value;

//      createUserWithEmailAndPassword(auth, email, password)
//          .then((userCredential) => {
//              // Signed in 
//              const user = userCredential.user;

//              set(ref(database, 'users/' + user.uid), {
//                  username: username,
//                  email: email
//              })
//              alert('user created!');
//          })
//          .catch((error) => {
//              const errorCode = error.code;
//              const errorMessage = error.message;
//              alert(errorMessage);
//              // ..
//          });

//  })

//  login.addEventListener('click', (e) => {

//      const dt = new Date();

//      var email = document.getElementById('login-email').value;
//      var password = document.getElementById('login-password').value;


//      signInWithEmailAndPassword(auth, email, password)
//          .then((userCredential) => {
//              // Signed in 
//              const user = userCredential.user;
//              update(ref(database, 'users/' + user.uid), {
//                  last_login: dt,

//              })
//              alert('user logged in!');
//          })
//          .catch((error) => {
//              const errorCode = error.code;
//              const errorMessage = error.message;
//              alert(errorMessage);
//          });

//  })

//  const user = auth.currentUser;

//  let loginBox = document.getElementById('login-box');
//  let name = document.getElementById('display-user-id');

//  onAuthStateChanged(auth, (user) => {
//      if (user) {
//          // User is signed in, see docs for a list of available properties
//          // https://firebase.google.com/docs/reference/js/auth.user
//          const uid = user.uid;

//          loginBox.classList.remove('d-none');
//          loginBox.classList.add("d-block");

//          name.innerText = uid
//          console.log(uid)
//          // ...
//      } else {
//          // User is signed out
//          // ...
//          loginBox.classList.add("d-none");
//          loginBox.classList.remove('d-block')
//          console.log('signed out')
//      }
//  });

//  logout.addEventListener('click', (e) => {
//      signOut(auth).then(() => {
//          alert('user logged out!');
//          // Sign-out successful.
//      }).catch((error) => {
//          const errorCode = error.code;
//          const errorMessage = error.message;
//          alert(errorMessage);
//          // An error happened.
//      });
//  })