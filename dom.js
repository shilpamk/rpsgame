
options = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

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
let playerSelection;

function runSelection(e) {
    playerSelection = e.target.id;
    game();
}

let gameWinningPoints = 3;
let foundWinner = false;
function game() {
    let computerSelection;
    let gameResult;
                
    computerSelection = computerPlay(); 
    pChoice.innerHTML =   playerSelection;
    cChoice.innerHTML =  computerSelection;
    gameResult = playRound(computerSelection.toLowerCase(), playerSelection.toLowerCase());
    console.log(gameResult);
    res.innerHTML = gameResult;
        
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    
    if(computerScore == gameWinningPoints) {
        res.innerHTML = "Computer Won!!";
        res.style.color = "darkblue" ; 
        foundWinner = true;
    } else if(playerScore == gameWinningPoints) {
        res.innerHTML = "Player Won!!";
        res.style.color = "darkblue";  
        foundWinner = true;      
    } 
    if(foundWinner) {
        foundWinner = false;
        computerScore = 0;
        playerScore = 0;
    }

    
    res.style.backgroundColor = "yellowgreen";
}

