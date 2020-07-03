// const rlSync = require("readline-sync");

// let answer = rlSync.question('hello!');

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceValues = Object.values(produce);
// produceValues.forEach(value => {
//   console.log(value);
// });

// let produceKeys = Object.keys(produce);
// produceKeys.forEach(key => {
//   console.log(key);
// });

// let produceKeyValues = Object.entries(produce);

// produceKeyValues.forEach(keyValue => {
//   let [key, value] = keyValue;
//   console.log(`${key[0].toUpperCase() + key.slice(1)} is a ${value}`);
// })

// let produceKeyValues = Object.entries(produce);
// let vegetablesObject = {};

// for (let [key, value] of produceKeyValues) {
//   if (value === 'Vegetable') {
//     vegetablesObject[key] = value;
//   }
// };

// console.log(vegetablesObject);
// function lessThan(upperLimit) {
//   let lengths = [];

//   for (let candidate = 1; candidate < upperLimit; candidate += 1) {
//     lengths.push(candidate);
//   }

//   return lengths;
// }

// console.log(lessThan(5));

// let array1 = [1, 2, 3, 'e', null, undefined];

// let array2 = 5;
// console.log(array1);

// array1.length = 10;

// console.log(array1);

// let arr = {
//   a: 5,
//   undefined, 
// }

// let filteredItems = array1.filter(item => {
//   console.log(item);
// })


// console.log(Object.keys(arr).length === arr.length);

// let emptyArray = [];

// console.log(emptyArray == undefined);

// console.log(filteredItems);

// let map1 = [1, 4, 9, 16];
// let map2 = [];

// map2 = map1.map(item => item + 1);

// console.log(map1);
// console.log(map2);


// let result = [1, 2, 3, 4, 5].forEach(num => num + 1);

// console.log(result);

// let colors = ['green', 'blue', 'red'];
// let result = colors.map(word => word.toUpperCase());

// console.log(result);

const obj = { a: 'able', b: 'baker', c: 'charley' };
let result = Object.values(obj).map(value => value.toUpperCase());

console.log(result);