/** 
 
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

 */

var summation = function (num) {
  let result = 0; 

  for(let i = 1; i <= num; i++) {
    result += i
  }
  return result  
}


/** 
 
Psuedocode:

1) We define a function named summation that takes a single argument num. 
  This function will calculate the summation of numbers from 1 to num.

2) Inside the summation function, we initialize a variable called result to 0. 
  This variable will store the running total of the summation.

3) We use a for loop to iterate from 1 to num. In each iteration of the loop, 
  the current value of i (which starts at 1) is added to the result variable.

4) After the loop finishes, we return the final value of result, which 
  represents the summation of numbers from 1 to num.

  sidenote: This is a problem I need to look back due to not fully understanding
  the loop and the syntax of for...let. 
  * I got help thru chatgpt in order to solve this problem.
 */