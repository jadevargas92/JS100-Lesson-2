// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice = "Few things in life are as important as house training your important pet dinosaur.";
// .replace(thing you want to replace, thing you want to replace it with)
advice = advice.replace('important', 'urgent');
console.log(advice);
//to do a global replace(/important/g, 'urgent'); the /g is for global
let advice2 = "Few things in life are as important as house training your important pet dinosaur.";
advice2 = advice2.replace(/important/g, 'urgent');
console.log(advice2);

// Question 2
let numbers = [1,2,3,4,5]
numbers.reverse();
console.log(numbers);
numbers.splice(2,1);
console.log(numbers)
// .sort sorts ascending order unless given a compare function.
// so below, it is given the parameters, and checking if num
let numbers2 = [4,-7,3,1,2];
console.log(numbers2.sort())
numbers2.sort((num1, num2) => num2 - num1);
console.log(numbers2);

let numbers3 = [4,5,2,9,7,6];
let reversedArray = [];
numbers3.forEach(function (num1) {
  reversedArray.unshift(num1)
})

console.log(reversedArray);

console.log(numbers3.sort());

let someString = 'Hello my name is jade and I am trying something';
let stringArr = someString.split(" ");
stringArr.forEach(function (valueIndex) {
  let splitValueIndex = valueIndex.split('');
    splitValueIndex.reverse();
    splitValueIndex.forEach(function (splitIndex){
      splitIndex = splitIndex.toUpperCase();
    })
})


// Given a number and an array, determine whether the number is included in the array.
let numbers5 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let numb1 = 8;  // false
let numb2 = 95; // true

console.log(numbers5.includes(numb2));

//Question 4
// show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";
let firstFamousWords = 'Four score and '

console.log(firstFamousWords.concat('', famousWords));