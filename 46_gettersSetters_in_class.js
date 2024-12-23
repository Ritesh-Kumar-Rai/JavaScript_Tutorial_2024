// Getters and Setters in class

class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email;
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password;
    }

    set password(value){
        this._password = value;
    }
}

const ritesh = new User("ritesh@rai.in", "lorem1234");

console.log(ritesh.email);
console.log(ritesh.password);
ritesh.email = "changed@email.com";
ritesh.password = "just changing";
console.log(ritesh.email);
console.log(ritesh.password);