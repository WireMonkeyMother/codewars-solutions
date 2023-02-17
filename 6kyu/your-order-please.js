// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//MY SOLUTION:

function order(words){
    let ans=[];
    let splitWords = words.split(' ');
    for(let i=1;i<=splitWords.length;i++){
      ans.push(splitWords.filter(word =>word.includes(i)))
    }
    return ans.join(' ')
}


//ADDITIONAL NOTES: There is probably a way to do this more directly, but I like seeing each step with it's clear purpose. I know that I tend to use the "make an empty array and then fill it" technique when there are a lot of methods that will create/return an array for you, I need to get better with those.
//I thought it would be likely that a regex would work well here and it looks like that was a common solution as well.

function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  } 

