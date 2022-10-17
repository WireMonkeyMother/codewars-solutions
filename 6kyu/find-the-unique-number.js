// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

//MY SOLUTION:

function findUniq(arr) {
    const sortedArr = arr.sort((a,b) => a-b)
    if(sortedArr[0] != sortedArr[1]) {
      if(sortedArr[1] == sortedArr[2]){
         return sortedArr[0]
       }
      else {
        return sortedArr[1]
      }
    }
    else {
      return sortedArr[sortedArr.length -1]
      }
  }

//ADDITIONAL NOTES: I don't really know much about performance, other than the idea that making fewer function calls is faster (maybe? I'm not even sure about that). From what I understand, the less time you need to spend repeating tasks, the better. I thought that simply sorting the array once and then comparing the first, second, and third elements, then returning either the first or last based on the comparison would be the most efficient, but it took 2680 to complete the "very long array" test, so I'm not sure how that compares. 

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }
//This one was the most popular other answer and it has a significantly lower time to complete at 1537 ms. Looking at this answer, I realize that I got stuck on the idea that the first test had to be a !=, which resulted in my version taking longer.