
options = ["rock", "paper", "scissors"];
var computerScore = 0;
var playerScore = 0;
var gameCount = 0;

let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper"); 
let btnScissors = document.getElementById("scissors");
let btnReset = document.getElementById("reset");
btnReset.addEventListener("click", reset);

btnRock.addEventListener("click", runSelection);
btnPaper.addEventListener("click", runSelection);
btnScissors.addEventListener("click", runSelection);

let pScore = document.getElementById('player');
let cScore = document.getElementById('computer');


let pChoice = document.getElementById('plrChoice');
let cChoice = document.getElementById('compChoice');

let res = document.getElementById('result');
var playerSelection;

function computerPlay() {
    let choice =  Math.floor(Math.random() * 3);
    return options[choice];
}

function playRound(computerSelection, playerSelection) {
    let result = "";
    switch(computerSelection) {
        case "rock":
            if(playerSelection == "paper") {
                result = "Paper beats Rock";
                playerScore++;
            } else if(playerSelection == "scissors") {
                result = "Rock beats Scissors";
                computerScore++;
            } else {
                result = "Game draw! Both chose the same option";
            }
            break;
        case "paper":
            if(playerSelection == "rock") {
                result = "Paper beats Rock";
                computerScore++;
            } else if(playerSelection == "scissors") {
                result = "Scissors beats Paper";
                playerScore++;
            } else {
                result = "Game draw!  Both chose the same option";
            }
            break;
        case "scissors":
            if(playerSelection == "rock") {
                result = "Rock beats Scissors";
                playerScore++;
            } else if(playerSelection == "paper") {
                result = "Scissors beats Paper";
                computerScore++;
            } else {
                result = "Game draw! Both chose the same option";
            }
            break;
    }
    return result;
}
function runSelection(e) {
    playerSelection = e.target.id;
    game();
}

function reset() {
    gameCount = 0;
    computerScore = 0;
    playerScore = 0;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    res.innerHTML = "Result";
}
function game() {      
    let computerSelection = computerPlay(); 
    pChoice.innerHTML =   playerSelection;
    cChoice.innerHTML =  computerSelection;
    res.innerHTML = playRound(computerSelection.toLowerCase(), playerSelection.toLowerCase());
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}







