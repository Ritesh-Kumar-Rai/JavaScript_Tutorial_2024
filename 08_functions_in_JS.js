// Function is a bunch of reusable codes which we can re-use anytime for many time
// Assume, till now what we do we write codes to perform some task, in our day to day life
// for same thing we write same code many times whenever we required. To make things simple
// we write code ones for particular thing and whenever it required we call it. but how?
// -> answer is function, it's a wrapper which we use to wrap our code then call this function

// Syntax : 
/*
    function function_name(){
        
        function body [definition]
        ...
    }

    // to access code
    function_name(); // call it
    function_name is reference but when we use () to call it, it gets execute
    
    
    // Parameterized function
    function func_name(parameters){
        body....
    }

    func_name(args...);
*/

// example :

function sayName(){
    console.log("Ritesh Kumar Rai");
}

sayName();
console.log(sayName); // [Function: sayName]


function sum(num1, num2){
    return num1+num2;
    // we use return keyword to throw an result or any data from function to outside of it.
    // so can we store it to variable or print inside console.log();

    //[Note: don't write any code after next line of return keyword, because JS never execute anything after return keyword]
}

console.log(sum(10,15));
const result = sum(20,56);
console.log(result);


function loginUserMessage(username = "demo"){

    if(!username){
        return "please enter username!";
    }
    return `${username} just logged-in`;
}

console.log(loginUserMessage("Ritesh Rai"));

// what happened when arguments are not passed or undefined/ "" empty string
console.log(loginUserMessage());


