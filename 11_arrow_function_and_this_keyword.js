// `this` keyword contains present context/scope.
// If you use `this` inside an object function then this contained the current context of object
// which has all properties of object inside it.
// So, when you want to access the property of object inside the current obj function
// then use `this.property_name`

const user = {
    id : 87373833,
    username : "Ritesh Kumar Rai",

    // object function
    getInfo : function(){
        console.log(`Hare Krsna, ${this.username} to this session`);
    },

    show_current_context : function(){
        console.log(this);
        show = () =>{
            // this arrow function will borrow the `this` context from it's surrounding function
            console.log(this);
        }
        show();
    }
}

user.getInfo();
user.show_current_context();

user.username = "Avinash Rai";
user.getInfo();


// But when you print `this` keyword in node environment then it displays blank {}
console.log(this);

// Whereas if you print `this` in browser then it will display window object


function this2(){
    console.log(this);
}
// this2();

const arrow = ()=>{
    console.log("inside arrow");
    console.log(this); // {} object because arrow function doesn't it's own context
    // instead it borrow from it's surrounding context `this`
}

// arrow();


// Arrow Function

// const addTwo = (n1,n2) =>{
//     return n1+n2;
// }

// implicit return arrow function
const addTwo = (num1,num2) => num1+num2; // short and implicitly return sum

// or 

// const addTwo = (num1,num2) => (num1+num2); use parenthesis 

/*[Note: If you use curly braces {} in function then return keyword is required
        if you used parenthesis () then return keyword not required.
]*/

console.log(addTwo(40,50));


// Sometimes, we return a object or array from a function, so how it could possible in implicit return function

// const getObj = () => {username : "javascript"} -> no incorrect way

const getObj = () => ({username : "javascript"}); // wrapped with parenthesis bracket()

console.log(getObj());

const getArray = () => ([10,20,30,40,50]); // correct way of implicit array return

const arr = getArray();
console.log(arr);

// we generally use arrow function & implicit return arrow function in below methods :

// arr.forEach((elem)=>{});
// arr.forEach((elem)=> ());