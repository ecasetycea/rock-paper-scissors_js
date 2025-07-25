const resetBtn = document.querySelector(".reset");
const buttons = document.querySelector(".buttons");
const pScoreElem = document.querySelector("#playerScore");
const cScoreElem = document.querySelector("#computerScore");
const pMoveElem = document.querySelector("#playerMove");
const cMoveElem = document.querySelector("#computerMove");
const announcements = document.querySelector(".announcements");

resetBtn.addEventListener("click", () => reset());
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


let playerScore;
let computerScore;
let gameEnded;
init();



function init() {
    playerScore = 0;
    computerScore = 0;
    pMoveElem.textContent = '';
    cMoveElem.textContent = '';
    gameEnded = false;
    announcements.textContent = "Good Luck!";
    displayScores();
}

function reset() {
    init();
    announcements.textContent = "Game reset. Good Luck!";
}

function checkEnd() {
    if(Math.max(playerScore, computerScore)===5) return true;
    return false;
}

function doEnd() {
    let outcome = (playerScore>computerScore) ? "won" : "lost";
    gameEnded = true;
    announcements.textContent = `Game is finished, you ${outcome}!`
}
    
function displayScores(roundWinner = '') {
    pScoreElem.textContent = playerScore.toString();
    cScoreElem.textContent = computerScore.toString();
    if(roundWinner==='') return;
    announcements.textContent = `${roundWinner} won the Round!`;
}

function displayChoices(playerChoice, computerChoice) {
    pMoveElem.textContent = playerChoice;
    cMoveElem.textContent = computerChoice;
}

function playRound(choice) {
    if(gameEnded) {
        announcements.textContent = "Game has already ended. Do a reset."
        return;
    }

    let computerChoice = getComputerChoice();
    let comparison = choice + "_" + computerChoice;
    let winner;

    switch(comparison) {
        case "rock_scissors":
        case "scissors_paper":
        case "paper_rock":
            winner = "You";
            playerScore++;
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

    displayScores(winner);
    displayChoices(choice, computerChoice);
    if(checkEnd()) doEnd();
}

function getComputerChoice() {
    pick = Math.floor(Math.random()*100) % 3;

    switch(pick) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}