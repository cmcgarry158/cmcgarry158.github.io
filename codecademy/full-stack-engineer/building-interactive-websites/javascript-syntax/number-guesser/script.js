let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, compGuess, target) {
  if(userGuess < 0 || userGuess > 9) {
    alert('Number out of range. Must be between 0 and 9.');
    return false;
  }
  else {
    const compDist = Math.abs(compGuess - target);
    const userDist = Math.abs(userGuess - target);

    return userDist <= compDist;
  }
}

function updateScore(winner)
{
  if(winner === 'human') { 
    humanScore++; 
  }
  else { 
    computerScore++; 
  }
}

function advanceRound() {
  currentRoundNumber++;
}