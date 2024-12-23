// Declare Singleton Object :
const youtubeUser = new Object();
// console.log(youtubeUser);

// Declare non-Singleton Object :
// const youtubeUser = {};
// console.log(youtubeUser);

// Add values 
youtubeUser.id = 2;
youtubeUser.profile_name = "kuch bhi ho sakta hai";
youtubeUser.email = "youtuber@google.com";

// console.log(youtubeUser);

// Let's create an nested object and try 2 ways to access it

const userDetail = {
    name : 'Ritesh Rai',
    age : 18,
    phone_no : 98998988,
    identification : {
        govt_identification : {
            addhar : {
                card_no : 99_88_88_89,
                card_name : "Ritesh Kumar Rai"
            },
            pan : {
                pan_no : 90_78_67_78,
                pan_name : "Ritesh Kumar Rai"
            }
        },
        persoanl_identification : {
            "email id" : {
                // random email accounts
                google : {
                    first : "youtube@youtbe.com",
                    second : "myritesh@google.com",
                    third : "riteshrai@gmail.com"
                },
                microsoft : {
                    first : "ritesh@microsoft.com",
                    second : "companyrai@microsoft.com"
                },
                yahoo : {
                    first : "ritesh__rai@yahoo.com"
                }
            }
        }
    }
}


// Now the above we have created a Nested(multi-depth) object and we require to access those values

// 1. way by using dot(.) notation or by using [] bracket
console.log(userDetail.identification.govt_identification.addhar.card_name);
//          or
console.log(userDetail['identification']['govt_identification']['addhar']['card_no']);

// But what if the api object has different sub_object name or key_name or even doesn't exists
// In this case we got an error or system crashed to prevent this we have 2 method which is safe


/* Optional Chaining Operator(?.) : Introduced in ECMAScript 2020, this operator allows you to 
access nested properties without throwing an error if any of the intermediate properties are missing. 
You can use it like this: */

console.log(userDetail?.identification?.persoanl_identification?.["email id"]?.google?.third);
// yes you can also use [] with ?. to access nested obj/keys


// Assume we have two or more objects & same as array we want to combine them all together to make an one object
// then how?

const obj1 = { 1 : "a", 2 : "b"};
const obj2 = { 3 : "c", 4 : "d"};
const obj3 = { 5 : "e", 6 : "f"};

// const final_obj = {obj1, obj2, obj3};
//console.log(final_obj); // Nope, actually instead of combining all together it inserted both object 

// Any way to perform desired combination(concatenation) yes : by using Object.assign()

// Object.assign(target,source) accepts target which is {}, and sources means pass the objects which you need to combine and convert them to object form

const final_obj = Object.assign({}, obj1,obj2,obj3);
console.log(final_obj);

// Okay, any other way like we done in array by using spread(...) operator : yes
const final_obj2 = {...obj1, ...obj2, ...obj3}
console.log(final_obj2);

// Sometimes, when we receive data from DB, then we got array of objects [{},{},{}] like below:

const api_user = [
    { id : 1, name : "a"},
    { id : 2, name : "b"},
    { id : 3, name : "c"},
    { id : 4, name : "d"}
];

// To acces these data how can we?

// api_user[0].name  -> simple in array we access data using [index_no] then use dot (.) operator

// Alright, we covered many things but one question is : The Object might have many keys with values
//     is any shortcut method or way to only access whole keys/values or even both without looping
// yes

console.log(youtubeUser);
console.log(Object.keys(youtubeUser)); // Object.keys() returns all keys wrapped within single array
console.log(Object.values(youtubeUser)); // Object.values() returns all values wrapped within single array

// Object.entries() returns array of key:value pair wrapped inside an array & returns whole arrays as one array
console.log(Object.entries(youtubeUser)); // [ [key,value], [key,value], ...]

// Sometime, we loop through an object or we got an error because of key:value missing
// To prevent this check at the started stage whether an property exist inside object or not

console.log(youtubeUser.hasOwnProperty('profile_name')); // true
console.log(youtubeUser.hasOwnProperty('name')); // false

// what if we have nested objects
console.log(Object.keys(userDetail)); // [name,age,phone_no,identification]

// for nested use :
console.log(Object.keys(userDetail.identification));
//   or
console.log(Object.keys(userDetail.identification.persoanl_identification["email id"]));
// same for value
console.log(Object.values(userDetail.identification.persoanl_identification["email id"]));

// for Array of objects
console.log(Object.keys(api_user)); // default keys
console.log(Object.keys(api_user[1])); // [id,name]

// use hasOwnProperty() in nested object
console.log(userDetail.hasOwnProperty("identification")); // true
console.log(userDetail.hasOwnProperty("govt_identification")); // false
console.log(userDetail.identification.hasOwnProperty("govt_identification")); // true
console.log(userDetail.identification.persoanl_identification.hasOwnProperty("google")); // false
console.log(userDetail.identification.persoanl_identification.hasOwnProperty("email id")); // true


// Great happy journey!


