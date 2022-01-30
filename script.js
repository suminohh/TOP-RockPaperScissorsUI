function computerPlay(computerSelection)
{
 return computerSelection[Math.floor(Math.random()*computerSelection.length)];   
}
var compterSelection = ['Rock', 'Paper', 'Scissors'];

//console.log(computerPlay(hand)); 
//console is used to test whether function works as intended 

function playRound(playerSelection, computerSelection) {
    var playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors'", "");
    if (playerSelection != null) {
        return "You played " + playerSelection + " and the bot played " + computerSelection + "."
    }
}