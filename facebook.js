let database = [
    {
        username: "John",
        password: "secret"
    }
]

let newsFeed = [
    {
        username: "Bobby",
        timeline: "Coding everyday!"
    },
    {
        username: "Sally",
        timeline: "Coding JavaScript every day actually"
    }
]

let userNamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

function authenticate(user, pass){
    if (database[0].username === user && database[0].password === pass){
        console.log("You're authenticated!");
    } else
    {
        console.log("You're not authenticated, gtfo");
    }
}

authenticate(userNamePrompt, passwordPrompt);