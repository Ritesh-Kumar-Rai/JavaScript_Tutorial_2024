// sometimes we pass multiple arguments to function, but how can we accept these on function as parameter

// 1. 
// function calculateCartAmount(num1){
//     return num1;
// }

// console.log(calculateCartAmount(200,90)); // 200


// 2. we use (...) rest operator to accept multiple args as parameters (n no. of args) 
function calculateCartAmount(num1,num2,...nums){
    return nums;
}

console.log(calculateCartAmount(200,90,180,789));


// handle object in function
const phone = {
    name : "phone model n",
    price : 24900
};

function cart(item){
    return `item is \`${item.name}\` and it's price is ${item.price}`;
}

// console.log(cart(phone));   
// console.log(cart("item"));   here we passed string but function expect object how we handle this


// We have 3 methods to check object type :
// 1. typeof : typeof obj === 'object'
// 2. instanceof : obj instanceof Object
// 3. Object.prototype.toString.call(obj) === '[object Object]'


function advancedCart(item){

    // console.log(typeof item);
    // console.log(item instanceof Object);
    // console.log(Object.prototype.toString.call(item));

    if(typeof item === "object" && item instanceof Object && Object.prototype.toString.call(item) === '[object Object]'){

        return `item is \`${item.name}\` and it's price is ${item.price}`;
    }else{
        return `Expected an object, but received: ${typeof item} & ${Object.prototype.toString.call(item)}`;
    }
}

console.log(advancedCart(phone));
console.log(advancedCart('phone'));
console.log(advancedCart([900]));
console.log(advancedCart(89));
console.log(advancedCart(false));



// Handle array type or array in function

function handleArray(arr){
    console.log(arr[1]);
}

handleArray([100,200,400,678]);

function advancedArrayHandle(arr){
    
    if(Array.isArray(arr) && Object.prototype.toString.call(arr) === "[object Array]"){
        console.log(arr[0]);
    }else{
        console.log(`Expected an Array, but received: ${typeof arr} & ${Object.prototype.toString.call(arr)}`);
    }
}

advancedArrayHandle("string type");
advancedArrayHandle({id : 90, name : "JS"});
advancedArrayHandle(56.97);
advancedArrayHandle(true);

// So, these are the ways to accept multi args, and accept and use Object and Array

// Also we have learned how to type check using robust and best method to prevent any type related error

