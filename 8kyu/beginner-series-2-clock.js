// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

//MY SOLUTION---

function past(h, m, s){
    let milliseconds=0;
    milliseconds += (h * 3600000)
    milliseconds += (m * 60000)
    milliseconds += (s * 1000)
    return milliseconds
  }

//I've looked at some of the other answers and I realize that I could have extracted 1000 from all the equations and then just muliplied the result by 1000, which would make the numbers look a bit more manageable. I like the look of it my way, but it could have also been

//let milliseconds = 0;
// milliseconds += 1000 * ((h*3600)+(m*60)+(s))