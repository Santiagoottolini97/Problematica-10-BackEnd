//BY ID INPUTS
var namer = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var rPassword = document.getElementById('rPassword');
var errorEmail = document.getElementById('errorEmail');
var errorPassword = document.getElementById('errorPassword');
var errorPasswordR = document.getElementById('errorPasswordR');
var errorName = document.getElementById('errorName');
var containerData = document.getElementById('containerData');
var titleData = document.getElementById('titleData');

//BY TAG NAME
var labelLogin = document.getElementsByTagName('label');
var inputLogin = document.getElementsByTagName('input');
var buttonLogin = document.getElementsByTagName('button');
var formLogin = document.getElementsByTagName('form');

//QUERY SELECTOR
var btnSubmit = document.querySelector('.btnSend');

function handlerOnBlurName() {
    if (namer.value === '' || namer.value === null) {
        errorName.style.color = 'red';
        namer.style.borderColor = 'red';
        errorName.innerHTML = 'Complete the name please';
        return false;
    } else if (namer.value >= 6) {
        errorName.style.color = 'red';
        namer.style.borderColor = 'red';
        errorName.innerHTML = 'Your name must contain at least 6 digit.';
        return false;
    } else if (namer.value.indexOf(' ') <= 0) {
        errorName.style.color = 'red';
        namer.style.borderColor = 'red';
        errorName.innerHTML = 'The name must cotaint space blank';
        return false;
    } else {
        errorName.innerHTML = '';
        namer.style.borderColor = 'green';
        return true;
    }
}
function handlerOnBlurEmail() {
    if (email.value === '' || email.value === null) {
        errorEmail.style.color = 'red';
        email.style.borderColor = 'red';
        errorEmail.innerHTML = 'Complete with your email';
        return false;
    } else if (!isEmail(email.value)) {
        errorEmail.style.color = 'red';
        email.style.borderColor = 'red';
        errorEmail.innerHTML = 'The email is invalid';
        return false;
    } else {
        errorEmail.innerHTML = '';
        email.style.borderColor = 'green';
        return true;
    }
}
function handlerOnBlurPassword() {
    if (password.value === '' || password.value === null) {
        errorPassword.style.color = 'red';
        password.style.borderColor = 'red';
        errorPassword.innerHTML = 'Complete the password please';
        return false;
    } else if (!upperCasePassword(password.value)) {
        errorPassword.style.color = 'red';
        password.style.borderColor = 'red';
        errorPassword.innerHTML = 'Your password must contain at least one uppercase letter.';
        return false;
    } else if (!lowerCasePassword(password.value)) {
        errorPassword.style.color = 'red';
        password.style.borderColor = 'red';
        errorPassword.innerHTML = 'Your password must contain at least one lowercase letter.';
        return false;
    } else if (!numberPassword(password.value)) {
        errorPassword.style.color = 'red';
        password.style.borderColor = 'red';
        errorPassword.innerHTML = 'Your password must contain at least one number.';
    } else if (password.value.length < 8) {
        errorPassword.style.color = 'red';
        password.style.borderColor = 'red';
        errorPassword.innerHTML = 'Your password must contain at least 8 digit.';
        return false;
    } else {
        errorPassword.innerHTML = '';
        password.style.borderColor = 'green';
        return true;
    }
}
function handlerOnBlurRepeatPassword() {
    if (rPassword.value === '' || rPassword.value === null) {
        errorPasswordR.style.color = 'red';
        rPassword.style.borderColor = 'red';
        errorPasswordR.innerHTML = 'Complete the password please';
        return false;
    } else if (password.value !== rPassword.value) {
        errorPasswordR.style.color = 'red';
        rPassword.style.borderColor = 'red';
        errorPasswordR.innerHTML = 'Must be the same password';
        return false;
    } else if (!upperCasePassword(rPassword.value)) {
        errorPasswordR.style.color = 'red';
        rPassword.style.borderColor = 'red';
        errorPasswordR.innerHTML = 'Your password must contain at least one uppercase letter.';
        return false;
    } else if (!lowerCasePassword(rPassword.value)) {
        errorPasswordR.style.color = 'red';
        rPassword.style.borderColor = 'red';
        errorPasswordR.innerHTML = 'Your password must contain at least one lowercase letter.';
        return false;
    } else if (!numberPassword(rPassword.value)) {
        errorPasswordR.style.color = 'red';
        rPassword.style.borderColor = 'red';
        errorPasswordR.innerHTML = 'Your password must contain at least one number.';
        return false;
    } else if (rPassword.value.length < 8) {
        errorPasswordR.style.color = 'red';
        rPassword.style.borderColor = 'red';
        errorPasswordR.innerHTML = 'Your password must contain at least 8 digit.';
        return false;
    } else {
        errorPasswordR.innerHTML = '';
        rPassword.style.borderColor = 'green';
        return true;
    }
}

//DOM Validations
function handlerOnBlurDOM() {
    if (formLogin.length === 0) {
        alert('Form DOM validation');
    }
    if (labelLogin.length !== 4) {
        alert('Label DOM validation');
    }
    if (inputLogin.length !== 4) {
        alert('Input DOM validation');
    }
    if (buttonLogin.length !== 1) {
        alert('Button DOM validation');
    }
}
handlerOnBlurDOM();

//Function to show the data
function dataCapture() {
    titleData.innerHTML = 'USER INFO';
    containerData.style.color = 'blue';
    containerData.innerHTML = `Name: ${namer.value}<br>Email: ${email.value}<br>Password: ${password.value}<br>Repeat Passord: ${rPassword.value}<br>`;
}

function handleRegister() {
    const newUser = {
        namer: namer.value,
        emailr: email.value,
        password: password.value,
        passwordR: rPassword.value,
    };
    fetch('http://localhost:4000/registerUser', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.text())
        .then((data) => console.log(data));
}

//Events blur and click
namer.addEventListener('blur', handlerOnBlurName);
email.addEventListener('blur', handlerOnBlurEmail);
password.addEventListener('blur', handlerOnBlurPassword);
rPassword.addEventListener('blur', handlerOnBlurRepeatPassword);
password.addEventListener('focus', () => {
    errorPassword.innerHTML = '';
    password.style.borderColor = 'green';
});
rPassword.addEventListener('focus', () => {
    errorPasswordR.innerHTML = '';
    rPassword.style.borderColor = 'green';
});
email.addEventListener('focus', () => {
    errorEmail.innerHTML = '';
    email.style.borderColor = 'green';
});
namer.addEventListener('focus', () => {
    errorName.innerHTML = '';
    namer.style.borderColor = 'green';
});
btnSubmit.addEventListener('click', () => {
    if (handlerOnBlurName() && handlerOnBlurEmail() && handlerOnBlurPassword() && handlerOnBlurRepeatPassword()) {
        handleRegister();
        dataCapture();
    }
});

//Validation email
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
//Validation upper case
function upperCasePassword(password) {
    return /[A-Z]/.test(password);
}
//Validation lower case
function lowerCasePassword(password) {
    return /[a-z]/.test(password);
}
//Validation number
function numberPassword(password) {
    return /[0-9]/.test(password);
}
