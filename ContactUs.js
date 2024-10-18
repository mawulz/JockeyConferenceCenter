var invalidName = document.getElementById("error-name")
var invalidEmail = document.getElementById("error-email")
var invalidPhone = document.getElementById("error-phone")
var invalidMessage = document.getElementById("message-error")
var invalidMethod = document.getElementById("error-method")
var contact_method = document.getElementById("registform")

function validate_name(){
    var name = document.getElementById('username').value;

    if (name.length < 4){
        invalidName.innerHTML = "Please fill your name"
        return false
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        invalidName.innerHTML = "Enter your full name"
        return false
    }

    invalidName.innerHTML = ""
    return true
}

function validate_email(){
    var email = document.getElementById('email').value;

    if (email.length == 0){
        invalidEmail.innerHTML = "Please fill your email"
        return false
    }

    invalidEmail.innerHTML = ""
    return true
}

function validate_phone(){
    var number = document.getElementById('phone').value;

    if (number < 1000000000){
        invalidPhone.innerHTML = "Please enter a valid phone number"
        return false
    }

    invalidPhone.innerHTML = ""
    return true
}

function validate_message(){
    var message = document.getElementById('message').value;
    if (message.length < 50){
        invalidMessage.innerHTML = "We need more detail"
        return false
    }

    invalidMessage.innerHTML = ""
    return true
}

function validate_method(){
    event.preventDefault();
    var email2 = document.getElementById('email2');
    var phone2 = document.getElementById('phone2');

    if (!(email2.checked || phone2.checked)){
        invalidMethod.innerHTML = "Please choose your preffered method"
        return false
    }

    invalidMethod.innerHTML = ""
    contact_method.submit();
}


