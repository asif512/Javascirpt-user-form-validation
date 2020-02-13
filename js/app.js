const username = document.getElementById('username');
const email = document.getElementById('email');
const zipcode = document.getElementById('zipcode');
const phone = document.getElementById('phone');
const button = document.getElementById('button');

// Add Event listner

username.addEventListener('blur', validName);
email.addEventListener('blur', validEmail);
zipcode.addEventListener('blur', validZipcode);
phone.addEventListener('blur', validPhone);
button.addEventListener('click', submitForm);

//== Methods

// Username Validation
function validName(){
    const name = username.value;
    const re = /^[a-zA-Z0-9]{4,8}$/;
    if(!re.test(name)){
        username.classList.add('is-valid');
    }
    else{
        username.classList.remove('is-valid');
    }
}

// Email Validation
function validEmail(){
    const emailValue = email.value;
    const re = /^([a-zA-Z0-9\.\_])+@([a-zA-Z0-9\.\_\-]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(emailValue)){
        email.classList.add('is-valid');
    }
    else{
        email.classList.remove('is-valid');
    }
}

// Zipcode Validation
function validZipcode(){
    const zipcodeValue = zipcode.value;
    const re = /^[0-9]{2,5}$/;
    if(!re.test(zipcodeValue)){
        zipcode.classList.add('is-valid');
    }
    else{
        zipcode.classList.remove('is-valid');
    }
}

// Phone no Validation
function validPhone(){
    const phoneValue = phone.value;
    const re = /^[0-9]{11}$/;
    if(!re.test(phoneValue)){
        phone.classList.add('is-valid');
    }
    else{
        phone.classList.remove('is-valid');
    }
}

// Submit Form
function submitForm(){
    if(username.value === '' && email.value === '' && zipcode.value === '' && phone.value === ''){
        showMessage('Fill all the input values!', 'alert alert-danger')
    }
    else{
        showMessage('Submitted Success!!','alert alert-success');
        username.value = '';
        email.value = '';
        zipcode.value = '';
        phone.value = '';
    }
}

// Show Message
function showMessage(message, className){

    const card = document.querySelector('.card');
    const title = document.querySelector('.title');
    
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    card.insertBefore(div, title);

    setTimeout(function(){
        div.remove();
    }, 2000)

}