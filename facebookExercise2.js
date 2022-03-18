let database = [
    {
        username: "John",
        password: "secret"
    },
    {
        username: "Sally",
        password: "secrets"
    },
    {
        username: "Bill",
        password: "secretb"
    },
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

function printNewsFeed(){
    console.log("Standby for newsfeed printing bro");
    console.log(newsFeed);
}

function isUserValid(username, password){
    for (let i = 0; i < database.length; i++){
        if (database[i].username === username && database[i].password === password){
            return true;
        }
    }
    return false;
}

if (isUserValid(userNamePrompt, passwordPrompt)){
    printNewsFeed();
} else {
    console.log("Login failed, please try again.");
}




// function authenticate(user, pass){
//     if (database[0].username === user && database[0].password === pass){
//         console.log("You're authenticated!");
//         return true;
//     } else
//     {
//         console.log("You're not authenticated, gtfo");
//     }
// }




// if (authenticate(userNamePrompt, passwordPrompt)){
//     console.log("I present your newsfeed: " + newsFeed[0].username + "says: " + newsFeed[0].timeline);
// } else {
//     console.log("Authenticate returned false!");
// }
