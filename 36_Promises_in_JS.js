// Promises in JS

// 1st Promise
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async 1 is completed..");
        resolve();
    },1000);
});

promiseOne.then(()=>{
    console.log("async 1 resolve completed");
});

// 2nd Promise

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async 2 is completed..");
        resolve();
    },2000);
}).then(()=>{
    console.log("async 2 resolve completed.");
});


// 3rd Promise 

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // passing the arguments to resolve
        resolve("Async 3 task is done...");
    },3000);
});

promiseThree.then((parameter)=>{
    console.log(parameter);
});


// 4th Promise

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = false;
        if(!error){
            resolve({user: "username", id: 234, company: "JAVASCRIPT co."});
        }else{
            reject("Some error occured");
        }
    },5000);
});

promiseFour.then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.error(error);
});


// 5th Promise

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const users = {username : "JS", password : "JS@1234"};
        const error = true;
        if(!error){
            resolve(users);
        }else{
            reject({error_message : "Something went wrong in JS!", reference_id: "12556uefrt5"});
        }
    },6000);
});

promiseFive.then((users)=>{
    console.log("5th: ->",users);
    return users.username;
}).then((user)=>{
    console.log(user);
})
.catch(error => console.log(error))
.finally(()=>{
    console.log("end of 5th promise");
});


// Handle Promise with async/await

const promiseSix = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const users = {username : "JS", password : "JS@1234"};
        const error = false;
        if(!error){
            resolve(users);
        }else{
            reject({error_message : "Something went wrong in JS!", reference_id: "12556uefrt5"});
        }
    },8000);
});


async function consumePromise(){
    try {
        const response = await promiseSix;
        console.log(response);
    } catch (error) {
        if(error.hasOwnProperty("error_message")){
            console.error(error.error_message);
        }else{
            console.error(error);
        }
    }
}

consumePromise();


// Example with fetch() api

/*async function getDataFromAPI(){
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getDataFromAPI(); */

// fetch without async/await

fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then((data)=>{
    console.log(data);
}).catch(error => console.log(error));

// [Note: Network related codes like 404,500 etc. are count as resolve and it is accessible at .then()]

