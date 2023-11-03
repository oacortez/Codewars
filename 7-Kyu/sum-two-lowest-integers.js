/**
 
TASK:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

 */

function sumTwoSmallestNumbers(numbers) {  
}

/**
 
General: 
- I am given an array and I need to add the total sum of both lowest numbers in the array

input: Array
output: integer

Steps:
- sort least number to highest 
- use bracket notation to access element from the array 
- since I dont need to worry about negative or floats I can just add both num together 
- have a variable adding(+) the first(0) index and the second(1) index
- after that I should have result and return it

 */