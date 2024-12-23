// filter() method for array which returns data, syntax is same as forEach()

const arr = [1,2,3,4,5,6,7,8,9,10];

const nums = arr.filter((num)=>{
    // yes filter is used for conditional looping and returning
    return num >= 5;

    return num; // you can also return values without any condition
});


console.log(nums);


// how we can do the above same with forEach() loop

const nums_with_forEach = new Array(); 

arr.forEach((num)=>{
    if(num >= 5){
        nums_with_forEach.push(num);
    }
});

console.log(`data using forEach() loop : ${nums_with_forEach}`);