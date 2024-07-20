/**
 
PROMPT: 
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

 */

function getEvenNumbers(numbersArray){
  const result = numbersArray.filter((number) => number % 2 === 0);
  return result
}


/**
 
- I need to first check how to check for odd numbers 
- Next check for how to use filter function syntax
- create code that checks if the current index number is odd
- return answer?

 */