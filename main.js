// set scores
// let playerScore = 0;
// let computerScore = 0;

//user chooses
let userPlay = prompt('Enter your selection (Rock, Paper, or Scissors)');
let userSelection = userPlay.toLowerCase();

//computer chooses
let compPlay = Math.floor(Math.random() * 3);

if (compPlay === 0) {
    compChoice = 'rock';
}else if (compPlay === 1) {
    compChoice = 'paper';
}else {
    compChoice = 'scissors';
}

//compare user and computer
function compare (c1, c2) {
    if (c1 === c2) {
        return 'It\'s a tie!';
    }
    if (c1 === 'paper') {
        if (c2 === 'rock') {
            return 'You win with Rock!';
        }else {
            return `You lose, computer wins with ${c2}`;
        }
    }
    if (c1 === 'rock') {
        if (c2 === 'scissors') {
            return 'You win with Rock!';
        }else {
            return `You lose, computer wins with ${c2}`;
        }
    }
    if (c1 === 'scissors') {
        if (c2 === 'paper') {
            return 'You win with Rock!';
        }else {
            return `You lose, computer wins with ${c2}`;
        }
    }
}

//paper wins rock
//scissors wins paper 
//rock wins scissors


console.log(`User choice was: ${userSelection}`);
console.log(`Computer choice was: ${compChoice}`);
compare(userSelection, compChoice);