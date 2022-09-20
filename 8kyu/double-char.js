// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//MY SOLUTION:---

function doubleChar(str) {
    let newStr = '';
    for(let i=0;i<str.length;i++){
      newStr += str[i] + str[i]
    }
    return newStr
  }

//ADDITIONAL NOTES: I should have used the map function, it would have made this much simpler. Here is what others did.
// const doubleChar = (str) => str.split("").map(c => c + c).join("");