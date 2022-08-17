// Prompt
/**
 
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" 
string for false.

 */

// Code Solution:
function boolToWord( bool ){
  if(bool === true) {
    return 'Yes'
  } else {
    return 'No'
  }
}


// PSUEDO:

/**
 
Problem: I am given a Boolean value and I need to return a string value of "Yes" or "No" based if the Boolean
is true(Yes) or false(No)

Input: Boolean
Output: String of "Yes" or "No" Based on the boolean value

edgecases:
- Checking if its a number or has any espicial character 
- check if its any other sort of value 

steps:
- first just to sanitize check you can check if the boolean is out putting the value
- next you can create a conditional statement checking if the boolean using strictly equals (===)
- check if the input is 'true' if so then return "yes" else then if its not true return "no"
- since we need to return a string value I just did it with a "" as a string value 
 */