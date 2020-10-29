// Start for form validation

function validation(){
	var username = document.getElementById('uname');
    var password = document.getElementById('pass');
	if(username.value.trim()=="" || password.value.trim()==""){
		// here trim() method remove all the space
		alert("Fill all");
		return false;
	}else{
		true;
	}
}



// End for form validation