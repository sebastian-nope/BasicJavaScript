function maquina (machine) {
    switch(machine){
        case "scissors":
            console.log("You win!");
            break;
        case "paper":
            console.log("You lose!"); 
            break;
        default:
            console.log("Its a tie!"); 
            break;
    }
}

function playGame (human, machine) {
    switch(human){
        case "rock":
            maquina (machine)
            break;
        case "paper":
            maquina (machine)
            break;
        case "scissors":
            maquina (machine)
            break;
    }
    console.log("H:" + human +" M:"+ machine);
}

var options = ["rock", "paper", "scissors"];
var machine = options[Math.floor(Math.random() * options.length)];
var choice = prompt("Enter your choice 1-rock, 2-paper or 3-scissors.");

playGame(options[choice-1], machine);