   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
   var firebaseConfig = {
      apiKey: "AIzaSyCoikgqZDEkgK_j8boP0ONz2LZfwt0vTM8",
      authDomain: "self-learned.firebaseapp.com",
      projectId: "self-learned",
      storageBucket: "self-learned.appspot.com",
      essagingSenderId: "544830557015",
      appId: "1:544830557015:web:e9b807fdc88f71a575cc12",
      measurementId: "G-G71Y5VF7XE"
   };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
       firebase.analytics();
   
       var email = document.getElementById("email");
       var password = document.getElementById("password");
       var signIn = document.getElementById("email");
      
      // Add login event 
signIn.addEventListener('click', e => {
         //Get email and password
   var email = email.value;
   var password = password.value;
   const auth = firebase.auth();
   //sign in 
   const promise = auth.signInWithEmailAndPassword(email, pass);
   promise.catch(e => alert(e.message));


   })
            