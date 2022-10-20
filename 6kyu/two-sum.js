// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//MY SOLUTION:

function twoSum(numbers, target) {
    let answerList = []
    for(let i=0;i<numbers.length;i++){
      for(let n=1;n<numbers.length;n++){
        if((numbers[i]+numbers[n]) == target){
          answerList = [numbers.indexOf(numbers[i]),numbers.indexOf(numbers[n],n)]
          return answerList
        }
      }
    }
  }

//ADDITIONAL NOTES: This other solution was very similar to mine, but a bit cleaner. I realize now that I didn't need to go and find the index, since I already had the exact number with my i and n (I feel silly now). 

// function twoSum(numbers, target) {
//     for (var i = 0; i < numbers.length-1; i++) {
//         for (var j = i+1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) return [i, j];
//         }
//     }
// }