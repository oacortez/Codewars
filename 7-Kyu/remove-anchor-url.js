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
- Next create another variable to modified the url and only get everything before the "#"
- return the modified url that is stored in the variable created

Note: This code is not fully dynamic due to if we changed a test case to 'www.codewars.com/katas/#about?page=1' the code would then return
"www.codewars.com/katas/" instead of 'www.codewars.com/katas/?page=1'

 */