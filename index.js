$("#log").submit( function(e) {
e.preventDefault();
var email = document.getElementById("logemail_inp").value;
var password = document.getElementById("logpassword_inp").value;
//signs a user in if they had already created a password with their email
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
alert(errorCode, errorMessage);
  // ...
});
document.getElementById("logemail_inp").value="";
document.getElementById("logpassword_inp").value="";
});

firebase.auth().onAuthStateChanged(function(user){
	if(user){
	console.log(user);
	document.getElementById("topnav").style.display="block";
	} else{
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
*/
function signOut(){
firebase.auth().signOut().then(function(error) {
	window.location.reload();
}).catch(function(error) {
  // An error happened.
});
}