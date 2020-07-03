let str = 'The grass is green';

let grass = str.slice(str.indexOf('grass'), (str.indexOf('grass') + 'grass'.length));

console.log(grass);

let numbers = [1, 2, 3, 4];

numbers.forEach(number => {
  let i = 0;
  numbers[i] = number + 1;
  i += 1
  console.log(number);
});

console.log(numbers);

let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
obj.broccoli = 'vegetable';
obj.pear = 'fruit';
console.log(obj);