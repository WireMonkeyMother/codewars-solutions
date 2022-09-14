// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//MY SOLUTION:---

const disemvowel= str => str.split(/[aAeEiIoOuU]+/).join('')

//ADDITIONAL NOTES: I didn't have much of an idea at first, other than trying to use the .split.join method from before. I didn't know about Regex's in JS until now, but they seem quite useful. One thing I saw others do is str.split(/[aeiou]gi/), which makes it both case insensitive and gobal, so it affects the entire string.
