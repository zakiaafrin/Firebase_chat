function mountLoginScreen() {
    $('#root').html(LoginScreen());
    initLoginScreenListeners();
}

function LoginScreen() {
    let container = document.createElement('div');     //to create an HTML element

    container.id = 'login-screen';                    //to loading screen
    container.classList.add('Login-screen');
    container.innerHTML = `
    <div class="container-login">
        <div class="logo-login">
            <img src="./image/login_logo.png" alt="logo" style="width: 35vw; height: 20vh;">
        </div>
        <div class="in">
            <form>Email</br><input class="userid" type="text" placeholder="abc@def.com"></form>
        </div>
        <div class="in">
            <form>Password</br><input class="pass" type="password" placeholder="******"></form>
        </div>
        <div class="image">
            <div id="facebook-login-btn"><img src="./image/facebook-logo.png" alt="Facebook" style="width: 95px; background-color: #4f01637d; border-radius: 20%;"></div>
            <div id="google-login-btn"><img src="./image/gmail.png" alt="Google" style="width: 100px;  background-color: #4f01637d; border-radius: 20%;"></div>    
        </div>
        <div class="button">
            <button class="sign_up" id="sign_up">Sign up</button>                
            <button class="sign_in">Sign in</button>            
        </div>
</div>
      `;
    return container;
}

function initLoginScreenListeners() {
    $('#google-login-btn').on('click', function () {
        createPersistantSession(logInWithGoogle);
    });

    $('#facebook-login-btn').on('click', function () {
        createPersistantSession(logInWithFacebook);
    });

    $('#sign_in').on('click', function() {
        createPersistantSession(loginWithEmailAndPassword);
      });

    $('#sign_up').on('click', function() {
        // console.log('going to sign up screen');
        navigate('sign-up-screen');
      });
}

/* <div id="facebook-login-btn"><img src="http://www.sussex.ac.uk/wcm/assets/media/269/content/39962.100x100.png" alt="Facebook" style="border-radius: 17%"></div>
        <div id="google-login-btn"><img src="https://jrlocksmithroseville.com/wp-content/uploads/Google-Logo-Square.png" alt="Google"></div>     */