const login_modal_popUp = document.querySelectorAll(".user-login-modal-popup");

function modal_popUp_listenerfunc(e){
    
        document.querySelector(".back-formodal").classList.toggle("showModal");
        const modal = document.querySelector(".modal");
        modal.classList.toggle("showModal");
        document.body.classList.toggle("hide-body");

        console.table(login_modal_popUp);

        HapticOn();
    
}

login_modal_popUp.forEach((btn)=>{

    
    btn.addEventListener('click', modal_popUp_listenerfunc);
    
})

function displayRegisterForm(){

    
    const modal_body = document.querySelector(".modal-body");
    modal_body.innerHTML = `
        <form method="get" id="modal-register-form">
        <div class="form-control">
        <label for="username">Username</label>
        <div class="input-with-sensitive-info">
        <input type="text" name="username" id="username" required />
        <small></small>
        </div>
        </div>
        <div class="form-control">
        <label for="email-for-register">Email address</label>
        <div class="input-with-sensitive-info">
        <input type="email" name="email-for-register" id="email-for-register" required />
        <small>We'll never share your email with anyone else.</small>
        </div>
        </div>
        
        <div class="form-control">
        <label for="password-for-register">Password</label>
        <div class="input-with-sensitive-info">
        <input type="password" aria-hidden="false" name="password-for-register" id="password-for-register" required />
        <small></small>
        </div>
        </div>
        
        <div class="form-control">
        <label for="cpassword">Confirm Password</label>
        <div class="input-with-sensitive-info">
        <input type="password" aria-hidden="false" name="cpassword" id="cpassword" required />
        <small></small>
        </div>
        </div>
        
        
        <input type="submit" value="REGISTER" />
        
        </form>
        
        <div class="small-text-container">
        <small id="go-to-login-form" onclick="displayLoginForm()">GO TO LOGIN PAGE</small>
        </div>
        `;
        
        document.querySelector(".modal-header > h3").textContent = "REGISTER";
       
        RegisterModalCapture();

        HapticOn();
}

function displayLoginForm(){

        document.querySelector(".modal-body").innerHTML = `
        <form method="get" id="modal-login-form">
            <div class="form-control">
                <label for="email">Email address</label>
                <div class="input-with-sensitive-info">
                    <input type="email" name="email" id="email" placeholder="epicgames@junior.com" required />
                    <small>We'll never share your email with anyone else.</small>
                </div>
            </div>

            <div class="form-control">
                <label for="password">Password</label>
                <div class="input-with-sensitive-info">
                    <input type="password" aria-hidden="false" name="password" id="password" placeholder="674Ary@U*uv" required />
                    <small></small>
                </div>
            </div>

            <div>
                <input type="checkbox" name="remember" id="remember" />
                <label for="remember" onclick="HapticOn()">Remember Me</label>
            </div>

            <input type="submit" id="log-in" value="LOG IN" />
            <button type="button" id="imGuest">I'm a Guest</button>
    </form>

    <div class="small-text-container">
        <small id="create-account-link" onclick="displayRegisterForm()">Haven't created an account, Click here to CREATE ACCOUNT</small>
    </div>
        `;

      document.querySelector(".modal-header > h3").textContent = "LOGIN";

      ModalEventCapturer();
      HapticOn();
}



ModalEventCapturer();