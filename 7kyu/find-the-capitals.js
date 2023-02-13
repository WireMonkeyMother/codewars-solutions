// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//MY SOLUTION:

var capitals = function (word) {
    let answer = [];
    let splitWord = word.split('');
      splitWord.forEach(element => element===element.toUpperCase() ? answer.push(splitWord.indexOf(element)): -1)
    return answer;
  };

//ADDITIONAL NOTES: I'm sure there is a more effecient way to do this, I'm just not sure what it is at the moment. Looking at other's solutions, I see 
var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };

//which is not really that much different than mine, so I guess I did alright. I am concerned about this working when a word has duplicates of the same capital letter though? I'm not sure why it passed the tests. Looking at the other solutions and responses, I don't see a clear solution to this either.
