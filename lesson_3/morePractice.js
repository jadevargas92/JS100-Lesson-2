let numbers = [1, 2, 3];

numbers[6] = 5;
// .map doesn't mutate the original array. You have to change it. 
numbers = numbers.map(() => 10);

console.log(numbers[1]);

// How can you determine whether a given string ends with an exclamation mark (!)?
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// console.log(str1.endsWith('!'));

// Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('spot'));

// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
console.log(munstersDescription.indexOf('Munsters'));

let newString = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substr(1).toLowerCase();
console.log(newString);

// We have most of the Munster family in our ages object:

let agesNew = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };
// Add new key values to an Object. 
// You have to call the prototype Object and assign - Object.assign(TARGET OBJECT, SOURCE YOU WANT TO ADD);

Object.assign(agesNew, additionalAges);

console.log(agesNew);

let randomFriends = {
  areYouMyFriend: false,
  sayYourName: function() {
    console.log(`My name is ${this.name} and this is ${this.areYouMyFriend}`);
  }
};

let friend = Object.create(randomFriends);

friend.name = 'Lauren';
friend.areYouMyFriend = true;

friend.sayYourName();

let friendTwo = Object.create(randomFriends);

friendTwo.name = 'Dillon';
friendTwo.areYouMyFriend = true;

friendTwo.sayYourName();

// Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));


console.log(str1.match('Dino') !== null);
console.log(str2.match('Dino') !== null);

// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino', 'Hoppy');
console.log(flintstones);

// Return a new version of this sentence that ends just before the word house. 
// Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice = advice.slice(0, advice.indexOf('house'));

console.log(advice);