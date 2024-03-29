// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

//MY SOLUTION:

var maxSequence = function(arr){
    if (arr.every(element => element<0) || (arr.length == 0)){
      return 0
    }
    else if (arr.every(element => element>=0)){
      return (arr.reduce((a,b) => a+b,0))
    }
    else {
      let bigArr =[];
      for(let n = 0; n<arr.length; n++){
        for(let i = 0; i<arr.length;i++){
          bigArr.push(arr.slice(i,arr.length-n).reduce((a,b)=>a+b,0))
        }
      }
      return Math.max(...bigArr)
    } 
  }

//ADDITIONAL NOTES: First ever 5kyu, whoohoo! I know this was not an efficient solution (O!*O!, I think?), but it did work. Looking at other solutions, I see that other's had a similar idea, those perhaps more efficient?

var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }