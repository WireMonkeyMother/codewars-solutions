// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first

//MY SOLUTION:---

function highAndLow(numbers){
    let nums = numbers.split(" ").sort((a,b) => a - b);
    return nums[nums.length -1] + ' ' + nums[0];
  }

//ADDITIONAL NOTES: Looking through the other answers, a lot of people were using the Math.max and Math.min methods instead of sorting and then taking the first and last. I think either option works well depending on what else you might need to do with the data. There are circumstances where it might be helpful to have everything else already sorted, but not always.