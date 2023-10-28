/**
 
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

Have fun!

 */

function oddOrEven(array) {
  let result = 0;
  
  array.forEach(num => {
    result += num
  })
  
  if(result === 0) {
    return 'even'
  } else if (result % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

/**
 
Input: Array of numbers
Output: string of "odd" or "even" based on number output

steps:
- have a varible with a starter number - 0 
- loop over the array 
- use Addition assignment (+=) with the starter 
- create a coditonal checking if the result number is odd or even using the module (%) dividing by 2
- start with the codition if = 0 then return 'even'
  - else if (result % 2 === 0) - return even 
  - else return 'odd'

 */