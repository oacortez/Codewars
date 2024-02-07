/**
 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

 */

function createPhoneNumber(numbers){

  let areaCode = numbers.slice(0, 3).join('');
  let firstPart = numbers.slice(3, 6).join('');
  let secondPart = numbers.slice(6, 10).join('');
  
  return `(${areaCode}) ${firstPart}-${secondPart}`;

}

/**
 
Input: Array
Output: A String of Numbers

Steps: 
- We need to extract parts of the array in order to break each part down
  - .slice() will be a method that can help us do that
  - create 3 variables that hold area code, first part of number, and last part
- Next we need to bring back the splitted parts into string 
  - .join() method converts array in strings by concatenating its elements
- Finally use template literals to return final result

 */