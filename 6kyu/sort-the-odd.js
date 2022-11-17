// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//MY SOLUTION:

function sortArray(array) {
    let indexArr =[]
    array.forEach(elem => {if(elem%2==0){indexArr.push(array.indexOf(elem))}})
    let oddArr = array.filter(elem => elem%2!=0).sort((a,b)=>a-b)
    indexArr.forEach(elem => oddArr.splice((elem),0,array[elem]))
    return oddArr
  }
//ADDITIONAL NOTES: This is almost right, but it doesn't handle duplicates due to the "indexOf()" only returning the first element. I'm not entirely sure how to handle that. Looking at other's solutions, there is apparently a much simpler solution using the shift method.
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }

//So, after creating the odd array with array.filter, they used the map method to create the final array, instead of my forEach. The tricky part is the x%2. As I understand it, x%2 will either return 0 or 1. If it returns 0, that is considered "false", so it will use X, while if it returns 1, that is considered "true", so it will return odd.shift(). In other words, if x%2 is odd, you get 1 and therefore return odd.shift(), which will be the first element of your odd array from above. 