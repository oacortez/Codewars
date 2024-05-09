/**

Create a function which checks a number for three different properties.

is the number prime?
is the number even?
is the number a multiple of 10?
Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.

Examples
numberProperty(7)  // ==> [true,  false, false] 
numberProperty(10) // ==> [false, true,  true] 
The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:

numberProperty(-7)  // ==> [false, false, false] 
numberProperty(-10) // ==> [false, true,  true] 

*/


function numberProperty(n) {

  let answer = [];

  // Checking for prime numbers
  let isPrime = true;

  //Checking if the number is less than 2
  if(n < 2) {
    isPrime = false;
  }
  
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) {
      isPrime = false;
      break;
    } 
  }
  answer.push(isPrime);


  // This code checks if number(n) is divisible by 2 and has the remainder of 0 if so number is
  // even else if it has a remainder of 1 then its an odd number.
  if(n % 2 === 0){
    answer.push(true);
  } else {
    answer.push(false);
  }
  
  // This conditional checks if the number is a multiple of 10
  if(n % 10 === 0){
    answer.push(true);
  } else {
    answer.push(false);
  }

  return answer;
}

/**
 
Input: Number 
Output: Array of true and false values

- I need to check for three things
  - is the number prime?
  - is the number even?
  - is the number multiple by 10?

  - I will be using an conditional statement to check each question above 
  - Set up a empty array list to keep track of each answer(true or false values)
 */