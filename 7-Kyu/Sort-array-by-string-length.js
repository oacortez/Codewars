/**
 
PROMPT:

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

 */

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length)
}

/**
 
Input: Array
Output Array

General thought: I am given a list of elements inside an Array. I need to find the lowest to highest 
word count from that list and I need to sort it based on the lowest count word to highest


Thoughts:
- Might need to loop thru each element 
- use .length to see how many characters each string has

Steps to solve:
- Use sort to arrange from least to highest 
- use params of a and b 
- attach .length on both a and b with a minus(-) math symbol in between to sort them by numberical number(lowest to highest)
- return array once is all sorted
- should be able to get correct final answer! 

 */