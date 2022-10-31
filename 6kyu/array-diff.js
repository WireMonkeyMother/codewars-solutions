// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//MY SOLUTION:
function arrayDiff(a, b) {
    const answer = a.filter(element => !b.includes(element))
    return answer
   }

//ADDITIONAL NOTES: Looking over other solutions, I could have reduced the lines slightly by just returning a.filter(element => !b.includes(element)), but I still like my answer because it allows me to expand the function if needed. Then again, I suppose I should probably make another function if I want to do more with this number, so perhaps the other method is better...

