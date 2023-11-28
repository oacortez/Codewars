/** 
 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

 */

function digitize(n) {
  let number = n.toString().split('')
  
  const solution = number.map((n) => parseInt(n))
  
  return solution.reverse()
}


/**
 
Input: number 
output: Array

Steps:

- create a variable to store answer
- convert number(n) into string value inside that variable you recently created use .toString()
- use special .split() method to convert string to a break down of array of elements
- Iterate thru string elements and convert each element into Number data type use .map() to return 
  a new version of the array you worked with
- Return solution using .reverse() to reverse each element 
  ex; [1, 2 , 3] => [3, 2, 1] - using .reverse method

 */