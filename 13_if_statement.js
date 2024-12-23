// if statement

// if(condition == true){
//     code ... 
// }

if(2 === '2'){
    console.log("executed.");
}

if(2 !== '2'){
    console.log("executed..");
}


const temperature = 34

if(temperature < 50){
    console.log('temperature is not greater than 50');
}else{
    console.log('temperature is greater than 50!');
}


// implicit return condition statement
if(1000 > 500) console.log("greater");

// multiline or multi statement implicit return
if(200 < 500) console.log('test1'), console.log('test2'); // unreadable: so don't use this

const balance = 1000;

//nested if conditions
if(balance < 200){
    console.log("less than 200");
}else if(balance < 500){
    console.log("less than 500");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("equal to 1000");
}

// && or || operator

const loggedInFlag = true;
const debitCard = true;
const login_with_google = false;
const login_with_jio = true;

if(loggedInFlag && debitCard && 20 != 20){
    console.log("allow to buy a course");
}

if(login_with_google || login_with_jio){
    console.log("welcome user!");
}