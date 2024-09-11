function registration(){
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let mobile = document.querySelector('.mobile').value;
    let passowrd = document.querySelector('.password').value;
    let cpassword = document.querySelector('.cpassword').value;

    if(name === "" ){
        window.alert("Please enter your name");
        document.querySelector('.name').focus();
        return false;
    }
    else if(email === ""){
        window.alert("please enter your email");
        document.querySelector('.email').focus();
        return false;
    }

    else if(!email.includes("@")){
       window.alert("please includes @ in email field");
       document.querySelector('.email').focus();
       return false;

    }
    else if(!email.includes('.com')){
        window.alert("please enter valid email");
       document.querySelector('.email').focus();
       return false;

    }
    else if(mobile === ""){
        window.alert("please enter your mobile number");
       document.querySelector('.mobile').focus();
       return false;
    }
    // console.log(mobile.length);
    // console.log(typeof(mobile.length));
    // return false;
    else if(mobile.length !== 10){
        window.alert("mobile number should be 10 digit");
        document.querySelector('.mobile').focus();
        return false;
    }
    else if(isNaN(mobile)){
        window.alert("mobile number should be digit only");
        document.querySelector('.mobile').focus();
        return false;
    }
    else if(!(passowrd.match(/[1234567890]/) && passowrd.match(/[qwertyuiopasdfghjklzxcvbnm]/) && passowrd.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/) && passowrd.match(/[!@#$%^&*]/))){
        window.alert("please use strong password");
        document.querySelector('.password').focus();
        return false;
    }

    else if(passowrd !== cpassword){
        window.alert("password and c password does not matched");
        document.querySelector('.cpassword').focus();
        return false;
    }

    else{
        window.location.href = "login.html";
        // window.open("login.html");
    }

}



