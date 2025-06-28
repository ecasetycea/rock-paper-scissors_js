const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    let target = e.target;
    let choice = ''
    
    switch(target.id) {
        case "rock":
            choice = "rock";
            break;
        case "paper":
            choice = "paper";
            break;
        case "scissors":
            choice = "scissors";
            break;
    }

    playRound(choice);
} );


let humanScore;
let computerScore;
init();

function init() {
    humanScore = 0;
    computerScore = 0;
}

function doEnd() {
    let outcome = (humanScore>computerScore) ? "won" : "lost";
    
    alert(`Game is finished!
        Final score is ${humanScore}:${computerScore} (You:Computer).
        You ${outcome}!`);

}

function checkEnd() {
    if(Math.max(humanScore, computerScore)===5) return true;
    return false;
}

function playRound(choice) {
    if(checkEnd()) doEnd();

    let computerChoice = getComputerChoice();
    let comparison = choice + "_" + computerChoice;
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

    alert(`You played ${choice} and the computer played ${computerChoice}.
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