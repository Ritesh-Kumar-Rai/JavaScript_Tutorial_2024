// Implement a custom forEach loop

const arr_for_testing = [10,20,30,40,"c++","js", "java", "react", "python",50,60];


// 1st Standalone function

function forEachStandalone(arr,callback){

    if(!Array.isArray(arr)){
        throw new Error("Expected 1st Argument as array type!!");
        return;
    }else if(typeof callback === "undefined"){
        throw new Error("Expected 2nd Argument but never got!");
        return;
    }else if(typeof callback !== "function"){
        throw new Error(`Expected 2nd Argument as function type but got ${typeof(callback)}`);
        return;
    }

    for(let i=0; i<arr.length; i++){
        callback(arr[i], i, arr);
    }
}

forEachStandalone(arr_for_testing, (item,index,arr)=>{
    // console.log(item,index,arr);
});

// Error checking
/*forEachStandalone({a:1,b:2},(each_item)=>{
    console.log(each_item);
});*/

// forEachStandalone(arr_for_testing, ); error

// forEachStandalone(arr_for_testing, "testing callback") error

// 2nd Prototype custom basic function

Array.prototype.forEachCustom = function(callback){
    if(!Array.isArray(this)){
        throw new Error("Didn't get Array! Expected an Array!!!");
        return;
    }else if(typeof callback === "undefined" || callback === null){
        throw new Error("callback function must required!");
        return;
    }else if(typeof callback !== "function"){
        throw new Error(`2nd Argument must be callback function but received ${typeof(callback)} type!`);
        return;
    }

    let length = this.length;
    let index = 0;
    while(index < length){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }

        index++;
    }
};


const new_arr = [
    {name: "react js", type: "course"},
    {name: "javascript", type: "book"},
    {name: "swift os", type: "music"}
];

new_arr.forEachCustom((each_item, i, arr)=>{
    console.log(i,each_item);
    // console.log(arr);
});

/*arr_for_testing.forEachCustom((item)=>{
    // console.log(item);
});*/

const obj = {
    a: 1,
    b: 2
};

// obj.forEachCustom((i)=>console.log(i)); => error not a function

// new_arr.forEachCustom("op"); error checked


// 3rd advanced forEachLoop with prototype

Array.prototype.forEachAdv = function(callback, this_ctx){
    if(!Array.isArray(this)){
        throw "Didn't get Array! Expected an Array!!!";
        return;
    }else if(typeof callback === "undefined" || callback === null){
        throw new Error("callback function must required!");
        return;
    }else if(typeof callback !== "function"){
        throw new Error(`1st Argument must be callback function but received ${typeof(callback)} type!`);
        return;
    }

    const length = this.length;

    for(let index=0; index<length; index++){
        if(this.hasOwnProperty(index)){
            callback.call(this_ctx, this[index], index, this);
        }
    }
}

arr_for_testing.forEachAdv((item)=>{
    console.log(item);
});