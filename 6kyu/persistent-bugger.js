// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//MY SOLUTION:

function persistence(num){
    let digits = num.toString().split('')
    let digitProd = digits.reduce((acc,c) => acc*c, 1)
    if(num<10){
      return 0
    }
    else if(digitProd < 10){
      return 1
    }
    else{
      return 1 + persistence(digitProd)
    }
  }

//ADDITIONAL NOTES: This solution took me quite a while to develop because I really wanted to use a recursive function on it, but had never used one before. At first, I was all sorts of wrong (used fixed count variables that existed outside the function), but fortunately my partner demonstrated the simplest form of recursives and I was able to build up from there. I got stuck on the predicament of starting off with a single digit, but eventually solved it by simply adding in another "if" statement for cases where num<10.

//Addtionally, I found this iterative answer that someone else had completed which I really liked. It's almost recursive (I think? I'm not really sure about this stuff) with the num in the for-loop.

function persistence(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
 }