// Ask the user for a number.
// Ask the user for a second number.
// Ask the user for an operation to perfrom.
// Perform the operation on the two numbers.
// Print the result to the terminal. 

const readline = require("readline-sync");


console.log('Welcome to our calculator!');
let firstNumber = Number(readline.question("What is the first number?"));
let secondNumber = Number(readline.question("What is the second number?"));

console.log(`Your numbers are ${firstNumber} and ${secondNumber}`);

let operation = readline.question("What operation would you like to do?\n 1) Add 2) Subtract 3) Multiply 4) Divide");
let outputVersion1;
let outputVersion2;

switch (operation) {
  case '1':
    outputVersion1 = firstNumber + secondNumber;
    break;
  case '2':
    outputVersion1 = firstNumber - secondNumber;
    break;
  case '3':
    outputVersion1 = firstNumber * secondNumber;
    break;
  case '4':
    outputVersion1 = firstNumber / secondNumber;
  default:
    console.log('Sorry!!')
}

console.log(`Your output is ${outputVersion1}`);


if (operation === '1') {
  outputVersion2 = Number(firstNumber + secondNumber);
} else if (operation === '2') {
  outputVersion2 = Number(firstNumber - secondNumber);
} else if (operation === '3') {
  outputVersion2 = Number(firstNumber * secondNumber);
} else if (operation === '4') {
  outputVersion2 = Number(firstNumber / secondNumber);
}

console.log(`Your second output is of the course same! It is ${outputVersion2}`);