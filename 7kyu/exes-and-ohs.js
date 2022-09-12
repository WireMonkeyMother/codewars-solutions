// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//MY SOLUTION: ---

function XO(str) {
    let exes = 0;
    let ohs = 0;
    if (!str.includes('x') && !str.includes('o')){
      return true
    }
    else{
    for(let i =0; i<str.length; i++){
      if(str[i].toLowerCase() == 'x'){
        exes+=1
      }
      else if(str[i].toLowerCase() == 'o'){
        ohs+=1
      }
    }
    }
    if (exes != ohs) {
        return false
    }
    else{
        return true
    }
  }

//ADDITIONAL NOTES: I totally missed the easy solution, which is just to split the string into an array of X's and an array of O's, then compare the lengths. 
// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }