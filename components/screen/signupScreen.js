function mountSignUpScreen() {
    $('#root').html(SignUpScreen());
    initSignUpScreenListeners();
}

function SignUpScreen() {
    let container = document.createElement('div');     //to create an HTML element

    container.id = 'sign-up-screen';                    //to loading screen
    container.classList.add('sign-up-screen');
    container.innerHTML = `
    <div id="goback">
        <img src="./image/back-button.png" alt="Back Button" width="35vw" height="35vh">
        <div>
            <img src="./image/go_back.png" alt="Back Button" width="28vw" height="45vh">
        </div>
    </div>

    <div class="logo-signup">
        <img src="./image/logo_signup_4.png" alt="Signup Logo" width="165vw" height="135vh">
    </div>

    <div class="email_pass">
        <div style="margin-bottom: 10px;">
            <form>Email</br><input id="email" type="text" placeholder="abc@def.com"></form>
        </div>
        
        <div style="margin-bottom: 10px;">
            <form>Password</br><input id="pass" type="password" placeholder="******"></form>
        </div>
        
        <div style="margin-bottom: 10px;">
            <form>Confirm Password</br><input id="confirmPass" type="password" placeholder="******"></form>
        </div>
    </div>
    
    <div class="signup-btn">
        <div id="signup_button">Sign up</div>
    </div>
      `;
    return container;
}

function initSignUpScreenListeners() {
    $('#goback').on('click', function () {
        navigate('login-screen');
    });

    $('#signup_button').on('click', function () {
        let email = $('#email').val();
        let password = $('#pass').val();
        let passwordConfirmation = $('#confirmPass').val();

        // if(isValidEmail(email) && isValidPassword(password){
        if (!isValidEmail(email)){
            alert('Invalid e-mail');
        }
        else if (!isValidPassword(password)) {
            alert('Invalid password');
        }
        else if (password !== passwordConfirmation) {
            alert('Passwords do not match');
        }
        else {
            signUpWithEmailAndPassword(email, password);
        }

    });
}