/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function checkEmail() {
    let email = document.getElementById('email').value.trim();

    //email = email.trim();
    let emailError = '';

    //required
    if (email.length === 0) {
        emailError += 'This field is required';
    }

    //>= 5 characters

    if (email.length < 5) {
        emailError += '\n The Email must be at least five characters long.';
    }

    // @
    if (email.indexOf('@', 1) === -1) {
        emailError += '\n The Email must have @ character';
    }


    //displayMessages

    if (emailError.length > 0) {
        document.getElementById('error-message').innerText = emailError;
        document.getElementById('success-message').innerText = ''; 
    } else {
        document.getElementById('success-message').innerText = 'The email is corect.';
        document.getElementById('error-message').innerText = '';
        document.getElementById('email').value = '';  
    }


}