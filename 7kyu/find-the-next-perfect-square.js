// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//MY SOLUTION:---

const findNextSquare = sq => (Number.isInteger(Math.sqrt(sq))) ? Math.pow(Math.sqrt(sq)+1,2) : -1

//ADDITIONAL NOTES: I first solved this one without a ternary, because it is still clearer to me when I see it all written out. I actually don't like the ternary for the more involved equations, I think it ends up taking longer to mentally parse than just writing it out in standard form.

// function findNextSquare(sq) {
//     if(Number.isInteger(Math.sqrt(sq))){
//       return Math.pow(Math.sqrt(sq)+1,2)
//     }
//     else{
//       return -1;
//       }
//   }