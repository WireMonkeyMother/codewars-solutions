
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//MY SOLUTION---

function find_average(array) {
    // your code here
    if (array.length != 0){
      let sum = 0;
      for (let i =0; i < array.length; i++){
        sum += array[i]
      }
      return (sum / array.length)
    }
    else {
    return 0;
    }
  }