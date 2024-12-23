// Array is a collection multiple values or data

// Create an array
const myArr = [10,20,9,7,5,11];

const heroes = ["Shaktimaan", "G.one", "Krrish"]; 

// Access an array
console.log(myArr[0]); // index starts from 0, access values by it's index

// Another way to create an array
const myArr2 = new Array(1,2,3,4,5,6,7,8,9);

/* In array, if you copy it to another it will create Shallow Copy,
   Shallow copy means The properties of object whose share the same references is called shallow copy.
   Yes, behind the scene array is object and it stored in Heap memory. so when you copy this array to another than 
   both will share same address(reference) */

/* Deep copy :
    A copy which become real copy than it is called deep copy, any change in second
    variable will not reflect the original one. or it doesn't
    share the same reference  */
    
    
// some array built-in methods

console.log(myArr)
myArr.push(2); // used to insert new value at last
console.log(myArr);
myArr.pop(); // used to remove value from last index
console.log(myArr);

myArr.unshift(133); // used to insert value at first index causes to shift rest all of values by one value

console.log(myArr, myArr[0]);

myArr.shift(); // used to remove value from index 0 again causes to shift all values previous
console.log(myArr,myArr[0]);

//[Note: unshift() and shift() methods consumes more cpu process/power for large datasets!]

// includes() method : it is used to check whether the given value exists in array or not
// it returns boolean value true/false

console.log(myArr.includes(9));

// indexOf() method returns the index of the value which is provided to search
// it returns (-1) if the given value will not exist on array
console.log(myArr.indexOf(9)); // 2
console.log(myArr.indexOf(90)); // -1

// join() method
/*The join() method of Array instances creates and returns a new string 
by concatenating all of the elements in this array, separated by commas 
or a specified separator string. 
If the array has only one item, then that item will be returned without 
using the separator. */

const strArr = myArr.join();
console.log(myArr, typeof myArr, strArr, typeof strArr);

console.log(myArr.join(" ")); // 10 20 9 7 5 11
console.log(myArr.join("_")); // 10_20_9_7_5_11

// slice() & splice()

// 1. slice(start,end) accepts range and display result but not include exact last index instead (n-1)

// example : we have original array
console.log(myArr); // [ 10, 20, 9, 7, 5, 11 ]
const myar2 = myArr.slice(0,3);
console.log("result of slice(): "+myar2); // it will not display the 3 index value which is 7
// means n-1 -> 3-1 = 2 [0,1,2] index
console.log("Original array after using slice() : "+myArr);
// [Note: splice does not modify original array]

// 2. splice(start, end) will display the last index but it will modify original array
// means it will delete the indexes/values from org. array which is provided because it returns the new array by removing it from org. one

const myar3 = myArr.splice(0,3);
console.log("result of splice(): "+myar3);
console.log("Original array after using splice(): "+myArr);