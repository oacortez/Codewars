// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.





// =====================================================================================

/* 
Psuedocode:

PROBLEM: I am given a string value and need to check each letter in the string value 
if it contains a vowel(a, e, i, o, and or u) I need to add it to a counter to return 
how many vowels were found in the string value given.

Input: String 
Output: Number - aka total vowels found

Brainstorm:
- Create a variable name TOTAL and assign it to a vavlue of 0 to start off
- Need to check each individual letter from the string 
- I need some sort of loop to check each single letter in the string
- Create a conditional to check if it contains a vowel then add a 1+ counter 
to the total value of our string we start off with 0.


Note: I got stumped on this one due to trying to use a for loop. With a lot of trial and error I was not able to figure it out
Googled a lot to try to get the solution but I only gave myself 45 min to figure it out. 
I found a way using Stack Overflow using a .forEach() wish is a for loop but ES6 version of JS
and as well using .indexOf() - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

.indexOf() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
forEach() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
