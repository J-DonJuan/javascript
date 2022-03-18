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
        return true;
    } else
    {
        console.log("You're not authenticated, gtfo");
    }
}

if (authenticate(userNamePrompt, passwordPrompt)){
    console.log("I present your newsfeed: " + newsFeed[0].username + "says: " + newsFeed[0].timeline);
} else {
    console.log("Authenticate returned false!");
}
