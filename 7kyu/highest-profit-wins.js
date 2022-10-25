// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

//MY SOLUTION:

const minMax = arr => [Math.min(...arr),Math.max(...arr)]

//ADDITIONAL NOTES: This was my first time seeing and understanding the "spread" syntax (I had seen it in other code snippets, but not known what it was). It seems like a very useful addition, similar to for-each in this case, where I can run a method on each element of an array.
//I saw some other folks used this technique instead, which seems to be essentially the same idea, just an older way of writing it.

// function minMax(arr){
//     return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
//   }