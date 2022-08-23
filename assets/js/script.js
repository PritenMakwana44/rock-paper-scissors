



let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
playerScore = 0;
computerScore = 0;
document.getElementById("playerScore").innerHTML = `Player: ` + playerScore;
document.getElementById("computerScore").innerHTML = `Computer: ` + computerScore;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const choices = ['rock', 'paper', 'scissors'];

let movesLeft = document.getElementsByClassName("movesLeft");
movesLeft = 10;
document.getElementsByClassName("movesLeft").innerHTML = `Moves Left: ` + movesLeft;

function game(player) {
    const computer = computerChoiceGen();

    if (player === 'rock' && computer === 'rock') {
        document.getElementById("scoreBoard").textContent = 'Tie!';
        playerScore++;
        computerScore++;
        tieColor();
        
    } else if (player === 'rock' && computer === 'paper') {
        document.getElementById("scoreBoard").textContent = 'Computer Wins!';
        computerScore++;
        computerWinColor();
    } else if (player === 'rock' && computer === 'scissors') {
        document.getElementById("scoreBoard").textContent = 'Player Wins!';
        playerScore++;
        playerWinColor();
    }
    if (player === 'paper' && computer === 'paper') {
        document.getElementById("scoreBoard").textContent = 'Tie!';
        playerScore++;
        computerScore++;
        tieColor();
    } else if (player === 'paper' && computer === 'scissors') {
        document.getElementById("scoreBoard").textContent = 'Computer Wins!';
        computerScore++;
        computerWinColor();
    } else if (player === 'paper' && computer === 'rock') {
        document.getElementById("scoreBoard").textContent = 'Player Wins!';
        playerScore++;
        playerWinColor();

    }
    if (player === 'scissors' && computer === 'scissors') {
        document.getElementById("scoreBoard").textContent = 'Tie!';
        playerScore++;
        computerScore++;
        tieColor();
    } else if (player === 'scissors' && computer === 'rock') {
        document.getElementById("scoreBoard").textContent = 'Computer Wins!';
        computerScore++;
        computerWinColor();
    } else if (player === 'scissors' && computer === 'paper') {
        document.getElementById("scoreBoard").textContent = 'Player Wins!';
        playerScore++;
        playerWinColor();
    }
    Gameover()
    document.getElementById("playerScore").innerHTML = `Player: ` + playerScore;
    document.getElementById("computerScore").innerHTML = `Computer: ` + computerScore;

}

function computerChoiceGen() {
    const choiceNumber = Math.floor(Math.random() * choices.length)
    return choices[choiceNumber];
}



function buttonPick() {
    rockBtn.addEventListener("click", function () {
        game("rock");
    })

    paperBtn.addEventListener("click", function () {
        game("paper");
    })

    scissorsBtn.addEventListener("click", function () {
        game("scissors");
    })

}

buttonPick();

function Gameover() {

    if (playerScore === 10) {
        alert('Gameover - Player Wins!')
        location.href = "/rock-paper-scissors/playerwin.html"
        resetScores();
    } else if (computerScore === 10) {
        alert('Gameover - Computer Wins!');
        location.href= "/rock-paper-scissors/computerwin.html"
        resetScores();
    }
}

function resetScores() {

    playerScore = 0;
    computerScore = 0;
}


function playerWinColor(){
    document.getElementById("playerScore").style.color = 'green';
    document.getElementById("computerScore").style.color = 'black';

}

function computerWinColor(){
    document.getElementById("computerScore").style.color = 'red';
    document.getElementById("playerScore").style.color = 'black';
}

function tieColor(){
    document.getElementById("computerScore").style.color = 'blue';
    document.getElementById("playerScore").style.color = 'blue';
}


function rulesPopup(){
    alert("Rules:\nRock beats Scissors, Scissors beats Paper, Paper beats Rock\nFirst to 10 wins!");
}


