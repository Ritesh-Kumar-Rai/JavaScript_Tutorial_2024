// Number in JS

const num1 = 590;

console.log(num1);

// To explicitly assign value as Number type then use new Number()
const myNumber = new Number(400);

console.log(myNumber);

// Some built-in methods

console.log(myNumber.toString()); // converts to string
console.log(myNumber.toString().length);

console.log(myNumber.toFixed(2)); // to display after decimal digits

// Generally, we use toFixed() in E-comm websites 

let num2 = 26.8907;

console.log(num2.toPrecision(3)); // returns string containing a number as per the digits provided, it round of the no. of digits provided

/* toLocaleString() sometimes we have large numbers like 1000000 
& we are struggle to read this kind of number. 
So, we want to format this kind of number into some currency/number system standards
that's why we toLocaleString() which adds comma(,) to make number readable
like :
*/

const money = 1000000;

console.log(money.toLocaleString()); // by default it is in 'US' standard to convert it to INDIA pass arg like `en-IN`

console.log(money.toLocaleString('en-IN'));

// =========== Maths ===============

console.log(Math);
console.log(Math.PI.toFixed(2));

console.log(Math.abs(-89)); // returns positive number
console.log(Math.round(3.4)); // returns roundof value nearest number

// To convert higher or lower roundOf value we have 2 methods : ceil for Higher / floor for Lower

console.log(Math.ceil(4.1)); // returns greater or equal to roundOf value : 5
console.log(Math.floor(3.9)); // returns less than or equal to roundOf value : 3

// Find Max and Min value

console.log(`Max value : ${Math.max(2,3,31,7,9,20)}`);
console.log(`Min value : ${Math.min(8,6,7,2,9,5,3)}`);

// generate random number

console.log(Math.random()); // in decimal
console.log((Math.random() * 10) +1); // to not get 0 add (+1)

// generate any random number between some range than add max & min
const max = 20;
const min = 10;

console.log(Math.floor((Math.random() * (max - min + 1))+min));

