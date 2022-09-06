// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

//MY SOLUTION ---

const binaryArrayToNumber = arr => {
    let binInt = 0;
    let n = 1;
    for(let i=1; i<=arr.length; i++){
      binInt += (arr[arr.length-i]*n);
      n = n*2
      }
    return binInt 
  };

//Looking through the other answers, I noticed that many people used the parseInt function to do this much more easily, like this 
// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(""), 2)
// };
//Based on MDM, it seems like the parseInt takes two parameters, the first is the number you are parsing, the second is the base (base 10, base 2, etc). So, in this solution, you use arr.join to create a new array with no spaces or commas between the numbers (arr.join(""), and then finding the base 2 (binary) value of that numbe. Very smooth.