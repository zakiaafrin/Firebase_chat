function mountLoginScreen() {
    $('#root').html(LoginScreen());
    initLoginScreenListeners();
}

function LoginScreen() {
    let container = document.createElement('div');     //to create an HTML element

    container.id = 'login-screen';                    //to loading screen
    container.classList.add('Login-screen');
    container.innerHTML = `
    <div class="container">
    <div class="logo">
        <img src="./image/login_logo.png" alt="logo" width="200vw" height="200vh">
    </div>
    <div class="in">
        <form style="font-weight: bold; color: white; font-family: "Montserrat", sans-serif; font-size: 22px;">Email <input class="user" type="text" placeholder="abc@def.com"></form>
        </br>
        <form style="font-weight: bold; color: white; font-family: "Montserrat", sans-serif; font-size: 22px;">Password  <input class="pass" type="password" placeholder="******"></form>
    </div>
    <a href="#" class="forgot">Forgot Password?</a>
    <div class="image">
        <div id="facebook-login-btn"><img src="./image/facebook-logo.png" alt="Facebook" style="width: 95px;""></div>
        <div id="google-login-btn"><img src="./image/gmail.png" alt="Google" style="width: 100px;"></div>    
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