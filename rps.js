humanScore = 0;
computerScore = 0;

function playRound() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    comparison = humanChoice + "_" + computerChoice;
    let winner;

    switch(comparison) {
        case "rock_scissors":
        case "scissors_paper":
        case "paper_rock":
            winner = "You";
            humanScore++;
            break;
        case "scissors_rock":
        case "paper_scissors":
        case "rock_paper":
            winner = "The computer";
            computerScore++
            break;
        default:
            winner = "Nobody";
    }

    alert(`You played ${humanChoice} and the computer played ${computerChoice}.
        ${winner} won this round!.
        The score now is ${humanScore}:${computerScore} (You:Computer).`);
}

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
        if(choice.toLowerCase()==="rock" || choice.toLowerCase()==="paper" || choice.toLowerCase()==="scissors") {
            return choice.toLowerCase();
        }
        alert("Please enter a valid choice")
    }
}