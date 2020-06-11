let readline = require("readline-sync");
let prompt = (message) => console.log(`=> ${message}`);
let userChoice;
let computerChoice;
let gameType;
let validChoices;
let userScore = 0;
let computerScore = 0;
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const LIZARD = 'lizard';
const SPOCK = 'spock';
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


function chooseGameType() {
  prompt('Which game type do you prefer for this round?');
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
      prompt('You did not choose a Valid Game Type!');
      chooseGameType();
      break;
  }
}

function checkIfUserWinsRound (userChoice, computerChoice) {
  if ((userChoice === ROCK && CHOICE_LOSES_TO_ROCK.includes(computerChoice)) ||
    (userChoice === PAPER && CHOICE_LOSES_TO_PAPER.includes(computerChoice)) ||
    (userChoice === SCISSORS && CHOICE_LOSES_TO_SCISSORS.includes(computerChoice)) ||
    (userChoice === LIZARD && CHOICE_LOSES_TO_LIZARD.includes(computerChoice)) ||
    (userChoice === SPOCK && CHOICE_LOSES_TO_SPOCK.includes(computerChoice))) {
    prompt('You win this round!');
    prompt(`Your choice was ${userChoice} and computer choice was ${computerChoice}.`);
    addPointUserScore();
  }
}

function checkIfComputerWinsRound (userChoice, computerChoice) {
  if ((userChoice === ROCK && CHOICE_BEATS_ROCK.includes(computerChoice)) ||
      (userChoice === PAPER && CHOICE_BEATS_PAPER.includes(computerChoice)) ||
      (userChoice === SCISSORS && CHOICE_BEATS_SCISSORS.includes(computerChoice)) ||
      (userChoice === LIZARD && CHOICE_BEATS_LIZARD.includes(computerChoice)) ||
      (userChoice === SPOCK && CHOICE_BEATS_SPOCK.includes(computerChoice))) {
    prompt('Computer wins!');
    prompt(`Your choice was ${userChoice} and computer choice was ${computerChoice}.`);
    addPointComputerScore();
  }
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
  if (userChoice === computerChoice) {
    prompt(`Your choice was ${userChoice} and computer choice was ${computerChoice}.`);
    prompt("It's a tie");
    prompt(`The score is currently - User: ${userScore}, Computer: ${computerScore}`);
  }
  checkIfUserWinsRound(userChoice, computerChoice);
  checkIfComputerWinsRound(userChoice, computerChoice);
}

function userChooseScissorsOrSpock() {
  prompt('You only put \'s\' - Type 1 for Scissors or 2 for Spock');
  let selection = readline.question();
  switch (selection) {
    case '1':
      userChoice = 'scissors';
      break;
    case '2':
      userChoice = 'spock';
      break;
    default:
      prompt('Invalid input!');
      userChooseScissorsOrSpock();
      break;
  }
}

// I purposely left the chooseGameType in so it can change
// in the middle of the race to 5 wins.
prompt('Welcome to ROCK PAPER SCISSORS!');
prompt('It is you vs. the Computer.');
prompt('First to 5 victories is the Grand Winner!');
prompt(' ---------------------------------- ');
while (true) {
  chooseGameType();
  prompt(`Make your selection - ${validChoices.join(', ')}?`);
  userChoice = readline.question().toLowerCase();
  switch (userChoice) {
    case 'r':
      userChoice = 'rock';
      break;
    case 'p':
      userChoice = 'paper';
      break;
    case 'l':
      userChoice = 'lizard';
      break;
    case 's':
      if (gameType === '2') {
        userChooseScissorsOrSpock();
      } else {
        userChoice = 'scissors';
      }
      break;
    default:
      userChoice = 'rock';
  }

  while (!validChoices.includes(userChoice)) {
    prompt(`Not Valid - Make a valid selection - ${validChoices.join(', ')}?`);
    userChoice = readline.question();
  }
  let randomIndex = Math.floor(Math.random() * validChoices.length);
  computerChoice = validChoices[randomIndex].toLowerCase();

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