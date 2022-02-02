function computerPlay(computerSelection)
{
 return computerSelection[Math.floor(Math.random()*computerSelection.length)];   
}
var computerSelection = ['Rock', 'Paper', 'Scissors'];

console.log(computerPlay(computerSelection)); 
//console is used to test whether function works as intended 

var playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors'", "");

function playRound(playerSelection, computerSelection) {
    if ((playerSelection != null) && (playerSelection == 'Rock' && computerSelection == 'Scissors' || playerSelection == 'Scissors' && computerSelection == 'Paper' || playerSelection == 'Paper' && computerSelection == 'Rock')) {
        console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
    }    
    else if ((playerSelection != null) && (playerSelection == 'Rock' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Scissors')) {
        console.log("Sorry, you lose! " + computerSelection + " beats " + playerSelection + ".");
    }
    else if ((playerSelection != null) && (playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Scissors' && computerSelection == 'Scissors' || playerSelection == 'Paper' && computerSelection == 'Paper')) {
        console.log("It's a tie! You both played " + computerSelection + ".");
    }
}



