function createUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    // In this the way, the current context of createUser will not get username because, the username
    // is the part of createUsername() context 
    // createUsername(username);

    // To store username to this context, we must pass createUser() this to createUsername() using .call() 
    createUsername.call(this,username); 

    this.email = email;
    this.password = password;
}

const user1 = new createUser("iskcon", "iskcon@krsna.com", "welovekrsna");

console.log(user1);