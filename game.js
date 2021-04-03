let computerSelection= '';
//This function asks the player for their choice from rock, paper and scissors.
function clickedRock(){
    playerSelection= 'rock';
    computerSelection= computerPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);
    rounds(playerScore, compScore);
}
function clickedPaper(){
    playerSelection= 'paper';
    computerSelection= computerPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);
    rounds(playerScore, compScore);
}
function clickedScissors(){
    playerSelection= 'scissors';
    computerSelection= computerPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);
    rounds(playerScore, compScore);
}

let playerSelection = '';
let playerScore = 0;
let compScore = 0;
const msg= document.querySelector('.msg');


function computerPlay() {
    //it chooses a random option from rock, paper and scissors.
    let random = ['rock','paper','scissors'];
    return random[Math.floor(Math.random() * 3)];
} 

function playRound(playerSelection, computerSelection) {
//This function compares the two values from user and the computer and displays the result.
//The computer takes two values first and compares them.

if (playerSelection == "rock" && computerSelection == "paper") {
                compScore += 1;
                scores();
                msg.innerHTML= 'You lost';
}
            else if (playerSelection == "paper" && computerSelection == "rock") {
                playerScore += 1;
                scores();
                msg.innerHTML= 'You won';
            }

            else if (playerSelection == "paper" && computerSelection == "scissors") {
                compScore += 1;
                scores();
                msg.innerHTML= 'You lost';
            }
            else if (playerSelection == "scissors" && computerSelection == "paper") {
                playerScore += 1;
                scores();
                msg.innerHTML= 'You won';

            }
            else if (playerSelection == "rock" && computerSelection == "scissors") {
                playerScore += 1;
                scores();
                msg.innerHTML= 'You won';
            }
            else if (playerSelection == "scissors" && computerSelection == "rock") {
                compScore += 1;
                scores();
                msg.innerHTML= 'You lost';
            }
            else {
                msg.innerHTML= 'Its a draw';
            }
        }

function rounds(playerScore, compScore){
    if (playerScore == 5 || compScore == 5) {
        if (playerScore= 5){
            document.querySelector('#winMsg').innerHTML= 'You Won';
        }
        else if (compScore= 5){
            document.querySelector('#winMsg').innerHTML= 'Tough Luck, You Lost';
        }
    }
}

function scores(){ 
    //Displaying the computerScore as output
    document.querySelector('#cScore').innerHTML = compScore;
    //Displaying the playerScore as output
    document.querySelector('#pScore').innerHTML = playerScore;
}
