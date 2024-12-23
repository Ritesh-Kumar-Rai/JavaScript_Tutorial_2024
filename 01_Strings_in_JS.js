const name = "Ritesh Kumar Rai";
const round = 5;

// older way of concatnation
console.log(name + round + " chanted!");

// new way using String Interpolation
console.log(`My name is ${name} and i have chanted ${round} rounds`); 

console.log(typeof name); // string

const gameName = new String('watchdogs 2');

console.log(`${gameName} and it's type is ${typeof gameName}`);
// console.log(typeof gameName); // object

console.log(gameName[0])
console.log(gameName.__proto__); // prototype which contains many string methods

// some string Built-In methods

console.log(gameName.length) // prints size
console.log(gameName.toUpperCase()); // convert to capital letter
console.log(gameName.charAt(2)); // pass index number
console.log(gameName.indexOf('t')); // pass a one letter

let new_string = gameName.substring(0,4);

console.log(new_string);

let new_string2 = gameName.slice(-11,7);
console.log(new_string2);

let new_string_with_spaces = "         JS            ";

console.log(new_string_with_spaces, new_string_with_spaces.length);

let trimed_str = new_string_with_spaces.trim();
console.log(trimed_str,trimed_str.length);
// we also have trimStart() & trimEnd()

const url = "https://www.epicgames.in/profile/ritesh%20kumar%20rai/library";

console.log(url);

// replace() method we use to replace any word or text to another one
console.log(url.replace("%20"," ")); // in this it only replace one searchvalue to another

// replaceAll() is used to search and replace value from entire string
console.log(url.replaceAll("%20", "___"));

// include() returns true/false by checking if passed value is exist in string or not
console.log(url.includes("profile")); // true

// split() is used to convert whole string into array based on the provided pattern
console.log(url.split("/"));





// memory allocation & management in JS

//1.
const new_word = name.toUpperCase();

console.log(new_word)

//2.
console.log(name.toUpperCase())

/* Since the primitive data's like string in JS are immutable
    means once it created it never modifies.
    *So, when we use .toUpperCase() the JS engine creates new string from
    existing string without modify original ones.And the new string
    which created is stores either Stack or Heap memory depending on their size,
    way of initialization, pattern, life span etc.

    *When we create a string directly like :
            let str = 'hare krsna' -- or
            let str1 = "hare ram" -- or
            let str2 = `hari har`
    there's a highly chance it will store on Stack Memory for optimization
    & efficiency.
    The JS will decide whether to store on Stack or Heap on various factors:
    like if the string is short in length -> store on stack
        - if string created without new keyword -> store on stack
        - if string has short life span like passing it to function without storing it to variables
         or storing on block scoped variable like let/const -> store on stack
        etc.
    if all the above condition will not met than it is highly chance that
    the string will store on Heap memory.
    e.g let str = new String("om");
    -In the above eg. the first condition met but still it will store on Heap memory,
    reason is simple because we created string using new Keyword we explicitly creating 
    new object of that string. And we know that objects are always store on Heap memory.                
*/

/* So at 1. we are storing newly created string using .toUpperCase() 
    it is highly chance it will store on heap [not garauntee!]
    because it is long life string.

    And at 2nd because we are not storing, the new string instead
    we are passing it to console.log() function it means it is short lived string &
    block scoped also. So, it is highly chance it will store on Stack memory instead of Heap. 

*/