// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

//MY SOLUTION:

const reverseList = list => list.reverse()

//ADDITIONAL NOTES: It's funny, I was planning to break it into a string, split, reverse, and rejoin the string. But then I did some research and realized that you can very easily reverse an array using the reverse method.