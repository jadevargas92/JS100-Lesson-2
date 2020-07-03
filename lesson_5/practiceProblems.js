//Question 1
// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?
// let arr = ['10', '11', '9', '7', '8'];

// arr.sort((num1, num2) => num1 - num2);
// console.log(arr);

// Question 2

// How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => a.published - b. published);
let publishedBooks = [];

books.forEach(book => {
  publishedBooks.push(book.published);
});

console.log(publishedBooks);

let booksObject = {
  title: 'something',
  author: 'someone',
  year: 2020
};

let booksArray = Object.values(booksObject);
console.log(booksArray);

let abcd = 'abcd'.split('');
console.log(abcd);

let abcdJoin = abcd.join();
console.log(abcdJoin);

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

console.log(arr1[2][1][3]);
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1].third[0]);
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

console.log(arr3[2].third[0].charAt(0));

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

console.log(obj1.b[1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

console.log(Object.keys(obj2.third)[0]);

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munsterNames = Object.entries(munsters);
let age = 0;
munsterNames.forEach(name => {
  if (name[1].gender === 'male') {
    age += name[1].age;
  }
});

console.log(age);

for (let member in munsters) {
  console.log(`${member} is a ${munsters[member].age} year-old ${munsters[member].gender}`);
}

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let objEntries = Object.values(obj);
console.log(objEntries);

// Question 9
// Given the following data structure, return a new array with the same structure, 
// but with the subarrays ordered -- (alphabetically or numerically as appropriate -- in ascending order.
// let arr9 = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// let newArr9 = arr9.map(subArray => {
//   return subArray.sort((obj1, obj2)=> {
//     if (typeof(obj1) === 'number') {
//       return obj1 - obj2
//     }
//     if ()
//   }
// })

// Given the following data structure, use the map method to return a new array identical in structure to the original but, 
// with each the number incremented by 1. Do not modify the original data structure

let arr11 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let copyArr = {};
arr11.map(obj=> {
  for (let key in obj) {
    copyArr[key] = obj[key] + 1;
  }
})



  console.log(arr11);
  console.log(copyArr);
  
// Question 12
// Given the following data structure, use a combination of methods, including filter, 
// to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.
let arr12 = [[2], [3, 5, 7], [9], [11, 15, 18]];
let multiplesOfThree = [];

arr12.forEach(array => {
  multiplesOfThree.push(array.filter(index => (index % 3 === 0)))
})
console.log(multiplesOfThree);


// let testArray = [3, 7, 9 ,23 , 27]
// let testArrayFiltered = testArray.filter(num => (num % 3 === 0));
// console.log(testArrayFiltered);
// console.log(testArray);

//Question 13
// Given the following data structure, sort the array so that the 
// sub-arrays are ordered based on the sum of the odd numbers that they contain.
// CORRECT ANSWER
let arr13 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr13.sort((a,b) => {
  let oddNumbersA = a.filter(num => (num % 2 === 1))
  let oddNumbersB = b.filter(num => (num % 2 === 1));
  
  return oddNumbersA.reduce((total, num) => total + num) - oddNumbersB.reduce((total, num) => total + num)
})

console.log(arr13);

function digital_root(n) {
  n = (n + '').split('')
  n = n.map(num => Number(num));
  n = n.reduce((total,nextNum) => total + nextNum);
 return n;
}

console.log(digital_root(15));
// Question 15
// Given the following data structure, 
// write some code to return an array which contains only the objects where all the numbers are even.
let arr15 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

for (let object of arr15) {
  console.log(Object.values(object)[0][0]);
}

let todoLists = [
  {
    id: 1,
    listName: 'Groceries',
    todos: [
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false }
    ]
  }
];



console.log(todoLists[0]['todos']);

let array = [7,7,7];
array.shift();
console.log(array);

function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));