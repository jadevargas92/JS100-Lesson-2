let readline = require("readline-sync");
let prompt = (message) => console.log(`=> ${message}`);
let userChoice;
let computerChoice;
let gameType;
let validChoices;
let userScore = 0;
let computerScore = 0;
const CHOICE_LOSES_TO_ROCK = ['scissors', 'lizard'];
const CHOICE_LOSES_TO_PAPER = ['rock', 'spock'];
const CHOICE_LOSES_TO_SCISSORS = ['paper', 'lizard'];
const CHOICE_LOSES_TO_LIZARD = ['spock', 'paper'];
const CHOICE_LOSES_TO_SPOCK = ['scissors', 'rock'];
const CHOICE_BEATS_ROCK = ['paper', 'spock'];
const CHOICE_BEATS_PAPER = ['scissors', 'lizard'];
const CHOICE_BEATS_SCISSORS = ['rock', 'spock'];
const CHOICE_BEATS_LIZARD = ['rock', 'scissors'];
const CHOICE_BEATS_SPOCK = ['lizard', 'paper'];

prompt('Which game type do you prefer?');
prompt('Type 1 for Rock Paper Scissors - The original ');
prompt('or type 2 for the Rock Paper Scissor Spock Lizard variation!');

gameType = readline.question();

switch (gameType) {
  case '1':
    validChoices = ['rock', 'paper', 'scissors'];
    break;
  case '2':
    validChoices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    break;
  default:
    validChoices = ['rock', 'paper', 'scissors'];
}

function addPointUserScore () {
  userScore += 1;
  if (userScore > computerScore) {
    prompt(`You are currently winning ${userScore} to ${computerScore}`);
  } else if (userScore < computerScore) {
    prompt(`You are currently losing - Computer is up ${computerScore} to ${userScore}`);
  } else {
    prompt(`You are tied at ${userScore} to ${computerScore}`);
  }
}

function addPointComputerScore () {
  computerScore += 1;
  if (userScore > computerScore) {
    prompt(`You are currently winning ${userScore} to ${computerScore}`);
  } else if (userScore < computerScore) {
    prompt(`You are currently losing - Computer is up ${computerScore} to ${userScore}`);
  } else {
    prompt(`You are tied at ${userScore} to ${computerScore}`);
  }
}

function displayWinner(userChoice, computerChoice) {
  
  if ((userChoice === 'rock' && CHOICE_LOSES_TO_ROCK.includes(computerChoice)) ||
    (userChoice === 'paper' && CHOICE_LOSES_TO_PAPER.includes(computerChoice)) ||
    (userChoice === 'scissors' && CHOICE_LOSES_TO_SCISSORS.includes(computerChoice)) ||
    (userChoice === 'lizard' && CHOICE_LOSES_TO_LIZARD.includes(computerChoice)) ||
    (userChoice === 'spock' && CHOICE_LOSES_TO_SPOCK.includes(computerChoice))) {
    prompt('You win this round!');
    prompt(`Your choice was ${userChoice} and computer choice was ${computerChoice}.`);
    prompt('You win this round!');
    addPointUserScore();
  } else if ((userChoice === 'rock' && CHOICE_BEATS_ROCK.includes(computerChoice)) ||
             (userChoice === 'paper' && CHOICE_BEATS_PAPER.includes(computerChoice)) ||
             (userChoice === 'scissors' && CHOICE_BEATS_SCISSORS.includes(computerChoice)) ||
             (userChoice === 'lizard' && CHOICE_BEATS_LIZARD.includes(computerChoice)) ||
             (userChoice === 'spock' && CHOICE_BEATS_SPOCK.includes(computerChoice))) {
    prompt('Computer wins!');
    prompt(`Your choice was ${userChoice} and computer choice was ${computerChoice}.`);
    addPointComputerScore();
  } else {
    prompt("It's a tie");
    prompt(`The score is currently - User: ${userScore}, Computer: ${computerScore}`);
  }
}

while (true) {
  prompt(`Make your selection - ${validChoices.join(', ')}?`);
  userChoice = readline.question();

  while (!validChoices.includes(userChoice)) {
    prompt(`Not Valid - Make a valid selection - ${validChoices.join(', ')}?`);
    userChoice = readline.question();
  }
  let randomIndex = Math.floor(Math.random() * validChoices.length);
  computerChoice = validChoices[randomIndex];

  displayWinner(userChoice, computerChoice);
  if (userScore === 5 || computerScore === 5) {
    if (userScore > computerScore) {
      prompt(`Congratulations! You won with a final score of ${userScore} to ${computerScore}`);
    } else {
      prompt(`Sorry! The computer beat you with a score of ${computerScore} to ${userScore}`);
    }
    break;
  }

  prompt("Do you want to play agin? Type y or n.");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please type y or n to play again.");
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}

// Test coding below

// switch (userChoice) {
//   case 'rock':
//     CHOICE_LOSES_TO_ROCK.includes(computerChoice);
//   case 'paper':
//     CHOICE_LOSES_TO_PAPER.includes(computerChoice);
//   case 'scissors': 
//     CHOICE_LOSES_TO_SCISSORS.includes(computerChoice);
//   case 'lizard':
//     CHOICE_LOSES_TO_LIZARD.includes(computerChoice);
//   case 'spock':
//     CHOICE_LOSES_TO_SPOCK.includes(computerChoice);
//   break;
// }

