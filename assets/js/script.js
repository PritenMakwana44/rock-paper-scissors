const buttonOptions = document.querySelectorAll('[data-Selection]');

buttonOptions.forEach(buttonOption => {
    buttonOption.addEventListener("click", e => {
    const playerPick = buttonOption.dataset.selection
    buttonPick(playerPick)
    })
});
    

function buttonPick(pick) {
    alert('rererereer');
    console.log(pick);
}



function computerChoiceGen(){
    computer = Math.floor(Math.random() * choices.length)
}



function winner(){

    let player = buttonPick(pick);
    let computer = computerChoiceGen();

    if (player === 'rock' && computer === 'rock'){
        playerScore++;
        computerScore++;
        alert('Tie!');
    } else if(player === 'rock' && computer === 'paper') {
        counter++;
        computerScore++;
        alert('Computer Wins!');
    } else if (player === 'rock' && computer === 'scissors'){
        playerScore++;
        alert('Player Wins!');
    }
    
    if (player === 'paper' && computer === 'paper'){
        playerScore++;
        computerScore++;
        alert('Tie!');
    } else if(player === 'paper' && computer === 'scissors'){
        computerScore++;
        alert('Computer Wins!');
    } else if (player === 'paper' && computer === 'rock'){
        playerScore++;
        alert('Player Wins!');
    }
    
    if (player === 'scissors' && computer === 'scissors'){
        playerScore++;
        computerScore++;
        alert('Tie!');
    } else if(player === 'scissors' && computer === 'rock'){
        computerScore++;
        alert('Computer Wins!');
    } else if (player === 'scissors' && computer === 'paper'){
        playerScore++;
        alert('Player Wins!');
    }
    

}

