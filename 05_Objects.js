// Object in js, is a way to store key:value pairs of data

// Ways to create an Object : using Singleton & Object literal

// 1. In singleton, we create an object by using `new` keyword like new Object()
// const obj = new Object({name:"javascript", course : true, country : "IN"});

// console.log(obj);

//Syntax : { key : value, ...}


// 2. In Object literals, we directly create object using {} like let obj = {...}
const personal_info = {
    name : "Ritesh Rai",
    age : 18,
    location : "Bihar",
    email_id : "riteshrai@google.com",
    isLoggedIn : false,
    "last Login Days" : ["Monday","Saturday"]
};

console.log(personal_info);

// How to access object properties
console.log(personal_info.name);
console.log(personal_info.email_id);
//   or
console.log(personal_info["location"]);
console.log(personal_info["last Login Days"][0]);


// How to add symbol in object

const mySymbol = Symbol("id");

const obj = {
    [mySymbol] : 567,
    item : "PS-5 pro",
    price : 54000,
    storage : "2TB",
    storage_type : "SSD",
    cracked : false,
    desc : "lorem sony ps 5 .............",
    discount : 10
}

console.log(typeof mySymbol);

console.log(obj[mySymbol], typeof obj[mySymbol]);
// here we added symbol as key in our object, so technically it should be symbol type but it returns number
// this is because, js checks by it's value which is numeric type
// to check the actual datatype use the below way

// 1. Object.prototype.toString.call() : used to check internal class in our case it is Symbol 
console.log(Object.prototype.toString.call(obj[mySymbol])); // [object Symbol]);

// How we can overrite or modify property values of object

// Syntax : object_name.propety_name = new_value || object_name[key] = new_value

personal_info.email_id = "riteshrai@chatgpt.com";

console.log(personal_info.email_id);

// How can we add new key:value is same as above
// Syntax : object_name.new_property_name = new_value || object_name[new_key] = new_value

obj.brand = "sony";

console.log(obj);

// How can we stop/prevent or restrict/freeze object modification like adding new/deleting etc. is by using Object.freeze(obj_name);

// Object.freeze(obj);
// obj.brand = "microsoft"

// console.log(obj.brand);

Object.freeze(personal_info);
personal_info.email_id = "riteshrai@microsoft.com"
console.log(personal_info.email_id);

// How to delete object key:value pair from object is by using key

console.log("before delete brand key "+obj.brand);
delete obj.brand;
console.log("after delete brand key "+obj.brand)
// console.log(obj);


// How to add a function into a Object
// Syntax: object_name.property_name = function(){...} definition
obj.getInfo = function(){
    console.log(`***The brand new SONY PS5 pro with ray tracing support 
    and 8K rendering with 4K 120fps support***`);
}

obj.getInfo();
console.log(obj.getInfo); // [function (anonymous)] -> anonymous because we declared anonymous function to object.key

// How to access the keys of object from the object functions

obj.final_price = function(){
    console.log(`
    -> item price : ${this.price}
    -> discount : ${this.discount}%
    -> Payable amount : ${this.price - (this.price * this.discount/100)}`);
}

obj.final_price();
// we use `this` keyword to refer current object keys from it's child function property

