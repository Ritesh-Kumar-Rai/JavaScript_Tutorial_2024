class User{
    constructor(username){
        this.username = username;
    }

    loggingMe(){
        console.log(`user ${this.username} is logged in`);
    }
}

class Chai extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    give_me_name(){
        console.log(`username is ${this.username}`);
    }
}

const masala_chai = new Chai("masala chai", "masala@chai.com", "itschai");

console.log(masala_chai);
masala_chai.loggingMe();
masala_chai.give_me_name();

const user1 = new User("user watchdogs");

user1.loggingMe();
// user1.give_me_name(); error

console.log(masala_chai === user1);
console.log(masala_chai === Chai);

// Correct method to check is the object is comes from this class or not
console.log(masala_chai instanceof Chai);
console.log(masala_chai instanceof User);

console.log(user1 instanceof User);
console.log(user1 instanceof Chai);

