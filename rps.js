function getComputerChoice() {
    pick = Math.floor(Math.random()*3);

    switch(pick) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    while(true) {
        choice = prompt("Enter your choice from 'rock', 'paper' and 'scissors'");
        if(choice==="rock" || choice==="paper" || choice==="scissors") return choice;
        alert("Please enter a valid choice")
    }
}