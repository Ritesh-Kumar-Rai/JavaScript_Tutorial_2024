// const str = "Ritesh    ";
// const str2 = "ChaiCode   ";

// console.log(str.advancedLength());

const myHeros = ["Krrish", "G.one"];

const herosPower = {
    krrish : "jump-n-fly",
    "g.one" : "multi-power",
    displayPower : function(){
        console.log(`Krrish power is ${this.krrish} and G.one power is ${this["g.one"]}`);
    }
};

// herosPower.displayPower();

Object.prototype.ritesh = function(){
    console.log("I'm Ritesh Kumar Rai");
}

Array.prototype.sayRitesh = function(){
    console.log("Ritesh is saying Om Namah Shivaay!");
}

myHeros.chant = function(){
    console.log("chant hare krsna...");
}



// accessing ritesh()
// herosPower.ritesh();
// myHeros.ritesh();

// accessing sayRitesh()
// myHeros.sayRitesh();
// herosPower.sayRitesh(); error

// accessing chant()
// myHeros.chant()
// herosPower.chant() error


// Inheritance

const School = {
    education_system: "vedic"
}

const TA_support = {
    support: true,

    __proto__: School
}

const Teacher = {
    name: "Prof. Ritesh"
}

const user = {
    username: "cyberpunk",
    user_id: 123552
}

console.log(TA_support.education_system);

// Object.__proto__ = {...Teacher, ...TA_support}; not work

// Modern Syntax
Object.setPrototypeOf(Teacher, TA_support);
Object.setPrototypeOf(user, Teacher);

console.log(Teacher.education_system);
console.log(user.support);



// 