

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBDX3FAYWLhPBufLambeirdxgmiISyvHMo",
    authDomain: "udagra-f0fea.firebaseapp.com",
    projectId: "udagra-f0fea",
    storageBucket: "udagra-f0fea.appspot.com",
    messagingSenderId: "102706712474",
    appId: "1:102706712474:web:25240fd5f993fd9d2e7423"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

	const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}

	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    document.location.href = "page1.html";

		
	}
	
	
	function signOut(){
		
    auth.signOut();
    document.location.href = "index.html";
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}
		
	});
	

  


   
