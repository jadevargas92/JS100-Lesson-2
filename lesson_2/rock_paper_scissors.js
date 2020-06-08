let readline = require("readline-sync");
let prompt = (message) => console.log(`=> ${message}`);
let userChoice;
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner(userChoice, computerChoice) {
  prompt(`Your choice was ${userChoice} and computer choice was ${computerChoice}.`);
  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
             (userChoice === 'paper' && computerChoice === 'scissors') ||
             (userChoice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

while (true) {
  prompt(`Make your selection - ${VALID_CHOICES.join(', ')}?`);
  userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt(`Not Valid - Make a valid selection - ${VALID_CHOICES.join(', ')}?`);
    userChoice = readline.question();
  }
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(userChoice, computerChoice);

  prompt("Do you want to play agin? Type y or n.");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please type y or n to play again.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}