let humanScore;
let computerScore;

playGame(5);

function playGame(rounds) {
    humanScore = 0;
    computerScore = 0;
    let currentRound = 0;
    const maxRounds = rounds;
    
    while(currentRound < maxRounds) {
        let winner = playRound();
        addRound = winner!=="Nobody";
        if(addRound) currentRound++;
    }
    
    let outcome = (humanScore>computerScore) ? "won" : "lost";
    
    alert(`Game is finished!
        Final score is ${humanScore}:${computerScore} (You:Computer).
        You ${outcome}!`);
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let comparison = humanChoice + "_" + computerChoice;
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

    return winner;
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