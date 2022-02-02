function computerPlay(computerSelection)
{
 return computerSelection[Math.floor(Math.random()*computerSelection.length)];   
}
var computerSelection = ['Rock', 'Paper', 'Scissors'];

//console.log(computerPlay(computerSelection)); 
//console is used to test whether function works as intended 

function capitalize(playerPrompt) {
    return playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase();
}

//console.log(capitalize(playerSelection));
//console is used to test whether function works as intended 

function playRound(playerSelection, computerSelection) {
    let result;
    let playerScore = 0;
    let computerScore = 0;
    let count = 0;
    if ((playerSelection == 'Rock' && computerPlay(computerSelection) == 'Scissors' || playerSelection == 'Scissors' && computerPlay(computerSelection) == 'Paper' || playerSelection == 'Paper' && computerPlay(computerSelection) == 'Rock')) {
        playerScore++;
        count++;
        result = "You win! " + playerSelection + " beats " + computerPlay(computerSelection) + ".";
    }    
    else if ((playerSelection == 'Rock' && computerPlay(computerSelection) == 'Paper' || playerSelection == 'Scissors' && computerPlay(computerSelection) == 'Rock' || playerSelection == 'Paper' && computerPlay(computerSelection) == 'Scissors')) {
        computerScore++;
        count++;
        result = "Sorry, you lose! " + computerPlay(computerSelection) + " beats " + playerSelection + ".";
    }
    else if ((playerSelection == 'Rock' && computerPlay(computerSelection) == 'Rock' || playerSelection == 'Scissors' && computerPlay(computerSelection) == 'Scissors' || playerSelection == 'Paper' && computerPlay(computerSelection) == 'Paper')) {
        count++;
        result = "It's a tie! You both played " + computerPlay(computerSelection) + ".";
    }
    alert(result);
}

function game() {
    for(var i=0; i<5; i++) {
        var playerPrompt = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
        var playerSelection = capitalize(playerPrompt);
        playRound(playerSelection, computerSelection);
    }
}

game();


