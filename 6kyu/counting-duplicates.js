// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//MY SOLUTION:  

//I couldn't figure this one out, even after looking it up I didn't fully understand the regex portion of it. I was able to intuit the .toLowerCase().split(''),sort().join('') portion, but the .match(/([^])\1+/g) || []) is still confusing.  

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }

//ADDITIONAL NOTES: It looks like the [^] matches anything not enclosed by the [] (which in this case is everything), and the () captures the group for later reference. The \1+ will check if the captured group matches the next group we look at, while the /g makes it global. All together, this says "Take and remember a group comprised of anything and see if it matches the next group comprised of anything. If it does, keep checking until it doesn't, then report the length". Finally, the || [] says "Or return a list with a length of 0", which ensures that, if the first portion finds 0 matches (no repeats), we will have a list of length 0 instead of an undefined/null value.

//*IMPORTANT FOR FUTURE USE! Truthy || something else is a clever way to short-circuit an if/else statement. Anything after the || only runs if the first part evaluates to false, so it's a convienent way to make sure you still have a workable value.

