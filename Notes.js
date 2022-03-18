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



// JavaScript terminology review!
// -Function declaration is out creation of functions
function funcName() {

}

// -Function expression is a way for us to create functions with a variable by basically creating an anonymous function &
//  assigning it to a variable.
let newFunc = function() { // Assigns anonymous function to a variable

}

// -An expression is something that produces a value
4+3

// -Calling or invoking a function 
funcName();

// function vs method
function thisIsAFunction(){

}

var obj = {
    thisIsAMethod: function() {

    }
}

// calling a method vs function
thisIsAFunction();
obj.thisIsAMethod;




//Loops

var todos = [
    "clean room",
    "brush teeth",
    "take out trash",
    "study"
]

//Standard for loop iterating over todos
for (let i = 0; i < todos.length; i++){
    console.log(todos[i]);
}

//Standard forEach loop
todos.forEach(function(element, index){
    console.log(element + " has an index: " + index);
})


// Checks condition first before executing code
let counter = 0;
while (counter < 10){
    console.log(counter);
    counter++;
}

// Do while loop, executes code at least once before checking the condition
let counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while(counterTwo > 0);
