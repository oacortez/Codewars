/**
 
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present)

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

 */


function countSheeps(arrayOfSheep) {
   // TODO May the force be with you
   let counter = 0; //starting point 
  
   arrayOfSheep.forEach(index => {
     if(index === true) {
       counter += 1
     }
   })
   return counter
}

/**
 
Psuedocode:

- I am given an Array 
- need to iterate through each index of the array 
- need to check if each index of the array is true 
- need a counter starting from 0 -- This will be our answer
- in the loop when checking if true then I need to increase the counter by 1(counter += 1)
- Return answer

Ps: I learned about looping array index using .forEach 

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */