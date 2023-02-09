// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//MY SOLUTION:

const removeUrlAnchor = url => url.split('#')[0]

//ADDITIONAL NOTES: There is probably a way to do this with Regex and Replace, and looking at other's solutions, I see 

function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#.*/gi,"");
  }