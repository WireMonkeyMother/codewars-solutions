// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//MY SOLUTION:---

const repeatStr = (n,s) => s.repeat(n)

//ADDITIONAL NOTES: I had to go look up the repeat method and then I got silly and kept trying to call it on n with s as the arguement. Lesson: READ THE PROMPT CAREFULLY.