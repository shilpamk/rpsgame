
options = ["rock", "paper", "scissors"];
var computerScore = 0;
var playerScore = 0;

function computerPlay() {
    var choice =  Math.floor(Math.random() * Math.floor(3));
    return options[choice];
}

function playRound(computerSelection, playerSelection) {
    var result = "";
    switch(computerSelection) {
        case "rock":
            if(playerSelection == "paper") {
                result = "Player Won! Paper beats Rock";
                playerScore++;
            } else if(playerSelection == "scissors") {
                result = "Computer Won! Rock beats Scissors";
                computerScore++;
            } else {
                result = "Game draw! Both chose the same option";
            }
            break;
        case "paper":
            if(playerSelection == "rock") {
                result = "Computer Won! Paper beats Rock";
                computerScore++;
            } else if(playerSelection == "scissors") {
                result = "Player Won! Scissors beats Paper";
                playerScore++;
            } else {
                result = "Game draw!  Both chose the same option";
            }
            break;
        case "scissors":
            if(playerSelection == "rock") {
                result = "Player Won! Rock beats Scissors";
                playerScore++;
            } else if(playerSelection == "paper") {
                result = "Computer Won! Scissors beats Paper";
                computerScore++;
            } else {
                result = "Game draw! Both chose the same option";
            }
            break;
    }
    return result;
}

let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper"); 
let btnScissors = document.getElementById("scissors");

btnRock.addEventListener("click", runSelection);
btnPaper.addEventListener("click", runSelection);
btnScissors.addEventListener("click", runSelection);

let pScore = document.getElementById('player');
let cScore = document.getElementById('computer');


let pChoice = document.getElementById('plrChoice');
let cChoice = document.getElementById('compChoice');
let res = document.getElementById('result');
var playerSelection;

function runSelection(e) {
    playerSelection = e.target.id;
    game();
}

var gameCount = 0;
function game() {
    var computerSelection;
    var gameResult;
                
    computerSelection = computerPlay(); 
    pChoice.innerHTML =   playerSelection;
    cChoice.innerHTML =  computerSelection;
    gameResult = playRound(computerSelection.toLowerCase(), playerSelection.toLowerCase());
    console.log(gameResult);
    res.innerHTML = gameResult;
    
    
   // console.log("Computer score: "+ computerScore );
    
    //console.log("Player score: "+ playerScore );
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    if(computerScore > playerScore) {
        console.log("Winner: Computer");
    } else if(playerScore > computerScore) {
        console.log("Winner: Player");
    } else {
        console.log("Game draw");
    }
}

