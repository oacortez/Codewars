/* 
Instructions: You get an array of numbers, 
return the sum of all of the positives ones.

Example: [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// Final Result:
function positiveSum(arr) {
  
  let filterNegatives = arr.filter(num => num > -1)
  console.log(filterNegatives)
  
  let result = filterNegatives.reduce((a, b) => {
     return a + b;
  }, 0)
  
  return result;
}




// ---------------------------------------------------------------------

// PSUEDOCODE:

// PROBLEM:
/* 
  I AM GIVING AN ARRAY AND I NEED TO RETURN A TOTAL SUM OF POSITIVE NUMBERS,
  THAT ARE IN THAT ARRAY. IF THERE ARE NO POSITIVE NUMBERS IN THAT ARRAY I STILL NEED TO RETURN 
  SOMETHING WITCH WILL BE A DEFAULT NUMBER OF 0
*/

//PLAN:
/* 
  INPUT: ARRAY OF NUMBERS
  OUTPUT: A TOTAL SUM OF POSITIVE NUMBER FROM ARRAY OR 0 IF THERE ARE NO POSITIVE NUMBERS TO ADD

  STEPS: 
    - I NEED TO CREATE A VARIABLE NAME TOTAL AND ASSIGN IT TO A VALUE OF 0;
    - I TO ITERATE THROUGH THE ARRAY TO CHECK EACH INDEX AND SEE IF THE NUMBER IS POSITVE OR NEGATIVE
    - NEED TO CREATE A CONDITIONAL INSIDE MY ITERATION TO CHECK IF THERE ARE POSITIVE
    - IF THERE ARE POSITIVE NUMBERS THEN ADD IT TO THE "TOTAL" (+=)VARIABLE 
    - ONCE DONE RETURN "TOTAL VARIABLE"
    - IF THERE ARE NO POSITIVE NUMBER ONCE IN THE CREATE AN "ELSE"
    - RETURN TOTAL IF THERE ARE NO POSITIVE SINCE IT HAS A VALUE OF 0


GOOGLED: 
  - how to add all numbers in an array javascript?
  - sort array
  - how to remove negative numbers in array list js?
  - how to iterate through an array in javascript

  
*/