/**
 
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

 */

function basicOp(operation, value1, value2)
{
  if(operation === '+') {
    return value1 + value2 
  } else if(operation === '-') {
    return value1 - value2
  } else if(operation === '*') {
    return value1 * value2
  } else if(operation === '/') {
    return value1 / value2
  }
}

/**
 
Psuedocode: 
- I am given a function with 3 parameters
  - Operation = the operation(+, -, *, and /)
  - Value1 = the first given number
  - Value2 = the second given number

steps:
- I need to check the operation 
  - I am going to use conditional if statement 
- When checking the operation if it fits (+, -, *, /)
- create math operation based on the operation conditional expression I am checking
- once creating math operation return solution

Ps: I feel like this code is not conventional and would like to come back to it once I have
more experience
 */