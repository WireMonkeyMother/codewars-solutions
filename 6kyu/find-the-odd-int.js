// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//MY SOLUTION:

function findOdd(A) {
    for(let i = Math.min(...A); i<=Math.max(...A); i++){
      if(A.filter(num => num == i).length % 2 != 0){
          return i
        }  
    }
}

//ADDITIONAL NOTES: I almost had the solution in the first 5 minutes, but then I forgot to expand my Array when calculating the Math.min and Math.max, so I spent an extra 15 minutes trying to see why I kept getting undefined when my array was longer than 1. Looking at other's solutions, some people did some fun and funky stuff with their knowledge of math to get this.

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//Which I don't really understand. However, other folks came up with this

function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }

//which I think is a much cleaner version of my code.