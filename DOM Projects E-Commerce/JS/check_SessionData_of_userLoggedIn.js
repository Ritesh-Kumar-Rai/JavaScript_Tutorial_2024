const check_for_sessionData = () =>{
    const sessionData = JSON.parse(sessionStorage.getItem("Ritesh Rai's E-comm proj."));
    if(sessionData){
        return sessionData.username;
    }
    return false;
}

const check_session_for_userLogin = () =>{
    const sessionData_Username = check_for_sessionData();
    if(sessionData_Username && Object.prototype.toString.call(sessionData_Username) === "[object String]"){
        console.warn(Object.prototype.toString.call(sessionData_Username));
        handleLoginBtn_if_user_loggedIn(sessionData_Username);
    }
}


// The function which will be called when user clicks on logout button to remove the sessionStorage Data 
const logOut_my_account = () =>{
    sessionStorage.removeItem("Ritesh Rai's E-comm proj.");

    const login_modal_btn = document.getElementById("user-login-popup");
             login_modal_btn.classList.add("user-login-modal-popup");

    document.querySelectorAll(".user-login-modal-popup").forEach((btn)=>{
        btn.addEventListener("click",modal_popUp_listenerfunc);
    });

    // let's add new class to modify and add green dot indicator 
    document.querySelector(".ri-user-3-fill").classList.remove("after-modal-login-indicator");

     /* finally remove the event listener from login btn which displays the logOut options */    
        login_modal_btn.removeEventListener("click",showUserName_and_LogOutOption);

        // and also remove event listener from document, which is used to hide the logout options when user clicks anywhere in doc.
    document.removeEventListener("click",close_the_loggedIn_options_if_user_clicks_outside_login_btn);
    const loggedIn_container = document.querySelector(".user-login-logout-info");
    loggedIn_container.style.visibility = "hidden"; 
    loggedIn_container.style.display = "none"; 
    
    check_session_for_userLogin();

    login_modal_btn.appendChild(document.createTextNode("Login"));

    HapticOn();
}


check_session_for_userLogin();