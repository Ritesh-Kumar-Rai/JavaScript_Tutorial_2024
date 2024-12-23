const marvel_heros = ["Ironman","Thor","Spiderman"];
const dc_heros = ["Superman","Flash","Batman"];

// i want to add this two arrays into one how?

//marvel_heros.push(dc_heros);

//console.log(marvel_heros); // No, it doesn't concatinate instead it inserted at last index & make array of array

//console.log(marvel_heros[3][0]); // superman

// Another way to concat two arrays

// const concatArr = marvel_heros.concat(dc_heros);
// console.log(marvel_heros);
// console.log(concatArr);

// concat() method is used to concatenate two or more arrays and returns new array, it does not change existing array

// But another greater way to do so : yes using [...] spread operator

const all_heros = [...marvel_heros,...dc_heros];
console.log(marvel_heros);
console.log(all_heros);


const another_depth_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]; // in this we have 2 depths

// Here we have a nested array which has many depths [depth means how deep a nested array structure have]

// To flatened this array or to concatenate this whole array into one we have one method

// array.flat() : it returns new flatened array based on provided depth, by default it is 1 and goes upto infinity

console.log(another_depth_array.flat(2));
// console.log(another_depth_array.flat(Infinity));



/*Sometimes, we get arrays from web-scraping or from backend/frontend in string type of another one
to safely check or convert it to array we have some methods */

// 1. Array.isArray() returns true if the provided data is array type else false

console.log(Array.isArray("javascript")); // false
console.log(Array.isArray(dc_heros)); // true

// 2. Array.from() used to convert any suitable/iterable data into array
console.log(Array.from("Ritesh Rai")); // returns array
console.log(Array.from({name : "JavaScript"})); // returns empty array [] because object is not iterable


// assume we have multi elements or variables & we want to combine all and convert them to array
const score1 = 100;
const score2 = 200;
const score3 = 300;

// we have Array.of() method which accepts elements to convert to single array
console.log(Array.of(score1,score2,score3));
console.log(Array.of("python","java"));
console.log(Array.of({name : "python"}, {game : "gta 5"}, "both are combined as array",500));

