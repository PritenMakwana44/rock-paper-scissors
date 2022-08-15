
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
playerScore = 0;
computerScore = 0;

playerScore.innerHTML = "Player:" + playerScore;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const choices = ['rock','paper','scissors']; 


function game(player) {
    const computer = computerChoiceGen();
    
    if (player === 'rock' && computer === 'rock'){
        alert('Tie!');
        playerScore++;
        computerScore++;
    } else if(player === 'rock' && computer === 'paper') {
        alert('Computer Wins!');
        computerScore++;
    } else if (player === 'rock' && computer === 'scissors'){
        alert('Player Wins!');
        playerScore++;
    }
    if (player === 'paper' && computer === 'paper'){
        alert('Tie!');
        playerScore++;
        computerScore++;
    } else if(player === 'paper' && computer === 'scissors'){
        alert('Computer Wins!');
        computerScore++;
    } else if (player === 'paper' && computer === 'rock'){
        alert('Player Wins!');
        playerScore++;
    }
    if (player === 'scissors' && computer === 'scissors'){
        alert('Tie!');
        playerScore++;
        computerScore++;
    } else if(player === 'scissors' && computer === 'rock'){
        alert('Computer Wins!');
        computerScore++;
    } else if (player === 'scissors' && computer === 'paper'){
        alert('Player Wins!');
        computerScore++;
    }

    console.log(computer);
    console.log(player);

}

function computerChoiceGen(){
    const choiceNumber = Math.floor(Math.random() * choices.length)
    return choices[choiceNumber];
}

console.log(computerChoiceGen());


function buttonPick() {
    rockBtn.addEventListener("click", function() {
        game("rock");
     })

     paperBtn.addEventListener("click", function() {
        game("paper");
     })
    
    scissorsBtn.addEventListener("click", function() {
            game("scissors");
    })
    
}

buttonPick();

