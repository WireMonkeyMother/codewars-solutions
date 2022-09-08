// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//MY SOLUTION ---

function longest(s1, s2) {
    let word = ''
    for(let i=0; i<s1.length; i++){
      if(!word.includes(s1[i])){
        word+=s1[i]
      }
    }
    for(let i=0; i<s2.length;i++){
      if(!word.includes(s2[i])){
        word+=s2[i]
      }
    }
    const longestWord = word.split('')
    return (longestWord.sort()).join('')
    
  }

//ADDITIONAL NOTES: Looking at other's answers, I see much simpler solutions using Set, which I haven't heard of before, but seems to take unique values only, which makes it perfect for this. The cleanest answer I found was this:

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//which (I think) just makes a new set by adding s1 and s2, then sorts it alphabetically, then joins it without the commas and quotes. Very clever.