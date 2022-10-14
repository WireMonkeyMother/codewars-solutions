// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//MY SOLUTION:

function openOrSenior(data){
    let newArr= [];
    data.forEach(element => newArr.push(element[0] >= 55 && element[1] > 7 ? 'Senior':'Open'))
    return newArr
  }

//ADDITIONAL NOTES: I spent about 15 minutes longer on this than I should have because I had an extra ) right after the 7 and it was closing the .push before I could tell it what values to use. I also need to get more consistent with .map instead, since that is being used a lot.