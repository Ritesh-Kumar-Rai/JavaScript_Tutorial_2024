// for...in loop

const myObj = {
    game1 : "watchdogs2",
    game2 : "Assassins Creed",
    game3 : "Just Cause 3"
};

for (const key in myObj) {
    if (Object.hasOwnProperty.call(myObj, key)) {
        const element = myObj[key];
        // console.log(element);
    }
}

// or 
for (const key in myObj) {
    console.log(key, ": ",myObj[key]);
}



// for..in loop in array
const arr = ["javascript", 'c++', 'python', 'reactjs', 'swift'];

for (const key in arr) {
    console.log(key," :- ",arr[key]);
}