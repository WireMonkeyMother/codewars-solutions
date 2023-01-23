// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//MY SOLUTION:

const areYouPlayingBanjo = name => name[0].toLowerCase()=='r'? name + ' plays banjo':name + ' does not play banjo' 

//ADDTIONAL NOTES: I've been absent for about 2 months now and this is my first time back. Thankfully, I haven't forgotten everything. I did see this other version of the solution, which I like a fair bit. 
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }