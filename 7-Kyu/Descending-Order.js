/**
 DESCRIPTION:
Your task is to make a function that can take any non-negative integer as an argument and return it with 
its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

 */


// ======================================================================================================

/**

PSUEDOCODE 

PROBLEM: I AM GIVEN AN INTEGER AS A PARAM/ARGUMENT. I NEED TO REARRANGE THE GIVEN NUMBER
FROM HIGHEST TO LOWEST NUMBER.

INPUT: INTEGER
OUTPUT: INTEGER - HIGHEST NUM TO LOWEST NUM


BRAINSTORM:
- I NEED TO CONVERT NUMBERS TO STRING - .SPLIT()
- CREATE A NEW ARRAY INSTANCE TO MAKE EACH ELEMENT TO A NUMBER
- ONCE HAVING A NEW INSTANCE OF ARRAY OF NUMBERS USE - .SORT()
- SORT ELEMENTS FROM HIGH TO LOW 
- COMBINE ALL ELEMENTS IN ONE USING - .JOIN()
- RETURN RESULT

 */