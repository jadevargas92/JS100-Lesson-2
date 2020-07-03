// Take and input that is a string
// Output an array that includes the palindromes.
let substrings = [];
let palindromeArray = [];
function changeMe(someString) {
  let indexStart = 0;
  let indexEnd = indexStart + 2;
  substrings.push(someString.slice(indexStart, indexEnd));
  
  while (indexStart < someString.length) {
    while (indexEnd < someString. length + 1) {
      substrings.push(someString.slice(indexStart, indexEnd));
      indexEnd += 1;
    }
    indexStart += 1;
    indexEnd = indexStart + 2;
  }
  palindrome(substrings);
}


function palindrome(substringsArray){
  substringsArray.forEach(substring => {
     if (substring === substring.split('').reverse().join('')) {
       palindromeArray.push(substring);
     };
  });
  console.log(palindromeArray);
}

changeMe('We will meet at NOON');