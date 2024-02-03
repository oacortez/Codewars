/**
 
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

 */

function removeUrlAnchor(url){
}


/**
 
Input: String
Output: String

Steps:
- Create a variable to store the split string from the parameter 
- Use .split() in the string and store the anchor character - url.split("#")
- Next create another variable to modifie the url and only get everything before the "#"
- return the modified url that is stored in the variable created

 */