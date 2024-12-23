// Assume we have an array which contains original elements/properties
// and + we also added some property to parent Array. In that case
// when we loop through the array then we also got 
// non-original properties of Array.
// The question is just print the original properties only.

Array.prototype.name = "JS Interview Question";
Array.prototype.isExtraProperty = true;

const arr = [1,2,3,40,50,80]; // SMI Element

for(let i in arr){
    console.log(`${i} : ${arr[i]}`);
}

console.log("---------+---------+---------");

// Solution is easy
for (const i in arr) {
    if(arr.hasOwnProperty(i)){
        console.log(`${i}:${arr[i]}`);
    }
}