let username = prompt("Enter your username")
console.log(validateusername(username))



function validateusername(username) {
    if (username.length > 10) {
        return false
    } else {
        return true
    }
}