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
        alert('Tie!');
        playerScore++;
        computerScore++;
        tieColor()
    } else if (player === 'rock' && computer === 'paper') {
        alert('Computer Wins!');
        computerScore++;
        computerWinColor()
    } else if (player === 'rock' && computer === 'scissors') {
        alert('Player Wins!');
        playerScore++;
        playerWinColor();
    }
    if (player === 'paper' && computer === 'paper') {
        alert('Tie!');
        playerScore++;
        computerScore++;
        tieColor()
    } else if (player === 'paper' && computer === 'scissors') {
        alert('Computer Wins!');
        computerScore++;
        computerWinColor()
    } else if (player === 'paper' && computer === 'rock') {
        alert('Player Wins!');
        playerScore++;
        playerWinColor();

    }
    if (player === 'scissors' && computer === 'scissors') {
        alert('Tie!');
        playerScore++;
        computerScore++;
        tieColor();
    } else if (player === 'scissors' && computer === 'rock') {
        alert('Computer Wins!');
        computerScore++;
        computerWinColor()
    } else if (player === 'scissors' && computer === 'paper') {
        alert('Player Wins!');
        playerScore++;
        playerWinColor();
    }
    Gameover()
    document.getElementById("playerScore").innerHTML = `Player: ` + playerScore;
    document.getElementById("computerScore").innerHTML = `Computer: ` + computerScore;
    console.log(computer);
    console.log(player);
    console.log(playerScore);
    console.log(computerScore);

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
