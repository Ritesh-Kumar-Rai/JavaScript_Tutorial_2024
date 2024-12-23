// for of loop

// ["","",""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6,7,8,9,10];

for (const i of arr) {
    // console.log(i);
}


const greeting = "Hare Krsna";

for (const greet of greeting) {
    if(greet === " ") continue;
    // console.log(greet);
}

// Map

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map);

// loop through Map

for (const i of map) {
    console.log(i); // ['IN', 'India'], pair of  [key,value]
}

// Destructure using [key,value]

for (const [key,value] of map) {
    console.log(key, ':- ',value);
}


// try for..of in Object
const myObj = {
    game1 : "watchdogs2",
    game2 : "Assassins Creed",
    game3 : "Just Cause 3"
};

/*for (const game of myObj) {
    console.log(game);
}*/

// for...of loop does not support object for looping