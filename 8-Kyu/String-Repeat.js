/**  PROMPT: 

Write a function that accepts an integer n and a string s as parameters, and returns 
a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/


// Solution:
function repeatStr (n, s) {
  return s.repeat(n)
}


/**
Problem: I am given two inputs; a number and a string. and I need to return the a string of 
the amount that is going to be repeated

input: number & String 
output: repeated string amount based on the number input given

- brainstrom: 
  * Need to check for any methods I can user with string - Maybe - .repeat() ?
*/ 

/** 
Conclusion:

I overthought this one for a bit since its my first time coding in JS again. But I was
able to pick it up fast by looking at the documents. I found out about 
.repeat() and how is able to take a string and able to repeat it as many times as you would like.
Some of the edge cases I was thinking were;

- Space takes count 
- if numbers would be hold count 

Overall it was very easy and a good intro.
*/