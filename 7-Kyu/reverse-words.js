/*

TASK:
Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
    
  let arr = str.split(' ')
  
  const words = arr.map(letter => letter.split('').reverse().join(''))
  return words.join(' ')
}

/**
 
Pseudocode:
- I am given a string type and I need to reverse every word in the sentense and return it back

Input: string
Output: string


Steps:
- I need to convert String into an Array 
- Iterate thru thu the words inside the array
  - It has to be a new set of array -- .Map()
- I have to split each word using .split()
- Reverse each word using .revese()
- Join each word together 

- I will have a new set of words but with the new array of reversed words
- Since we still have an array we have to use .joing('') 
  - to return final result

 */