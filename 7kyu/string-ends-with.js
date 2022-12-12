// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//MY SOLUTION:

const solution = (str,ending) => str.slice(str.length-ending.length)==ending

//ADDITIONAL NOTES: Looking at other solutions, there is apparently an "endsWith" method that makes this even easier.

function solution(str, ending){
  return str.endsWith(ending);
}