/**
 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

 */

function solution(str, ending){

  let endStr = ending.length
  
  let remove = str.substr(-endStr)
  
  if(remove === ending) {
    return true
  } else {
    return false
  }
  
}


/**
 
Input: String
Output: true/false statement

Steps:
- I am given a function with 2 parameters(both params are strings)
- Since there are both strings I need to remove the first parameter to match the second parameter 
- Create a variable the holds only the length of the second parameter using .length
- Create another variable now that removes the first parameter to match the second parameter using .substr()
= If statement to check if the first param matches the second param
  - if yes return true 
  - else return false 

 */