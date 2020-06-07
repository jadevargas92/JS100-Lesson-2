// Ask user for loan amount
// Ask user for APR
// Ask user for loan duration and months/yrs.
let readline = require("readline-sync");
let monthlyRate;
let monthsOrYears;
let aprInput;
let loanAmount;
let loanLength;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getLoanAmount() {
  prompt('What is your loan amount in Dollars?');
  loanAmount = readline.question();
  loanAmount = Number(loanAmount);
  if (isNaN(loanAmount)) {
    prompt('That is not a number!');
    getLoanAmount();
  }
}

function getAPR() {
  prompt('What is the APR? ie. 3.4 or 5.2');
  aprInput = readline.question();
  aprInput = Number(aprInput);
  if (isNaN(aprInput)) {
    prompt('That is an invalid APR - try again.');
    getAPR();
  }
}

function loanDurationType() {
  prompt('Would you like to enter your loan duration in Months or Years?');
  monthsOrYears = readline.question();
  if (isNaN(monthsOrYears)) {
    monthsOrYears = monthsOrYears[0].toLowerCase();
    switch (monthsOrYears) {
      case 'y':
        prompt('Great! In years, how long is the loan duration?');
        break;
      case 'm':
        prompt('Great! In months, how long is the loan duration?');
        break;
      default: loanDurationType();
    }
  } else {
    loanDurationType();
  }
}

function calculateLoanLength () {
  loanLength = readline.question();
  if (monthsOrYears === 'y') {
    loanLength *= 12;
  } else {
    loanLength = Number(loanLength);
  }
}

function convertAPRtoMonthly (apr) {
  monthlyRate = (apr / 100) / 12;
  monthlyRate = Number(monthlyRate);
}

function calculateMonthlyPayment() {
  getLoanAmount();
  getAPR();
  loanDurationType();
  calculateLoanLength();
  convertAPRtoMonthly(aprInput);
  let monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate),(-loanLength))));
  monthlyPayment = Number(monthlyPayment);
  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
  prompt('Would you like to calculate a different payment?');
  let anotherPayment = readline.question();
  anotherPayment = anotherPayment[0].toLowerCase();
  if (anotherPayment === 'y') {
    calculateMonthlyPayment();
  }
}

calculateMonthlyPayment();