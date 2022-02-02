const hand = ['Rock', 'Paper', 'Scissors'];

function computerPlay()
{
 return hand[Math.floor(Math.random()*hand.length)];   
}

function capitalize(playerPrompt) {
    return playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase();
}

//console.log(capitalize(playerSelection));
//console is used to test whether function works as intended 

function playRound(playerSelection, computerPlay) {
    const computerSelection = computerPlay();
    let playerScore = 0;
    let computerScore = 0;
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        playerScore++;
        result = "You win! " + playerSelection + " beats " + computerSelection + ".";
    }    
    else if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Scissors' && computerSelection == 'Rock') || (playerSelection == 'Paper' && computerSelection == 'Scissors')) {
        computerScore++;
        result = "Sorry, you lose! " + computerSelection + " beats " + playerSelection + ".";
    }
    else if ((playerSelection == 'Rock' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Paper')) {
        result = "It's a tie! You both played " + computerSelection + ".";
    }
    alert(result);
}

function game() {
    for(var i=0; i<5; i++) {
        var playerPrompt = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
        var playerSelection = capitalize(playerPrompt);
        playRound(playerSelection, computerPlay);
    }
}

game();