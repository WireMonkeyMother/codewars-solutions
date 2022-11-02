// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//MY SOLUTION (don't look, it's hideous):

function reverseWords(str) {
    let tempStr = str.split(" ")
    let ansArr = []
    for (let i=0; i<tempStr.length; i++){
      let strang = String(tempStr[i]).split("").reverse().join("")
      ansArr.push(strang)
  }
    return ansArr.join(" ")
  }

//ADDITIONAL NOTES: Okay, for this one, I knew there had to be a pretty way to do it, but for some reason I couldn't see it. I tried for a while before eventually just submitting this thing. Then, I saw a lot of other people had this nice fun answer. 

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }

//This does everything I wanted in a much less obscure manner. You just reverse the entire sentence, including both word-order and letters, then reverse it back on just the word-order. 