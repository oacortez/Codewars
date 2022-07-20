/* 
Create a function that takes an integer as an argument and returns 
"Even" for even numbers or "Odd" for odd numbers.
*/

// SOLVED SOLUTION ⬇️

function even_or_odd(number) {
  let math = number % 2;
  if(math === 0 || -0) {
    return "Even"
  } else {
    return "Odd"
  }
}


// =====================================================================================

// PSUEDO CODE --- 

// PROBLEM: RETURN A STRING OF "EVEN" OR ODD BASED ON THE NUMBER INPUTED AS AN ARGUMENT
// INPUT: A NUMBER 
// OUTPUT: STRING 

// PLAN:
// CREATE A CONDITIONAL (IF ELSE) -- 
// CALCULATE -- HOW TO DETERMINE IF THE INPUT NUMBER IS EVEN OR ADD
// WE ARE GOING TO USE SOME SORT OF MATH

// GOOGLED: "how to calculate a odd or even"
// If a number is evenly divisible by 2 with no remainder, then it is even. 
// You can calculate the remainder with the modulo operator % like this num % 2 == 0. 
// If a number divided by 2 leaves a remainder of 1, then the number is odd


// note: 
// * Did not think of edge case ex; -0 or -1 
// * I covered it in my conditional