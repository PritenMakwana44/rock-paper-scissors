
const rockBtn = document.getElementsByClassName('rock');
const paperBtn = document.getElementsByClassName('paper');
const scissorsBtn = document.getElementsByClassName('Scissors');
const options = ["rock","paper","scissors"];

rockBtn.addEventListener("onclick", startGame()); 


function startGame(){
    return alert('Winner!');
};





const player = rockBtn;
const computer = options[Math.floor(Math.random()*options.length)];