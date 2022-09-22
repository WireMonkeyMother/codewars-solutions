// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//MY SOLUTION:---

const number= array => {
    let i = 1;
    return array.map(x=> `${i++}: ${x}`) 
    }

//ADDITIONAL NOTES: This one took me a while to figure out, I didn't realize I could just put a counter right in return function for the map. Easier than I thought.
