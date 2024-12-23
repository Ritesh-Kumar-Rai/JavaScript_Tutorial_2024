function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function(){
            return ((this._password) + Math.floor(Math.random() *120));
        },
        set: function(value){
            this._password = value;
        }
    });
}

const chai = new User("chai@tapri.com", "chai");

console.log(chai.email);
console.log(chai.password);
chai.email = "masala_chai@tapri.in";
chai.password = "tapriChai";
console.log(chai.email);
console.log(chai.password);