// Why we can't change the math.pi property in js

// console.log(Math.PI);

// Math.PI = 45.78;

// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// const descriptors = Object.getOwnPropertyDescriptors(Math);

console.log(descriptor);
// console.log(descriptors);


const veda = Object.create({});

Object.assign(veda, {
    name: "Shrimad Bhagvad Gita",
    price: 250,
    isAvailable: true,

    orderVeda: function(){
        console.log(`Your ${this.name} is ordered...`);
    }
});

// console.log(veda);

function loopObject(obj){

    for (const [key,value] of Object.entries(obj)) {
        if(typeof value !== "function"){
            console.log(`${key} : ${value}`);
        }
    }

}

loopObject(veda);

Object.defineProperty(veda, "name", {
    writable: false, // prevents from modification
    enumerable: false // prevent iteration
});
console.log("------------+-----------");
loopObject(veda);

Object.defineProperties(veda,{
    price:{
        writable: false,
        enumerable: false 
    },
    isAvailable:{
        writable:false,
        enumerable: false
    }

})

console.log("----------+----------");
loopObject(veda);
console.log("----------+----------");



// try to modify the property value of veda Object

veda.name = "Shiv Puran";
veda.price = 400;
veda.isAvailable = false;

console.log(veda.name);
console.log(veda.price);
console.log(veda.isAvailable);