var firebaseConfig = {
    apiKey: "AIzaSyCMrIHGwmH4dcqwG_brfzESK3Mj-cF8N3Q",
    authDomain: "index-753b9.firebaseapp.com",
    databaseURL: "https://index-753b9.firebaseio.com",
    projectId: "index-753b9",
    storageBucket: "",
    messagingSenderId: "564783210479",
    appId: "1:564783210479:web:e30f32854dcab2f214e01a"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  
  function login(){
	  
	  var email = document.getElementById("email").value;
	  var password = document.getElementById("pass1").value;
	  
  	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});
  }





firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});