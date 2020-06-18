// Question 1

let numbers = [1, 2, 3];
numbers[6] = 5;


console.log(`Question 1 returns ${numbers[4]}`); // Returns undefined but is actually an empty item.
console.log(`Question 1 length returns ${numbers.length}`); // Returns 7 because the Array has 3 empty items.

// Question 2
// let str1 = 'What is up!'.split('');
// let array = str1.split('', 11)
// console.log(array);

// console.log(str1);

let str1 = 'Hello there world!';

console.log(`Question 2 returns ${str1.endsWith('!')}`); // Returns True

//.....................just breaking up the line............
// Question 3

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 402,
  Eddie: 10
};

console.log(`Question 3 ${ages.hasOwnProperty('Spot')}`); // Returns False
console.log(`Question 3 ${ages.hasOwnProperty('Herman')}`); // Returns true

// Question 4

let munstersDescription = "the Munsters are CREEPY and Spooky.";
munstersDescription = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substr(1).toLowerCase();

console.log(`Question 4 ${munstersDescription}`);

console.log(`Question 5 ${false == '0'}`); // What does it return? True - weak (non strict) equality
console.log(`Question 5 ${false === '0'}`); // False - strict

// Determine whether the name Dino appears in the strings below -- check each string separately):
let str1Q7 = "Few things in life are as important as house training your pet dinosaur.";
let str2Q7 = "Fred and Wilma have a pet dinosaur named Dino.";

// Apparently you can run .includes on a string. I split it into an array by calling .split and searched using includes. 
// But then I had to add a 'Dino.' to make it work because it added the period. 
console.log(str2Q7.includes('Dino'));

str1Q7 = str1Q7.split(' ');
console.log(`Question 7 Has Dino? 1st string -  ${str1Q7.includes('Dino')}`);;
str2Q7 = str2Q7.split(' ');
console.log(`Question 6 Has Dino? 2nd string - ${str2Q7.includes("Dino", 0)}`);
console.log(str2Q7.includes('Dino.'));

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// .push() Adds Dino (or other elements) at the end of the array. 
// You can also add multiple elements by .push when you add a space in between. 
flintstones.push('Dino', 'Happy');
console.log(`Question 8 - ${flintstones}`)
// .shift() removes the first element of the array and returns the array
flintstones.shift();
console.log(flintstones);
// .unshift adds to the beginning of the array and returns. 
flintstones.unshift('Jade');
console.log(flintstones);
//.pop() takes last element off the array and returns array. 
flintstones.pop();
console.log(flintstones);

// Return a new version of this sentence that ends just before the word house. 
// Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
let advice = "Few things in life are as important as house training your pet dinosaur.";

//you can call .indexOf on a string to find where something starts. i.e. indexOf('house') is 39.
// instead of doing slice() and starting at 0 and counting all the way to 39... 
//you can do slice(0, advice.indexOf('house')) to get 39
advice = advice.slice(0, advice.indexOf('house'));

console.log(advice);