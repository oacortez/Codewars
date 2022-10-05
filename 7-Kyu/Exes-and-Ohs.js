// Prompt: 

/** 

Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */


/** 
Problem: I am given a string and I need to check if has the same amount of "x" & 'o'. 
if they have the same amount return True else return false. if there are no 'x' & 'o' I will return true
else return false - Check example if needed

Input: string's 
output: boolean(true or false)


Brainstorm: 

- I need to convert all string values to lowercase - .toLowerCase()
- Have a count value for x & o that start at zero 
- I need to iterate thru each string value and check if it's an 'x' or 'o'
- Create a conditional based on the count value
*/ 


 */