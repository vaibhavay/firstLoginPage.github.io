var signIn = document.getElementById("signIn");


var database =[
	{
		user:"vaibhav",
		pass:"vaibhav"
	},
	{
		user:"mohak",
		pass:"mohak"
	},
	{
		user:"kartik",
		pass:"kartik"
	}

];

function authenticateUser(){
	var userName =document.getElementById("username").value;
	var passWord =document.getElementById("password").value;
	var flag=1;
	console.log("In authentication");
	console.log(userName);
	console.log(passWord);
	for(var i=0;i<3;i++){
		if(userName===database[i].user && passWord===database[i].pass){
				console.log("here!!");
				flag=0;
				redirectToFeed(1);
		}
	}
	if(flag!==0){
		console.log("there");
		redirectToFeed(0);
	}
}

function redirectToFeed(authKey){
	console.log("In redirection");
	if(authKey===1){
		window.location.assign("https://www.github.com");
	}
	else{
		alert("Incorrect Username or Password");
		window.location.assign("file:///C:/Users/Vaibhav%20Gupta/Desktop/Web%20Development/Project1/project1.html");
	}

}

function resetForm(){
	window.location.assign("file:///C:/Users/Vaibhav%20Gupta/Desktop/Web%20Development/Project1/project1.html")
}


signIn.addEventListener("click",authenticateUser);
//password.addEventListener("keypress",authenticateUser);
