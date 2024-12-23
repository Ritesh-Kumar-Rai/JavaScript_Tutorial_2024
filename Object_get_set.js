const User = {
    _email: "reactNative@js.com",
    _password: "Re12act@3#3",

    get email(){
        return this._email;
    },
    set email(value){
        this._email = value;
    },
    get password(){
        return this._password;
    },
    set password(value){
        this._password = value;
    }

};

const reactUser = Object.create(User);
console.log(reactUser.email);
console.log(reactUser.password);

reactUser.email = "react@github.com";
reactUser.password = "gith1234##";
console.log("------------+--------------");
console.log(reactUser.email);
console.log(reactUser.password);