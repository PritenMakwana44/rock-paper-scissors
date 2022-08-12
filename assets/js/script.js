
const buttons = document.getElementsByClassName('rockpaperscissors');
const playerScore = document.getElementsByClassName('playerscore');
const computerScore = document.getElementsByClassName('computerscore');
const choices = ["rock", "paper", "scissors"];
let movesleft = document.getElementsByClassName('movesleft');
let counter = 0;





if (player === rock && computer === rock){
    counter++;
    playerScore++;
    computerScore++;
    alert('Tie!');
} else if(player === rock && computer === paper) {
    counter++;
    computerScore++;
    alert('Computer Wins!');
} else if (player === rock && computer === scissors){
    counter++;
    playerScore++;
    alert('Player Wins!');
}

if (player === paper && computer === paper){
    counter++;
    playerScore++;
    computerScore++;
    alert('Tie!');
} else if(player === paper && computer === scissors){
    counter++;
    computerScore++;
    alert('Computer Wins!');
} else if (player === paper && computer === rock){
    counter++;
    playerScore++;
    alert('Player Wins!');
}

if (player === scissors && computer === scissors){
    counter++;
    playerScore++;
    computerScore++;
    alert('Tie!');
} else if(player === scissors && computer === rock){
    counter++;
    computerScore++;
    alert('Computer Wins!');
} else if (player === scissors && computer === paper){
    counter++;
    playerScore++;
    alert('Player Wins!');
}