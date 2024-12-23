// Object Literal means a "literally an pure object"
const user = {
    username: "Ritesh Rai",
    id_reference: "134a67bgf34",
    date: "24-Sep-2024",
    greetings: function(){
        // console.log("Hare Krsna user");
        // console.log(`username: ${this.username}`);
        console.log(this); // current context
    }
};

console.log(user.id_reference);
// console.log(user.greetings());
console.log(this); // global context



// Constructor Function ( new keyword)
/*Sometimes we want to create a new instances of an object means new copy/context
    - Because in some cases we want to not affect the existing values instead create a new
    instances for me so that i can do my all work sepeartely */

// For example:
/* We have one function which is calculating some maths in main context/object where
all values are stored at main object and we change it's value as per the parameters passed;

- Assume, i called same function 3 to 4 times but because the function is manipulating the main object data,
at each call the values of object get's replaced/override to stop this. We use new keyword
which is used to create a new instance/context/copy of same object.
So, doesn't matter how many times i call that function each function call has it's own values of object.*/ 

function doSomething(user, user_count, isLoggedIn){
        this.user = user;
        this.user_count = user_count;
        this.isLoggedIn = isLoggedIn;

        this.greetings = function(){
            console.log(`Namaste! ${this.user}`);
        }

        return this; // if you won't return this, then by default implicitly it returns this;
}

/*const userOne = doSomething("ritesh kumar", 45,true);
const userTwo = doSomething("avinash kumar", 55,false);
console.log(userOne);
console.log(userTwo);
// Oops! The userTwo is replaced/overwrite the userOne data.
// Yes that's why we use new keyword to call constructor function which creates new instance/context
*/

// Let's solve this issue by calling a constructor function using `new` keyword
const userOne = new doSomething("ritesh kumar", 45, true);
const userTwo = new doSomething("avinash kumar", 55, false);
console.log(userOne);
console.log(userTwo); 
userOne.greetings();
userTwo.greetings();
console.log(userOne instanceof doSomething, userOne instanceof Object);
console.log(userTwo instanceof doSomething, userTwo instanceof Object);




/* Points to remember:

When we use new keyword to call constructor function

1. An empty {} object created which is also called an `new instance`;
2. A constructor function called which takes all arguments packed it up and store them 
   to newly created object them give it to you.
3. Whatever arguments written in this keyword will all get injected to the object.
   same mentioned at point 2nd.
4. You got this all values as object from that function which is implicitly returned
      
*/
