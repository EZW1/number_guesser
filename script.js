let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
  }
  
  function getAbsoluteDistance (guess, target) {
    return Math.abs(guess - target);
  }
  
  function validUserGuess (guess) {
    if (guess < 0 || guess > 10) {
      return false;
    } else {
      return true;
    }
  }
  
  function compareGuesses(userGuess, comGuess, target) {
    let userDiff = getAbsoluteDistance (userGuess, target)
    let comDiff = getAbsoluteDistance (comGuess, target)
    if (comDiff < userDiff) {
      return false;
    } else {
      return true;
    }
  }
  
  function updateScore(winner) {
    if (winner === 'human') {
      humanScore++;
    } else {
      computerScore++;
    }
  }
  
  function advanceRound() {
    currentRoundNumber ++ ;
  }
