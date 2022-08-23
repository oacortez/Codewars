/**
 
PROMPT:
In this kata you will create a function that takes a list of non-negative integers and strings and 
returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

 */

// FINAL RESULT
function filter_list(l) {
  // Return a new array with the strings filtered out
  const num = []
  const filtLetters = l.forEach(char => {
      if(typeof char === 'number') {
        num.push(char)
      }
  })
  return num
}


/**
 
Problem: I am given an array of values and need to only return an array of numbers

input: array of random values
output: array of number values

Braninstorm:

- Use a filter method to only return the values that I need
- use a conditional to check the value

- Use a empty array to store your final values
- use typeof to check which values are numbers
- push the values that are numbers to that empty array

Reflection:
- I started working on using filter but for some reason it did not want to work for a edge case
- I used forEach and push the values I needed to an empty array

 */