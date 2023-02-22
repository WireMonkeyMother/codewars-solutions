// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//MY SOLUTION:

function countSmileys(arr) {
    let count = 0;
    const re = /[:|;][-*|~*]?[)|D]/
    for(let i=0; i<=arr.length;i++){
      if(re.test(arr[i])){
        count+=1
      }
    }
    return count
  }

//ADDITIONAL NOTES: Pretty much the entire time to solve this was just spent studying up on Regex's and how to make capture groups work properly. I didn't realize at first that I could use quantifiers on capture groups, but then I tested it a few time and found that it worked. I saw that others used a simple filter with a regex, which makes this whole code a lot simpler. 
function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
  }