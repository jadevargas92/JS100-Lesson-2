const readline = require('readline-sync');
let userInput = "";
let computerInput ="";

function displayBoard() {
  console.log('');
  console.log('     |     |   ');
  console.log(`  ${boardMark['1']}  |  ${boardMark['2']}  |  ${boardMark['3']} `);
  console.log('     |     |   ');
  console.log('-----+-----+-----');
  console.log('     |     |   ');
  console.log(`  ${boardMark['4']}  |  ${boardMark['5']}  |  ${boardMark['6']}`);
  console.log('     |     |   ');
  console.log('-----+-----+-----');
  console.log('     |     |   ');
  console.log(`  ${boardMark['7']}  |  ${boardMark['8']}  |  ${boardMark['9']}`);
  console.log('     |     |   ');
  console.log('');
};

function prompt(message) {
  console.log(`=> ${message}`);
}

let boardMark = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9"
};

function isAlreadyMarkedUser() {
  if (boardMark[userInput] === 'X' || 
      boardMark[userInput] === 'O') {
    return true;
  }
  return false;
}

function isAlreadyMarkedComputer() {
  if (boardMark[computerInput] === 'X' || 
      boardMark[computerInput] === 'O') {
    return true;
  }
  return false;
}

function getUserMark() {
  prompt('What box do you want to mark?');
  userInput = readline.question();
  if (isAlreadyMarkedUser()) {
    console.log('Space already taken - try again');
    getUserMark();
  }
  boardMark[userInput] = 'X';
  displayBoard();
  getComputerMark()
}

function getComputerMark() {
 computerInput = Math.floor(Math.random() * 9) + 1;
 if (isAlreadyMarkedComputer()) {
   getComputerMark();
 }
 boardMark[computerInput] = 'O';
 displayBoard();
 continuePlaying();
}

function continuePlaying () {
  let answer = '';
  prompt('Want to continue playing? Y/N');
  answer = readline.question();
  if (answer === 'y'){
    getUserMark();
  } else if (answer === 'n') {
    console.log('Thanks!');
  } else {
    console.log('please answer with y or n');
    continuePlaying();
  }
}

function initializeBoard () {
  boardMark = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9"
  };
}

displayBoard();
getUserMark();
