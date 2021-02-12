let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10)

const getAbsoluteDistance = (num1,num2) => Math.abs(num1-num2);

const compareGuesses = (humanGuess,computerGuess,secretTarget) => {
    let humanGuessDiff = getAbsoluteDistance(humanGuess,secretTarget)
    let computerGuessDiff = getAbsoluteDistance(computerGuess,secretTarget)
    if (humanGuess<0 || humanGuess>9) {
        window.alert('Read the directions homie!');
    }
    else if (humanGuessDiff<=computerGuessDiff) {return true;
    } else {return false;}
}

const updateScore = winner => {
    if (winner==='human') {humanScore+=1;
    } else if (winner==='computer') {computerScore+=1;
    }
}

const advanceRound = () => currentRoundNumber+=1;
