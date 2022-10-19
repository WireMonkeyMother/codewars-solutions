// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases (input -> output):

// 1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!

//MY SOLUTION: !!!THIS IS INCORRECT, BUT THE CLOSEST I COULD GET!!!

function sumDigPow(a, b) {
    let powerfulDigits = []
    for(let i = a; i<=b; i++){
      let testing = i.toString().split('')
      for(let n=0; n < testing.length; n++){
        if ((testing.reduce((acc,c) => acc + Math.pow(testing[n], n+1))) == Number(testing[n])){
          powerfulDigits.push(i)
        }
      }
    }
    return powerfulDigits
  }
//I couldn't quite find the solution to this one, I was able to get it working for numbers below 10, but then it couldn't handle it. Looking at other's solutions, I saw this, which was very similar to mine;

function sumDigPow(a, b) {
    var arr = [];
    for (var i = a; i <= b; i++) {
      var sum = 0;
      for (var j = 0; j <= String(i).length; j++) {
        sum += Math.pow(parseInt(String(i)[j]), j+1);  
        if (sum == i) arr.push(i);
      }
    }
    return arr;
  }