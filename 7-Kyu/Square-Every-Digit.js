/* 
DESCRIPTION:
Welcome. In this kata, you are asked to square every digit of a 
number and concatenate them.

For example, if we run 9119 through the function, 811181 
will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/


// ==============================================================


/**

PSUEDOCODE:

PROBLEM: I AM GIVEN AN INTEGER(NUMBER) AND I NEED TO 
SQUARE(NUMBER^2) EACH SINGLE ONE AND CONNECT THEM TOGETHER 

INPUT: INTEGER(NUMBER)
OUTPUT: INTEGER(NUMBER)

BRAINSTORM:

- WE NEED TO ITERATE THRU EACH NUMBER (LOOP)
- WITH EACH NUMBER IT LOOPS MULTIPLY BY 2 ( NUM X 2 )
- STORE EACH NUMBER TO AN EMPTY ARRAY 
- JOIN BACK ALL THE NEW NUMBERS WITHOUT COMMAS

notes: 
- I googled how to convert a number to an array list and found 
this: https://stackoverflow.com/questions/19182266/how-to-convert-an-integer-into-an-array-of-digits
The first answer shows how to convert a number to an array list using:
Array.from(), String(function), Number(function)

- After converting the number to an array list 
I iterate using .map() to get return a new array instance 

- Inside the .map() I am multiplying the element * element (num^2)
- After that I  use .join() to join all elements in the array
and also parsedFloat() because .join() converted them into String value

 */