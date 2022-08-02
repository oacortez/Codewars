/**
 
DESCRIPTION:
In this little assignment you are given a string of space separated numbers, and have to return the 
highest and lowest number.

Examples:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */


// =====================================================================================================


/**
 PSUEDOCODE

 PROBLEM: I AM GIVEN A STRING OF NUMBERS. I NEED TO RETURN A STRING OF THE HIGHEST NUMBER AND THE LOWEST 
 NUMBER BACK WITH A SPACE IN BETWEEN(EXAMPLE ABOVE).

 INPUT: A STRING OF NUMBERS 
 OUTPUT: HIGHEST AND LOWEST NUMBER (STRING VALUE)

 BRAINSTORM:
 - I SEE THAT SINCE ITS IN A STRING VALUE 
 - NEED TO CONVERT STRING TO AN ARRAY OF NUMBERS
 - ATTACH A .SORT() WHEN I HAVE ARRAY OF NUMBERS
 - SORT THEM TO HIGHEST TO LOWEST 
 - ONCE I HAVE THAT. I NEED TO ONLY HAVE AN ARRAY OF THE HIGEST AND LOWEST NUMBER FROM THAT ARRAY
 - AFTER HAVING THOSE TO NUMBERS. I NEED TO CONVERT THEM STRING OR SOME METHOD 
 THAT STRINGS THEM AND ALSO CREATES A SPACE BETWEEN 
 - AFTER CONVERTING THEM TO A STRING WITH A SPACE RETURN FOR FINAL ANSWER

 */