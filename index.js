$("#log_in").submit(function(e) {
	  
	  var email = document.getElementById("logemail_inp").value;
	  var password = document.getElementById("logpassword_inp").value;
	  
  	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  alert(errorCode, errorMessage)
	  
	  // ...
	});
  });

firebase.auth().onAuthStateChanged(function(user){
	if(user){
	console.log(user);
	document.getElementById("topnav").style.display="block";
	
		}
	else{
		console.log("not logged in");
	}
});


/*function signup(){

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}

firebase.auth().signOut().then(function(error) {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
*/