// // Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

// let advice = "Few things in life are as important as house important training your pet dinosaur.";
// advice = advice.replace(/important/g, 'urgent');
// console.log(advice);

// // The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. 
// // Both of these methods mutate the original array as shown below. 
// // Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// let newNumbers = numbers.concat().reverse();
// let otherNewNumbers = numbers.slice().sort();

// console.log(newNumbers);
// console.log(otherNewNumbers);
// console.log(numbers);

// // Given a number and an array, determine whether the number is included in the array.

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// // Starting with the string:
// // show two different ways to put the expected "Four score and " in front of it.
// let famousWords = "seven years ago...";


// console.log('Four score and ' + famousWords);
// console.log('Four score and '.concat(famousWords));

// // Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// let arrayOfNumbers = [1, 2, 3, 4, 5];
// arrayOfNumbers.splice(2, 1);
// console.log(arrayOfNumbers);

// // Suppose we build an array like this:

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// // // This code will create a nested array that looks like this:

// // ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// // // Create a new array that contains all of the above values, but in an un-nested format:

// // [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
// // flintstones = [].concat(...flintstones);

// let flintstonesNew = [];
// flintstones.forEach(flinstoneCharacter => {
//   flintstonesNew = flintstonesNew.concat(flinstoneCharacter);
// }); 

// console.log(flintstonesNew);

// let brewers = ['Yelich', 'Cain', 'Braun', ['somone', 'someone else']];
// let brewersUpdated = ['Arcia', 'Hader'].concat(...brewers);

// let brewersUpdate = [];
// brewers.forEach(brewer => {
//   brewersUpdate = brewersUpdate.concat(brewer);
// })

// console.log(brewersUpdated);
// console.log(brewersUpdate);

// Consider the following object:

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// // Create an array from this object that contains only two elements: Barney's name and Barney's number:
// // [ 'Barney', 2 ]

// let barneyArray = []
// for (let [key, value] of Object.entries(flintstones)) {
//   if (key === 'Barney'){
//     barneyArray.push(key, value);
//   };
// }

// console.log(barneyArray); // [ 'Barney', 2 ]

// // How would you check whether the objects assigned to variables numbers and table below are arrays?

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// // Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log((statement1.match(/t/g) || []).length);
// console.log((statement2.match(/t/g) || []).length);

// // Back in the stone age (before CSS), we used spaces to align things on the screen. 
// // If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

// let title = "Flintstone Family Members";

// Write four different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// numbers = [];
// numbers.length = 1;
// numbers = numbers.splice(0, numbers.length); Doesnt seem to work?
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);
