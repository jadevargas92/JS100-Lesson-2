const readline = require('readline-sync');

// let i;

// for (i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// let array = [1, 2, 3, 4];
// let index = 0;

// while(index < array.length) {
//   console.log(array[index]);
//   index += 1;
// }

// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// for (const city of cities) {
//   if (city === null) {
//     continue;
//   }
//   console.log(city.length);
// }

// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
// let index = 0;

// for (let name of fish) {
//   console.log(name);
//   if (name === 'Nemo') {
//     break;
//   }
// }

// while (index < fish.length) {
//   console.log(fish[index]);
//   if (fish[index] === 'Nemo') {
//     break;
//   }
//   index += 1;
// }

// for (let ind = 0; ind < fish.length; ind++) {
//   console.log(fish[ind]);
//   if (fish[ind] === 'Nemo') break;
// }

let numbers = [1, 3, 9, 11, 1, 4, 1];
let onesArray =[];

for (let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];
  if (currentNumber === 1) {
    onesArray.push(currentNumber);
  }
}

console.log(onesArray);

let fruits = ['apple', 'banana', 'pear'];
let transformedFruits = [];
let counter = 0; 

while (counter < fruits.length) {
  // let multipleFruits = fruits[counter] + 's'
  transformedFruits.push(fruits[counter] + 's');
  counter++
}

console.log(transformedFruits);

let vowels = 'aeiouAEIOU'
let tallyOfVowels = 0;

function getVowels (randomString) {
  for (let letter of randomLetters) {
  if (vowels.includes(letter)) {
    console.log(letter);
    tallyOfVowels++;
  } else {
    continue;
  }
}
console.log(randomLetters);
console.log(tallyOfVowels);
}



// let randomLetters = readline.question('Type any string');
// getVowels(randomLetters);

let someNumbers = [3,5,6,7,8,9];
let oddNumbers = [];
someNumbers.filter(num => {
  if(num % 2 === 1) {
    oddNumbers.push(num);
  }
})

  console.log(oddNumbers);
