// forEach() loop

// syntax : 
/*
    array.forEach(callBackfn(value,index,arr){
        ...
    });
*/

const arr = ["javascript", 'c++', 'python', 'reactjs', 'swift'];

/*
    arr.forEach(function(value){
        console.log(value);
    });
*/

arr.forEach((item)=>{
    // console.log(item);
});

arr.forEach((value, index, arr)=>{
    // console.log(value,' ',index,' ',arr);
});



// Assume we got an data from api in the form of Array of object
// [{},{},{},...]

const programming_languages = [
    {
        languageName : "JavaScript",
        fileExtension : "js"
    },
    {
        languageName : "Java",
        fileExtension : "java"
    },
    {
        languageName : "C Language",
        fileExtension : "c"
    },
    {
        languageName : "C++",
        fileExtension : "cpp"
    },
    {
        languageName : "Python",
        fileExtension : "py"
    },
    {
        languageName : "PHP",
        fileExtension : "php"
    },
    {
        languageName : "TypeScript",
        fileExtension : "ts"
    },
    {
        languageName : "React js",
        fileExtension : "jsx"
    }
];

// How can we access object properties from this Array

function accessApi(object, index, arr){
    index++;
    console.log(`${index}) ${object.languageName} has file extension of .${object.fileExtension}`);
}



programming_languages.forEach(accessApi);


//[Note: forEach() method doesn't return anything, to return use filter or map]
