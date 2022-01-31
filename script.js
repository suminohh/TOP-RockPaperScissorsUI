function computerPlay(computerSelection)
{
 return computerSelection[Math.floor(Math.random()*computerSelection.length)];   
}
var compterSelection = ['Rock', 'Paper', 'Scissors'];

//console.log(computerPlay(hand)); 
//console is used to test whether function works as intended 

function playRound(playerSelection, computerSelection) {
    var playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors'", "");
    if ((playerSelection != null) && (playerSelection == 'Rock' && computerSelection == 'Scissors' || playerSelection == 'Scissors' && computerSelection == 'Paper' || playerSelection == 'Paper' && computerSelection == 'Rock')) {
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }    
    else if ((playerSelection != null) && (playerSelection == 'Rock' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Scissors')) {
        return "Sorry, you lose! " + computerSelection + " beats " + playerSelection + ".";
    }
    else if ((playerSelection != null) && (playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Scissors' && computerSelection == 'Scissors' || playerSelection == 'Paper' && computerSelection == 'Paper')) {
        return "It's a tie! You both played " + computerSelection + ".";
    }
}