function computerPlay(computerSelection)
{
 return computerSelection[Math.floor(Math.random()*computerSelection.length)];   
}
var computerSelection = ['Rock', 'Paper', 'Scissors'];

console.log(computerPlay(computerSelection)); 
//console is used to test whether function works as intended 

var playerPrompt = prompt("Enter 'Rock', 'Paper', or 'Scissors'");

function capitalize(playerPrompt) {
    return playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase();
}

var playerSelection = capitalize(playerPrompt);

console.log(capitalize(playerSelection));
//console is used to test whether function works as intended 

function playRound(playerSelection, computerSelection) {
    let result;
    if ((playerSelection == 'Rock' && computerPlay(computerSelection) == 'Scissors' || playerSelection == 'Scissors' && computerPlay(computerSelection) == 'Paper' || playerSelection == 'Paper' && computerPlay(computerSelection) == 'Rock')) {
        result = "You win! " + playerSelection + " beats " + computerPlay(computerSelection) + ".";
    }    
    else if ((playerSelection == 'Rock' && computerPlay(computerSelection) == 'Paper' || playerSelection == 'Scissors' && computerPlay(computerSelection) == 'Rock' || playerSelection == 'Paper' && computerPlay(computerSelection) == 'Scissors')) {
        result = "Sorry, you lose! " + computerPlay(computerSelection) + " beats " + playerSelection + ".";
    }
    else if ((playerSelection == 'Rock' && computerPlay(computerSelection) == 'Rock' || playerSelection == 'Scissors' && computerPlay(computerSelection) == 'Scissors' || playerSelection == 'Paper' && computerPlay(computerSelection) == 'Paper')) {
        result = "It's a tie! You both played " + computerPlay(computerSelection) + ".";
    }
    return result;
}

alert(playRound(playerSelection, computerSelection));








