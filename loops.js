var todos = [
    "clean room",
    "brush teeth",
    "take out trash",
    "study"
]

// for (let i = 0; i < todos.length; i++){
//     console.log(todos[i]);
// }

todos.forEach(function(element, index){
    console.log(element + " has an index: " + index);
})

let counter = 0;
while (counter < 10){
    console.log(counter);
    counter++;
}

let counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while(counterTwo > 0);

