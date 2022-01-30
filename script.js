function computerPlay(hand)
{
 return hand[Math.floor(Math.random()*hand.length)];   
}
var hand = ['Rock', 'Paper', 'Scissors'];

console.log(computerPlay(hand));