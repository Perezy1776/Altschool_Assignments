

function displayUserDetails(){
    
    //ENTER YOUR USERNAME
    let username = prompt("Enter your username")
    console.log(validateusername(username))
    
    //WHILE LOOP
    while (validateusername(username) == false) {
        username = prompt("username not valid")

    }

        if(username == null) {
            alert("Are you sure you want to cancel?")
    }
    
    //ENTER YOUR PASSWORD
    let password = prompt("Enter your Password")
    console.log(ValidatePassword(password))
    
    while (ValidatePassword(password) == false) {
        password = prompt("Password not valid")

    }

    if (password == null) {
        return
    }
    

    //CONFRIM PASSWORD
    let PasswordConfirm = prompt ("Confirm you Password")

    //USE THE WHILE LOOP HERE AGAIN
    while (PasswordConfirm !== password) {
        PasswordConfirm = prompt ("Password is incorrect. Please confirm password")
    }



    console.log(username, password)
}


displayUserDetails() 

alert("You habe come to the end of this page. Goodbye")


function validateusername(username) {
    if(username == null) {
        return true
}

    if (username.length > 10) {
        return false
    } else {
        return true
    }
}

function ValidatePassword(password) {
    if (password == null){
        return true
    }

    if (password.length < 6) {
        return false 
    } else {
        return true
    }
}
