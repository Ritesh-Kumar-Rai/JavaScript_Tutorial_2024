// Truthy and Falsy values

// const num = 0;
// const num = [];
const num = -9077; // truthy

if(num){
    console.log("truthy value");
}else{
    console.log("falsy value");
}


// Falsy values : false, 0, -0, BigInt 0n, BigInt -0n, "", null, undefined, NaN
// Truthy values : "0", "false", " ", [], {}, function(){}

const users = [];

if(users.length === 0){
    console.log("array is empty");
}

const obj = {};

if(Object.keys(obj).length === 0){
    console.log("object is empty");
}


// Nullish coalescing operator (??)
/*The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. */

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

const pak = null ?? undefined ?? null ?? true ?? 6
console.log(pak)

// const op = null || undefined || ""
const op = null ?? undefined ?? ""
console.log(op)


// Ternary Operator (?):
// Syntax : condition ? true : false

const chai = 90;

(chai < 100) ? console.log("chai is ready") : console.log("chai is not ready");
chai < 30 ? console.log("chai is ready") : console.log("chai is not ready");
