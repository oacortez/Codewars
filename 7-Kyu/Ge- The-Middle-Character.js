/**
DESCRIPTION:
You are going to be given a word. Your job is to return the middle character of the word. If the word's 
length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


#Examples:
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"


#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test 
cases due to an error in the test cases). You do not need to test for this. This is only here to tell you 
that you do not need to worry about your solution timing out.

#Output
The middle character(s) of the word represented as a string.

 */


/**
 
/*
Problem: 
I am given an string input. I need to return the middle of the strin value.
If the word lenght is odd return the middle character. If the length is even return the 
2 middle letters in that string as a string.

Input: String

Output: Middle letter if its ODD or the 2 middle character if its an EVEN length - String value


Brainstorm:
- Create an empty array to push my solution 
- Check if its odd or even 
- divide the lenght of the value using a module (lenght % 2 )
- check if the the number is odd or even (num % 2 === 0)
- based on that figure out how to get the middle character or the 2 characters in that string
- Return it as a string

*/

 */