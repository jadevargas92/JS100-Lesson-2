let deck = [];
let playersHand = [];
let dealersHand = [];
let playerTotal = 0;
let dealerTotal = 0;
let playerGamesWon = 0;
let dealerGamesWon = 0;

// What the game is played to. 
const scoreLimit = 21;
const dealerHitOrStayValue = 17;

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function clearHandsAndTotals() {
  playersHand = [];
  dealersHand = [];
  playerTotal = 0;
  dealerTotal = 0;
}

function initializeDeck () {
  for (let suit in suits) {
    for (let value in values) {
      deck.push([values[value], suits[suit]]);
    }
  }
}

// Picking a random card
function randomCard(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min) + min);
  let card = deck[randomNum];
  deck.splice(randomNum, 1);
  return card;
}

function dealPlayerStartingHand() {
  dealPlayerACard();
  dealPlayerACard();
  prompt(`Players Hand: `);
  console.log(playersHand);
  prompt(`Player Total: ${playerTotal}`);
}

function dealDealerStartingHand() {
  dealDealerACard();
  dealDealerACard();
  prompt(`Dealers known card 1 of 2: `);
  console.log(dealersHand[0]);
}

function dealPlayerACard() {
  let playerCard = randomCard(0, deck.length);
  playersHand.push(playerCard);
  playerTotal = total(playersHand);
}

function dealDealerACard() {
  let dealerCard = randomCard(0, deck.length);
  dealersHand.push(dealerCard);
  dealerTotal = total(dealersHand);
}

function initialDeal() {
  clearHandsAndTotals();
  initializeDeck();
  dealPlayerStartingHand();
  dealDealerStartingHand();
}

function total(cards) {
  // cards = [['3', 'Hearts'], ['Ace', 'Clubs'], ... ]
  let values = cards.map(card => card[0]);

  let sum = 0;
  values.forEach(value => {
    if (value === "Ace") {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "Ace").forEach(_ => {
    if (sum > scoreLimit) sum -= 10;
  });

  return sum;
}

function displayWinner() {
  if (doesPlayerBust()) {
    prompt(`Game over! You bust. Dealer wins! Player Total: ${playerTotal} - Dealer Total: ${dealerTotal}`);
    dealerGamesWon += 1;
  } else if (doesDealerBust()) {
    prompt(`Congrats! Dealer busts! You win! Player Total: ${playerTotal} - Dealer Total: ${dealerTotal}`);
    playerGamesWon += 1;
  } else if (playerTotal > dealerTotal) {
    prompt(`Congrats! You win! Player Total: ${playerTotal} - Dealer Total: ${dealerTotal}`);
    playerGamesWon += 1;
  } else if (dealerTotal > playerTotal) {
    prompt(`Sorry! You lost... Player Total: ${playerTotal} - Dealer Total: ${dealerTotal}`);
    dealerGamesWon += 1;
  } else {
    prompt(`Looks like it was a tie! Player Total: ${playerTotal} - Dealer Total: ${dealerTotal}`);
  }
  prompt(`Overall Games Won - Player: ${playerGamesWon} - Dealer: ${dealerGamesWon}`);
}

function doesPlayerBust() {
  if (playerTotal <= scoreLimit) {
    return false;
  }
  return true;
}

function doesDealerBust() {
  if (dealerTotal <= scoreLimit) {
    return false;
  }
  return true;
}

function playerTurn() {
  while (true) {
    if (doesPlayerBust()) break;
    prompt('Would you like to (h)it or (s)tay?');
    let answer = readline.question().toLowerCase();
    //
    while (true) {
      if ((answer[0] === 'h') || (answer[0] === 's')) break;
      prompt('Please enter (h)it or (s)tay.');
    }
    //
    if (answer[0] === 's') break;
    dealPlayerACard();
    prompt(`Players Hand: `);
    console.log(playersHand);
    prompt(`Player Total: ${playerTotal}`);
  }
}

function dealerTurn() {
  while (true) {
    if (doesPlayerBust(playerTotal)) break;
    if (dealerTotal >= dealerHitOrStayValue) break;
    dealDealerACard();
  }
}

function playAgain() {
  if (bestOfFive()) return;
  let response;
  while (true) {
    prompt('Want to play again? Y/N');
    response = readline.question().toLowerCase();
    if ((response[0] === 'y') || (response[0] === 'n')) break;
    prompt(`Please enter a proper response`);
  }
  if (response[0] === 'y') {
    startGame();
  } else {
    prompt('Thanks for playing!');
  }
}

function bestOfFive() {
  if (playerGamesWon === 5) {
    prompt(`Congrats! You won Best of 5`);
    return true;
  } else if (dealerGamesWon === 5) {
   prompt('You lost the Best of 5- Dealer win!');
   return true;
  } else {
  return false;
  }
}

function displayScores() {
  console.clear();
  prompt(`Your Hand: `);
  console.log(playersHand);
  prompt('Dealers Hand: ');
  console.log(dealersHand);
}

// Game Logic
function startGame() {
  console.clear();
  initialDeal();
  playerTurn();
  dealerTurn();
  displayScores();
  displayWinner();
  playAgain();
}

startGame();