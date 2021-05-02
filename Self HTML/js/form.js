// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: "AIzaSyCoikgqZDEkgK_j8boP0ONz2LZfwt0vTM8",
  authDomain: "self-learned.firebaseapp.com",
  projectId: "self-learned",
  storageBucket: "self-learned.appspot.com",
  essagingSenderId: "544830557015",
  appId: "1:544830557015:web:e9b807fdc88f71a575cc12",
  measurementId: "G-G71Y5VF7XE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );

  promise
    .then(() => {
      alert("Successfully Registered");
      window.location.href = "./login.html";
    })

    .catch((e) => alert(e.message));
}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);

  promise
    .then(() => {
      alert("Active user: " + email.value);
      window.location.href = "./home.html";

      //alert("Logged in " + email.value);
    })

    .catch((e) => alert(e.message));
}

function signOut() {
  auth.signOut();
  promise.then(() => {
    window.location.href = "./login.html";

    //alert("Logged in " + email.value);
  });
}

firebase.auth().onAuthStateChanged(function (user) {
  if (!user) {
    if (
      window.location.href.indexOf("login.html") == -1 &&
      window.location.href.indexOf("register.html") == -1
    ) {
      window.location.href = "./register.html";
      window.location.href = "./login.html";
      //alert("Logged out");
    }
  }
});
