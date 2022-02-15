const hand = ['Rock', 'Paper', 'Scissors'];

function computerPlay()
{
 return hand[Math.floor(Math.random()*hand.length)];   
}

function capitalize(playerPrompt) {
    return playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase();
}

function playRound(playerSelection, computerPlay) {
    const computerSelection = computerPlay();
 
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        playerScore++;
        result = "Yay! You win! " + playerSelection + " beats " + computerSelection + ".";
    }    
    else if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Scissors' && computerSelection == 'Rock') || (playerSelection == 'Paper' && computerSelection == 'Scissors')) {
        computerScore++;
        result = "You lost but please don't cry! " + computerSelection + " beats " + playerSelection + ".";
    }
    else if ((playerSelection == 'Rock' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Paper')) {
        result = "It's a tie! You both played " + computerSelection + ".";
    }
    alert(result);
}

let playerScore = 0;
let computerScore = 0;
var i = 0;

// function game() {
//     var playerPrompt = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
//     var playerSelection = capitalize(playerPrompt);
//     playRound(playerSelection, computerPlay);
//     i++;
//     if (i !== 5) {
//         game();
//     } 
//     else {
//         if (playerScore > computerScore){
//             alert("Game over. You beat the computer! You scored " + playerScore + " point and the computer scored " + computerScore + " point.");
//         }
//         else if (playerScore < computerScore){
//             alert("Game over. Sorry mate. You lost. You scored " + playerScore + " point and the computer scored " + computerScore + " point.");
//         }
//         else {
//             alert("Game over. You tied!");
//         }
//     }
// }

game();