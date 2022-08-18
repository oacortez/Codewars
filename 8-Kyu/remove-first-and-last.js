// Prompt

/**
  It's pretty straightforward. Your goal is to create a 
  function that removes the first and last characters of a string. 
  You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

 */


  /**
   Psuedo:

   Problem: I am given a string and need to remove the first and last index num from that string 

   input: string
   output: new string with first and last str removed

  brainstorm:
  - I need to convert string to an array 
  - use .split('') to make each individual character a string index
  - remove first and last character using .shift() - (removes first index value) + .pop() - (removes last index value)
  - next convert your array to become a string again 
  - return  .join('') - to convert as a string

   */