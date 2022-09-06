// The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.

// Examples
// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

// The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

//MY SOLUTION ---

function stantonMeasure (arr) {
    let countTheOnes = 0;
    arr.forEach(ones => {
      if (ones === 1){
        countTheOnes +=1;
      }
    })
    let countTheNs = 0;
    arr.forEach(ns => {
      if (ns === countTheOnes){
        countTheNs += 1
      }
    })
    return countTheNs
  }

//ADDITIONAL NOTES: I saw a lot of other people using array.filter in their solutions, as well as making more efficient use of the arrow functions. I need to learn more about the different methods that are available for arrays, as well as practice arrow functions more.