// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//MY SOLUTION:

function countPositivesSumNegatives(input) {
    let positive = []
    let negative = []
    if(input==null||input.length==0){
      return positive
    }
    else{
      input.forEach(element => element>0?positive.push(element):negative.push(element))
    return([positive.length,negative.reduce((acc, c)=> acc+c,0)])
    }
  }

//ADDITIONAL NOTES: At first I thought I had missed something super obvious, but it looks like most other solutions were similar to this one. I did see one that had a much cleaner start, with a simpler check to see if we had both a non-null value and a length greater than 0.

// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }