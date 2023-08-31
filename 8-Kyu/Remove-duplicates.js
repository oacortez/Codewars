/** 
 
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:
Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

 */


function distinct(a) {
  const newArr = [...new Set(a)];
  return newArr
}

/**
 
PSEUDOCODE: 

* What do I need to do?
  - I am given a array with numbers some of the numbers are duplicates 
  - my objective is to return the same array but without duplicate numbers

  - Using the Set() method: 
  The Set() method creates a new set from an array. 
  A set is a collection of unique values, so any duplicates in the array 
  will be removed. To return a new array with no duplicates, you can use 
  the Set() method to convert the array to a set and then convert the set 
  back to an array
  
  - I also used the spread operator for the new array
  - 
 */