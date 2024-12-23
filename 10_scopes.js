// scopes in js

// Global Scope
let a = 10;

if(true){

    // Local Scope
    let a = 90;
    a = 78; // modification possible
    const b = 100;
    var c = 20;
    console.log(a); // 90
}

console.log(a); // 10
// console.log(b);
// console.log(c);



// Closures : inner function has access to it's outer scope variables

function one(){
    let username = "Ritesh";

    function two(){
        let website = "www.riteshrai.com";
        console.log(username); // Ritesh
    }

    //console.log(website); // error
    two();
    
}

one();

// nested block scope

if(true){
    const username = "ritesh";
    if(username){
        const website = " www.riteshrai.com";
        console.log(username + website);
    }
    //console.log(website); // error
}

//console.log(username); // -> error


// ++++++++++++++++++++++++++++ Mini Hoisting ++++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num+1;
}


// console.log(addTwo(5));

let addTwo = function(num){
    return num+2;
}