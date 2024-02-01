document.getElementById("validationform").addEventListener('submit', function(){

    let usernameInput = document.getElementById("username");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");

    if(!validateUsername(usernameInput.value)){
        setInvalid(usernameInput);
        event.preventDefault();
    }else{
        setValid(usernameInput);
    }

    if(!validateEmail(emailInput.value)){
        setInvalid(emailInput);
        event.preventDefault();
    }else{
        setValid(emailInput);
    }
    

    if(!validatePassword(passwordInput.value)){
        setInvalid(passwordInput);
        event.preventDefault();
    }else{
        setValid(passwordInput);
    }

});

function validateUsername(username){
    return username.length > 0;
}

function validateEmail(email){
    let emailregex = /^[a-zA-Z]+[^\s@]+@[^\s@]+.[^\s@]+$/

    return emailregex.test(email);
}

function validatePassword(password){
    return password.length >=6;
}

function setInvalid(element){
    element.classList.add('is-invalid');
    element.classList.remove('is-valid')
}

function setValid(element){
    element.classList.remove('is-invalid');
    element.classList.add('is-valid')
}