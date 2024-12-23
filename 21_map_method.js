// map() method is similar to forEach() but it returns values 
/*UseCases :
  1. When you need to transform each element of an array into a new value.

  2. When you need to extract specific data from an array and create a new 
    array with that data.
*/

const arr = [1,2,3,4,5,6,7,8,9,10];

const new_arr = arr.map((num)=> num+10);

console.log(new_arr);


// Method Chaining

const method_chained_data = arr
                            .map((val)=> val *10)
                            .map((val) => val+1)
                            .filter((num) => num >= 50);

console.log(method_chained_data);                            