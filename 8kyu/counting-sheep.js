// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//MY SOLUTION:

function countSheeps(arrayOfSheep) {
    let sheep = 0;
    arrayOfSheep.forEach(x => x? sheep+=1:sheep)
    return sheep
  }


//ADDITIONAL NOTES: I saw that a lot of other people used an array.filter method, which I like a lot. After researching it a bit, it seems like a great tool for clearing out Null and Undefined values from any array very simply.

// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
//   }