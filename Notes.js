// Methods are simply functions inside an object.
// JavaScript types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefinded
// 5. Null
// 6. Symbol
// 7. Object

alert("Hello!");
prompt("Please input something!");

// The page loads in order, generally speaking you should put your script tags at the bottom
// unless you don't mind  

// Ways to create a function

// Function declaration
function functionName() {
    console.log("This code runs");
};

// Anonymous function expression
var functionName1 = function() {
    console.log("This code runs");
};

// Declare an object
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    // Add function to an object (aka a method)
    shout: function() {
        console.log("OMG!!! AAAAAAH!!!");
    }
};

// Questin: Why isn't an Array listed as a fundamental data type in JavaScript.
// -Arrays are an implementation of an object, looking something like this:
var array = {
    0: "0 element of array",
    1: "1 element of array",
    2: "2 element of array"
};



