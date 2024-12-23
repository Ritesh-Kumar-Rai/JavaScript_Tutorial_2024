function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 5;

console.log(multiplyBy5(50));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function buyChai(buyer,price){
    this.buyer = buyer;
    this.price = price;
    console.log(`The chai buyer name is ${this.buyer} with the price of ${this.price}`);
}

buyChai.prototype.increasePrice = function(){
    this.price++;
}

buyChai.prototype.printChai = function(){
    console.log(`Buyer is ${this.buyer} with current price ${this.price}`);
}
const user1 = new buyChai("Ritesh Rai", 15);
const user2 = buyChai("Random User", 10);

user1.increasePrice();
user1.printChai();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/