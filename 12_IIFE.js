// Immediately Invoked Function (IIFE)

// Syntax: (...functionBody)(..exec, or args);

(function run(){
    // named IIFE 
    console.log(`DB connected...`);
})();

// if you want to invoke another IIFE after one IIFE then always use semicolon(;) after first IIFE


(()=>{
    // anonymous IIFE
    console.log("DB2 connected...");
})();


// how to accept parameters and pass args in IIFE
(function(server_name){
    // anonymous IIFE function
    console.log(`Connecting to ${server_name} server`);
})("YouTube");
