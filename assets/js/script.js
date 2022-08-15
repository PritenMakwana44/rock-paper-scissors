const playerScore = document.getElementsByClassName("playerScore");
const computerScore = document.getElementsByClassName("computerScore");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const choices = ['rock','paper','scissors']; 


function game(player) {
    const computer = computerChoiceGen();
    console.log(computer);
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

