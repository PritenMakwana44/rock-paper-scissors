/**
 * Variable Assignment for Scores.
 * Assign player/computer score ids to variable
 * Assign inital score of 0
 */

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
playerScore = 0;
computerScore = 0;

/**
 * Code for player score and computer score to show in html
 * This is here so text is shown before game even starts
 */
document.getElementById("playerScore").innerHTML = `Player: ` + playerScore;
document.getElementById("computerScore").innerHTML = `Computer: ` + computerScore;


// Variable assignment for Buttons and choices
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const choices = ['rock', 'paper', 'scissors'];

/**
 * Game function with player parameter
 * Assigns computer variable to Computer choice generator function.
 * Computer function generator populates random choice for computer.
 * If statements which compare player button click with computer generated choice
 * If condition is met then scoreboard shows text specified
 * If condition is met then player or computer score is incremented by 1
 * If condition is met then color function is activated to highlight text in html for winner.
 * 
 */
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
    /**
     * Gameover function is checked every round
     * Gameover function checks if score reaches 10.
     * if either does then it pops up with an alert
     * Then it redirects to a html winner page
     * scores reset to 0 for both computer and player.
     */
    Gameover();
    // Keeps the player/computer score up to date as per game.
    document.getElementById("playerScore").innerHTML = `Player: ` + playerScore;
    document.getElementById("computerScore").innerHTML = `Computer: ` + computerScore;

}

/**
 * Function for Computer choice generator
 * creates variable called choiceNumber using built-in math functions
 * then returns choice number associated to rock, paper or scissors
 * 
 */
function computerChoiceGen() {
    const choiceNumber = Math.floor(Math.random() * choices.length);
    return choices[choiceNumber];
}


/**
 * Function for button pick
 * listener assgned to click
 * When game function is called with specific choice of rock, paper or scissors..
 * then the game functon activates starting the game with players choice.
 */
function buttonPick() {
    rockBtn.addEventListener("click", function () {
        game("rock");
    });

    paperBtn.addEventListener("click", function () {
        game("paper");
    });

    scissorsBtn.addEventListener("click", function () {
        game("scissors");
    });

}


//Button pick is always listening for button click.
buttonPick();


/**
 * Gameover function
 * if player or computer score reaches 10
 * then pop up with winner message
 * then opens html page for winner
 * resets scores(for good measure)
 */
function Gameover() {

    if (playerScore === 10) {
        alert('Gameover - Player Wins!');
        location.href = "/rock-paper-scissors/playerwin.html";
        resetScores();
    } else if (computerScore === 10) {
        alert('Gameover - Computer Wins!');
        location.href = "/rock-paper-scissors/computerwin.html";
        resetScores();
    } else if (computerScore === 1 && playerScore ===1) {
        alert('Gameover - Tie Game!');
        location.href = "/rock-paper-scissors/Tie.html";
        resetScores();

    }
}

// Reset scores function assigns player/computer score to 0.
function resetScores() {

    playerScore = 0;
    computerScore = 0;
}


/**
 * Function to change colour of text for player/computer scores.
 * when function is called
 * one of the below is done depending on which function
 * player win = writing turns green for player score and computer remains black
 * computer win = writing turns red for computer score and player remains black
 * tie= both turn blue
 */
function playerWinColor() {
    document.getElementById("playerScore").style.color = 'green';
    document.getElementById("computerScore").style.color = 'black';

}

function computerWinColor() {
    document.getElementById("computerScore").style.color = 'red';
    document.getElementById("playerScore").style.color = 'black';
}

function tieColor() {
    document.getElementById("computerScore").style.color = 'blue';
    document.getElementById("playerScore").style.color = 'blue';
}

//Function for alert on page load for rules to show(assigned to html body to activate on load.)
function rulesPopup() {
    alert("Rules:\nRock beats Scissors, Scissors beats Paper, Paper beats Rock\nFirst to 10 wins!");
}