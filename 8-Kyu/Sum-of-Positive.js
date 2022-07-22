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

FINAL REFLECTION: 
  At first I wanted to use a "for loop" to iterate through my array and 
  eliminate all negative numbers. I found that I could sort them out then 
  iterate through them and be able to use an array method called ".pop()"
  to eliminate the last index of an array. The problem I faced was that 
  I was not able to use a "for loop" / could not figure out how to iterate 
  and create a logic to eliminate the negative numbers. 

  After a bunch of google and struggle I decided to use the .filter() method
  which filters out index values based on the conditional giving 
  after creating a logic to eliminate all negative numbers using .filter()
  I had to sum all the remaining values which were positives. I used .reduce()
  array method to have an initial value of zero and set my two parameters 
  which were my (previousValue, currentValue) inside my reduce method 
  I added my previousValue + currentValue which the final result would
  add all the positive values of the array and return the total sum.
*/