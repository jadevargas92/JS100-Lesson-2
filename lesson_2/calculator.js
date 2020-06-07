// Ask the user for a number.
// Ask the user for a second number.
// Ask the user for an operation to perfrom.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require("readline-sync");
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number)) || number.trimStart() === '';
}

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}
prompt(messages('welcome', LANGUAGE));
let name = readline.question();

while (true) {
  prompt(`Alright ${name}, What is your first number?`);
  let firstNumber = readline.question();
  while (invalidNumber(firstNumber)) {
    prompt('Hmm... that doesnt look like a number');
    firstNumber = readline.question('Try again with a number!');
  }
  prompt('What is your second number?');
  let secondNumber = readline.question();
  while (invalidNumber(secondNumber)) {
    prompt('Hmm... that doesnt look like a number');
    secondNumber = readline.question('Try again with a number!');
  }
  prompt(`Your numbers are ${firstNumber} and ${secondNumber}`);
  prompt("What operation would you like to do?\n 1) Add 2) Subtract 3) Multiply 4) Divide");
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }
  let outputVersion1;
  let outputVersion2;
  switch (operation) {
    case '1':
      outputVersion1 = Number(firstNumber) + Number(secondNumber);
      break;
    case '2':
      outputVersion1 = Number(firstNumber) - Number(secondNumber);
      break;
    case '3':
      outputVersion1 = Number(firstNumber) * Number(secondNumber);
      break;
    case '4':
      outputVersion1 = Number(firstNumber) / Number(secondNumber);
      break;
    default: console.log('Sorry!!');
  }
  prompt(`Your output is ${outputVersion1}`);
  if (operation === '1') {
    outputVersion2 = Number(firstNumber + secondNumber);
  } else if (operation === '2') {
    outputVersion2 = Number(firstNumber - secondNumber);
  } else if (operation === '3') {
    outputVersion2 = Number(firstNumber * secondNumber);
  } else if (operation === '4') {
    outputVersion2 = Number(firstNumber / secondNumber);
  }
  prompt(`Your second output is of the course same! It is ${outputVersion2}`);
  prompt('Would you like to start another calculation?');
  let answer = readline.question();
  if (answer[0].toLowerCase() !== 'y') break;
}