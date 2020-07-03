// How would you sort the following array by the lengths of each word?

let words = ['go', 'ahead', 'and', 'jump'];
words.sort((wordOne, wordTwo) => wordOne.length - wordTwo.length);
console.log(words);

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
let sortedScores = [];
scores.sort((a, b) => {
  let reducedA = a.reduce((total, nextNumber) => total + nextNumber);
  let reducedB = b.reduce((total, nextNumber) => total + nextNumber);
  
 return reducedA - reducedB;
});

console.log(scores);


let tallies = [5, 8, 9, 2, 3, 5];
let reducedTallies = tallies.reduce((total, nextNumber) => total + nextNumber, 5);
tallies.sort((num1, num2) => num1 - num2);
let mappedTallies = tallies.map(num => num = 1);
console.log(tallies);
console.log(mappedTallies);
console.log(reducedTallies);

let letters = ['a', 'b', 'c'];
let reducedLetters = letters.reduce((total, nextLetter) => total + nextLetter);

console.log(reducedLetters);

let takeTwo = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

takeTwo.sort((num1, num2) => {
  let reducedNum1 = num1.reduce((a, b) => a + b);
  let reducedNum2 = num2.reduce((a, b) => a + b);
  
  return reducedNum1 - reducedNum2;
});

console.log(takeTwo);

let scoresRetry = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scoresRetry.sort((elementA, elementB) => {
  let reducedElementA = elementA.reduce((total, nextElement) => total + nextElement);
  let reducedElementB = elementB.reduce((total, nextElement) => total + nextElement);
  
  return reducedElementA - reducedElementB;
});

console.log(scoresRetry);

// Spread Sytax

let practiceArray = ['Jade', 'Lauren', 42];
let spreadSyntaxArray = [...practiceArray];

spreadSyntaxArray.push('sportsball');
console.log(practiceArray);
console.log(spreadSyntaxArray);

//The Above pushes 'sportsball' to the spreadSytaxArray but not the practice array.
// the [...practiceArray] creates a shallow copy stored in spreadSyntaxArray.
// -----------------------------
// The Below pushes 'Baseball is back' to another 'Shallow Copy' - 
//However, since both anotherArray and shallowCopySpread are referencing the SAME interior array at index 0 or [0]
// it changes both arrays. This is b ecause shallowCopySpread is a SHALLOW COPY of another array. (Shared Array Object)

let anotherArray = [['jade'], ['lauren'], ['brooklyn99']];
let shallowCopySpread = [...anotherArray];

shallowCopySpread[0].push('Baseball is back!');

console.log(anotherArray);
console.log(shallowCopySpread);

let lowerCaseNames = ['jade', 'lauren', 'lucas'];

function upperCase(item) {
  item = item[0].toUpperCase() + item.substring(1).toLowerCase();
  return item;
}

let upperCaseNames = lowerCaseNames.map(name => upperCase(name)) ;

console.log(upperCaseNames);
console.log(lowerCaseNames);