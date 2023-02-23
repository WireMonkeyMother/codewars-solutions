// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//MY SOLUTION:

const reverseLetter = str => str.replace(/[^a-z]/g,'').split('').reverse().join('')

//ADDITIONAL NOTES: I need to pay more attention to my regex, I kept missing one letter and it was because I had ^[] instead of [^]. Oof.