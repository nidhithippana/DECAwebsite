$("#log").submit( function(e) {
	e.preventDefault();
	var email = document.getElementById("logemail_inp").value;
	var password = document.getElementById("logpassword_inp").value;
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorCode, errorMessage);
	});
	document.getElementById("logemail_inp").value="";
	document.getElementById("logpassword_inp").value="";
});

$("#signup").submit( function(e) {
	e.preventDefault();
	
	var email = document.getElementById("signup_email").value;
	var password = document.getElementById("signup_pass").value;
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorCode, errorMessage);
	});
	document.getElementById("signup_email").value="";
	document.getElementById("signup_pass").value="";
});


firebase.auth().onAuthStateChanged(function(user){
	if(user){
	console.log(user);
	document.getElementById("topnav").style.display="block";
	window.open("DECAMAIN.html","_self");
	} else{
		console.log("not logged in");
	}
});



function signOut(){
firebase.auth().signOut().then(function(error) {
	window.open("loginpg.html","_self");
}).catch(function(error) {
  // An error happened.
});
}