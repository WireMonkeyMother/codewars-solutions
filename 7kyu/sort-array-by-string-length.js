// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//MY SOLUTION:

const sortByLength = array => array.sort((a,b)=>a.length-b.length)

//ADDITIONAL NOTES: This is really just a simple sort from lowest to highest, but we use the length of each array element. I took me a little longer than I like to admit to realize this.
