// Very simple, given an integer or 
// a floating-point number, find its opposite.

// Examples:
// 1: -1
// 14: -14
// -34: 34

// ===================================================================

/* 
PSUEDOCODE:

PROBLEM: I AM GIVEN A NUMBER VALUE AS EITHER POSITIVE OR NEGATIVE
AND I NEED TO RETURN THE OPPOSITE OF THE NUMBER IF ITS NEGATIVE RETURN POSITIVE
IF ITS NEGATIVE RETURN POSITIVE

INPUT: INTERGER OR FLOATING NUM (POSITIVE OR NEGATIVE)
OUTPUT: INTERGER OR FLOAT NUM BUT OPPOSITE VALUE OF THE INPUT 
-- IF ITS NEGATIVE RETURN POSITIVE
-- IF ITS POSITIVE RETURN NEGATIVE

STEPS:
- I FIRST NEED SOMEWAY TO CHECK IF THE INPUT VALUE IS POSITIVE OR NEGATIVE
- CREATE A CONDITIONAL TO CHECK IT 
- INSIDE THE CONDITION IF ITS MET RETURN THE OPPOSITE VALUE

GOOGLE:
Math.sign -- Built in function ⬇️

// Return Value: The Math.sign() function returns five different values as described below:
// It returns 1 if the argument passed is a positive number.
// It returns -1 if the argument passed is a negative number.
// It returns 0 if the argument passed is a positive zero.
// It returns -0 if the argument passed is a negative zero.
// If none of the above cases match,it returns Nan.


Math.abs() -- Built in JS function ⬇️

The Math.abs() function returns the absolute value of a number. 
That is, it returns x if x is positive or zero, and the negation of x if x is negative.
** TO CONVERT POSITIVE TO NEGATIVE USING Math.abs() 
EX: -Math.abs(10) 
    Returns: -10
*/