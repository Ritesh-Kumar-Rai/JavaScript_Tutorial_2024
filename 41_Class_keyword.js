// class keyword in js

/*class User{

    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `The encrypted password is @a${this.password}123adr`;
    }

    updateCredentials(nusername, nemail, npassword){
        this.username = nusername;
        this.email = nemail;
        this.password = npassword;

        return `The credentials updated: ${this.username}, ${this.email}, ${this.password} `;
    }
}*/


/*
const user1 = new User("16_roundChanter", "round16@malaChanter.com", "chanting_5624krsna");

console.log(user1.encryptPassword());
console.log(user1.updateCredentials("just_user", "just@google.com", "just23Google"));

console.log(user1.encryptPassword()); */



// Behind the Scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `The encrypted password is @a${this.password}123adr`;   
}

User.prototype.changeCredentials = function(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

    return `The credentials updated: ${this.username}, ${this.email}, ${this.password} `;
}


const user2 = new User("user2", "user@2.com", "itspassword");

console.log(user2.encryptPassword());
console.log(user2.changeCredentials("changing_name", "change@jio.com", "changed_2024"));

console.log(user2.encryptPassword());

