var email = document.getElementById('email');
var password = document.getElementById('password');
var errorEmail = document.getElementById('errorEmail');
var errorPassword = document.getElementById('errorPassword');
var containerData = document.getElementById('containerData');
var titleData = document.getElementById('titleData');

//BY TAG NAME
var labelLogin = document.getElementsByTagName('label');
var inputLogin = document.getElementsByTagName('input');
var buttonLogin = document.getElementsByTagName('button');
var formLogin = document.getElementsByTagName('form');

//QUERY SELECTOR
var btnSubmit = document.querySelector('.btnSend');

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
        errorPassword.innerHTML = 'The password is invalid';
        return false;
    } else if (!upperCasePassword(password.value)) {
        errorPassword.style.color = 'red';
        errorPassword.innerHTML = 'Your password must contain at least one uppercase letter.';
        return false;
    } else if (!lowerCasePassword(password.value)) {
        errorPassword.style.color = 'red';
        errorPassword.innerHTML = 'Your password must contain at least one lowercase letter.';
        return false;
    } else if (!numberPassword(password.value)) {
        errorPassword.style.color = 'red';
        errorPassword.innerHTML = 'Your password must contain at least one number.';
    } else if (password.value.length < 8) {
        errorPassword.style.color = 'red';
        errorPassword.innerHTML = 'Your password must contain at least 8 digit.';
        return false;
    } else {
        errorPassword.innerHTML = '';
        password.style.borderColor = 'green';
        return true;
    }
}

//DOM Validations
function handlerOnBlurDOM() {
    if (formLogin.length === 0) {
        alert('Form DOM validation');
    }
    if (labelLogin.length !== 2) {
        alert('Label DOM validation');
    }
    if (inputLogin.length !== 2) {
        alert('Input DOM validation');
    }
    if (buttonLogin.length !== 1) {
        alert('Button DOM validation');
    }
}
handlerOnBlurDOM();

function dataCapture() {
    titleData.innerHTML = 'USER INFO';
    containerData.style.color = 'blue';
    containerData.innerHTML = `Email: ${email.value}<br>Password: ${password.value}<br>`;
}

//Fetch
//Capture de email value, the capture the response and show in the console
function handleLogin() {
    const newUser = {
        emailr: email.value,
        password: password.value,
    };
    fetch('http://localhost:4000/loginUser', {
        method: 'PUT',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.text())
        .then((data) => console.log(data));
}

//Events blur and click
email.addEventListener('blur', handlerOnBlurEmail);
password.addEventListener('blur', handlerOnBlurPassword);
email.addEventListener('focus', () => {
    errorEmail.innerHTML = '';
    email.style.borderColor = 'green';
});
password.addEventListener('focus', () => {
    errorPassword.innerHTML = '';
    password.style.borderColor = 'green';
});
btnSubmit.addEventListener('click', () => {
    if (handlerOnBlurEmail() && handlerOnBlurPassword()) {
        handleLogin();
        dataCapture();
    }
});

//Validation mail
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
