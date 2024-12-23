// global array of users
let users = new Array({
    username : "epicUser",
    email_id : "epicgames@junior.com",
    password : "674Ary@U*uv"
});



// This function is for event listener which will applied to whole document only if user loggedIn, because when the user clicks anywhere in document the logout container
// which appeared when user clicked on login user btn will be hide or close
function close_the_loggedIn_options_if_user_clicks_outside_login_btn(e){
    const login_btn = document.getElementById("user-login-popup");
        const loggedIn_container = document.querySelector(".user-login-logout-info");
    if(e.target !== login_btn && !login_btn.contains(e.target) && e.target !== loggedIn_container && !loggedIn_container.contains(e.target)){
        loggedIn_container.style.visibility = "hidden";
        loggedIn_container.style.display = "block";
    }
}


// This function is made for re-usability which handles the login btn
const handleLoginBtn_if_user_loggedIn = (username) =>{
    const login_modal_btn = document.getElementById("user-login-popup");
                        document.querySelectorAll(".user-login-modal-popup").forEach((btn)=>{
                            btn.removeEventListener("click",modal_popUp_listenerfunc);
                        });
                        ///
                        login_modal_btn.classList.remove("user-login-modal-popup");
                    

                        // let's add new class to modify and add green dot indicator 
                        document.querySelector(".ri-user-3-fill").classList.add("after-modal-login-indicator");
                        // let's remove the text node of login btn, the login btn has 2 childs i element and text_node to delete text_node see below: 
                        login_modal_btn.removeChild(login_modal_btn.children[0].nextSibling);
                       
                        // console.error(login_modal_btn.children[2]);

                       
                        /*setTimeout(()=>{
                            // to add again the event listener to login btn 
                            console.log("done");
                            document.getElementById("user-login-popup").classList.add("user-login-modal-popup");
                            document.querySelector(".user-login-modal-popup").addEventListener("click", modal_popUp_listenerfunc)
                        },9000);*/

                       /* finally when user logged-in let's add a new event listener to login btn so when user clicks on it, the option container which contains 
                            user name and log out option will display */    
                        login_modal_btn.addEventListener("click",showUserName_and_LogOutOption);
                        
                        const username_of_login = document.getElementById("username-after-loggedIn");
                        username_of_login.innerHTML = '<i class="ri-shield-user-line"></i> '+ username;
                        username_of_login.style.width = "100%";
}

const ModalEventCapturer = () =>{
    const login_form = document.getElementById("modal-login-form");

    const imGuestBtn = document.getElementById("imGuest");

    
    // adding event to form
    login_form.addEventListener("submit", (e)=>{

        e.preventDefault();
        
        HapticOn();
    
        const form_data = new FormData(login_form);
        const emailTag = document.getElementById("email");
        const passwordTag = document.getElementById("password");

        const email = new String(form_data.get("email").trim());
        const password = new String(form_data.get("password").trim());

        let i = new Number(0);
        
        if(email.length <= 0){
            displayError(emailTag, "Oops! Email ID is not valid!");
        }else if(!validateEmail(email)){
            displayError(emailTag, "Oops! Email ID is not valid!");
        }else{
            displaySuccess(emailTag, "Email is Good");
            i++;
        }

        const isPasswordisOk = validatePassword(password);

        if(isPasswordisOk === "Password is valid."){
            displaySuccess(passwordTag, "Password is Good");
            i++;
        }else{
            displayError(passwordTag,isPasswordisOk);
        }

        if(i === 2){
            try {
                let flag = new Boolean(false);
                for(let i=0; i < users.length; i++){
                    if(users[i].email_id.localeCompare(email) === 0 && users[i].password.localeCompare(password) === 0){
                        console.warn("User found!");
                        flag = true; 
                        sessionStorage.setItem("Ritesh Rai's E-comm proj.",JSON.stringify(users[i]));
                        // alert(typeof JSON.stringify(users[i]))
                        document.querySelector(".modal").classList.add("please-wait-until-modal-hides");
                        setTimeout(()=>{
                            document.querySelector(".back-formodal").classList.toggle("showModal");
                            const modal = document.querySelector(".modal");
                            modal.classList.toggle("showModal");
                            document.body.classList.toggle("hide-body");
                            modal.classList.remove("please-wait-until-modal-hides");
                            // reseting the login form
                            login_form.reset();
                            
                        },3000);
                        handleLoginBtn_if_user_loggedIn(users[i].username);
                    }
                }
                if(flag == false){
                    
                    const alertDivTag = document.createElement("div");
                    alertDivTag.appendChild(document.createTextNode("😅Oops! User not found!"));
                    alertDivTag.style.backgroundColor = "red";
                    alertDivTag.style.color = "aliceblue";
                    alertDivTag.style.borderRadius = "8px";
                    alertDivTag.style.width = "100%";
                    alertDivTag.style.padding = "4px 10px";
                    alertDivTag.style.marginBlock = "15px";
                    alertDivTag.style.textAlign = "center";
                    alertDivTag.style.fontWeight = "bold";
                    login_form.insertBefore(alertDivTag,login_form.firstChild);

                    HapticOn(true);

                    setTimeout(()=>{
                        login_form.removeChild(alertDivTag);
                    },3000);
                    throw new Error("USER NOT FOUND!");
                }
            } catch (error) {
                console.error(error);
            }
            console.log("LOGIN DONE...");
        }

    });



    // adding event to guest btn
    imGuestBtn.addEventListener("click", (e)=>{
        imGuestBtn.disabled = true;
        imGuestBtn.style.cursor = "not-allowed";
        imGuestBtn.innerHTML = `I'm a Guest <span class="spin-loader"></span>`;

        HapticOn();

        setTimeout(()=>{
            document.getElementById("email").value="epicgames@junior.com";
            document.getElementById("password").value="674Ary@U*uv";
            imGuestBtn.disabled = false;
            imGuestBtn.style.cursor = "pointer";
            imGuestBtn.textContent = "I'm a Guest";
            HapticOn();
        },5000)
    });
}



// event listener function for logged-in btn to show username and log-out option
function showUserName_and_LogOutOption(e){

    // and also apply event listener to document, so that if user clicks any where the logOut container gets unvisible
    document.addEventListener("click",close_the_loggedIn_options_if_user_clicks_outside_login_btn);
    
    const loggedIn_container = document.querySelector(".user-login-logout-info");
    if(loggedIn_container.style.visibility === "visible" && loggedIn_container.style.display === "block"){
        loggedIn_container.style.visibility = "hidden";
        loggedIn_container.style.display = "none";
        return;
    }
    loggedIn_container.style.visibility = "visible";
    loggedIn_container.style.display = "block";
    loggedIn_container.style.height = "100px";
    loggedIn_container.style.minWidth = "170px";
    loggedIn_container.style.width = "auto";
    
    HapticOn();
} 





// Register Form Capturer
const RegisterModalCapture = () =>{
    const modal_register_form = document.getElementById("modal-register-form");

    modal_register_form.addEventListener("submit", (e)=>{

            e.preventDefault();

            HapticOn();

            let i = new Number(0);

            const registerFormObject = new FormData(modal_register_form);

            // GETTING HTML TAGS
            const usernameTag = document.getElementById("username");
            const emailTag = document.getElementById("email-for-register");
            const passwordTag = document.getElementById("password-for-register");
            const cPasswordTag = document.getElementById("cpassword");
            
            const username = new String(registerFormObject.get("username").trim());
            const email = new String(registerFormObject.get("email-for-register").trim());
            const password = new String(registerFormObject.get("password-for-register").trim());
            const cpassword = new String(registerFormObject.get("cpassword").trim());

            // validate username
            if(username.length === 0 || username === ""){
                displayError(usernameTag,"username must not be empty!");
            }else if(Object.prototype.toString.call(username) !== "[object String]"){
                displayError(usernameTag,"username must be string type!");
            }else if(username.length < 3){
                displayError(usernameTag,"username must be atleast 3 character!");
            }else{
                displaySuccess(usernameTag, "Username is Good");
                i++;
            }

            // validate email id
            if(email.length <=3){
                displayError(emailTag,"Oops! Email ID is not valid!");
            }else if(!validateEmail(email)){
                displayError(emailTag,"Oops! Email ID is not valid!");
            }else{
                displaySuccess(emailTag,"Email ID is good");
                i++;
            }

            // validate password
            const isPasswordisOk = validatePassword(password);

            if(isPasswordisOk === "Password is valid."){
                displaySuccess(passwordTag, "Password is Good");
                i++;
            }else{
                displayError(passwordTag,isPasswordisOk);
            }

            // compare confirm password
            if(cpassword.localeCompare(password) === 0){
                displaySuccess(cPasswordTag, "Both password is Good");
                i++;
            }else{
                displayError(cPasswordTag, "Both password must be same!");
            }

            if(i === 4){


                function showAlert(msg,bgColor){
                    const alertDivTag = document.createElement("div");
                    alertDivTag.appendChild(document.createTextNode(msg.toString()));
                    alertDivTag.style.backgroundColor = bgColor.toString();
                    alertDivTag.style.color = "aliceblue";
                    alertDivTag.style.borderRadius = "8px";
                    alertDivTag.style.width = "100%";
                    alertDivTag.style.padding = "4px 10px";
                    alertDivTag.style.marginBlock = "15px";
                    alertDivTag.style.textAlign = "center";
                    alertDivTag.style.fontWeight = "bold";
                    console.warn(users);
                    modal_register_form.insertBefore(alertDivTag,modal_register_form.firstChild);
                    setTimeout(()=>{
                        modal_register_form.removeChild(alertDivTag);
                    },3000);
                }

                try {
                    
                    let isEmailExist = false;
                    users.forEach((user)=>{
                        console.log("inside loop...")
                        if(user.email_id.localeCompare(email) === 0){
                            isEmailExist = true;
                            console.log("email exist......");
                        }
                    });
                        if(isEmailExist){
                            showAlert("Email ID already exist!","#e58604");
                            HapticOn(true);
                        }else{
                            users.push({
                                username : `${username}`,
                                email_id : `${email}`,
                                password : `${password}`
                            });
                            showAlert("Registration Completed!","green");
                        }
                    
                } catch (error) {
                    console.log(error);
                }
                console.info("Registered Successfull");
                console.table(users);
            }


    });
}


// Form validation

// function which is used to validate email
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}

// function which is used to validate password
  function validatePassword(password) {
    // Password should be at least 8 characters long
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    // Password should contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }

    // Password should contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }

    // Password should contain at least one digit
    if (!/\d/.test(password)) {
        return "Password must contain at least one digit.";
    }

    // Password should contain at least one special character
    if (!/[$@$!%*?&#^]/.test(password)) {
        return "Password must contain at least one special character.";
    }

    // If all criteria are met, the password is valid
    return "Password is valid.";
}




// function to display Error
function displayError(Tag, message){
    Tag.style.border = "1.5px solid red";
    Tag.classList.add("input-err-border");
    Tag.classList.add("shakeIt");
    Tag.nextElementSibling.textContent = message;
    Tag.nextElementSibling.style.color = "red";

    HapticOn(true);
        setTimeout(()=>{
            Tag.classList.remove("shakeIt");
        },1000);
}

// function to display success
function displaySuccess(Tag, message){
    Tag.style.border = "1.5px solid green";
    Tag.classList.remove("input-err-border");
    Tag.nextElementSibling.textContent = message;
    Tag.nextElementSibling.style.color = "green";
}