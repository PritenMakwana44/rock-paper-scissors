
const rockBtn = document.getElementsByClassName('rock');
const paperBtn = document.getElementsByClassName('paper');
const scissorsBtn = document.getElementsByClassName('Scissors');
const options = ["rock","paper","scissors"];

rockBtn.addEventListener("onclick", startGame()); 


function startGame(){
    const player = rockBtn;
    const computer = options[Math.floor(Math.random()*options.length)];
    winner();
    
};



function winner(){
    if (player === rock && computer === rock){
        playerScore++;
        computerScore++;
        alert('Tie!');
    } else if(player === rock && computer === paper) {
        counter++;
        computerScore++;
        alert('Computer Wins!');
    } else if (player === rock && computer === scissors){
        playerScore++;
        alert('Player Wins!');
    }
    
    if (player === paper && computer === paper){
        playerScore++;
        computerScore++;
        alert('Tie!');
    } else if(player === paper && computer === scissors){
        computerScore++;
        alert('Computer Wins!');
    } else if (player === paper && computer === rock){
        playerScore++;
        alert('Player Wins!');
    }
    
    if (player === scissors && computer === scissors){
        playerScore++;
        computerScore++;
        alert('Tie!');
    } else if(player === scissors && computer === rock){
        computerScore++;
        alert('Computer Wins!');
    } else if (player === scissors && computer === paper){
        playerScore++;
        alert('Player Wins!');
    }
    


}

