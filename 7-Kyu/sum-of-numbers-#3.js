/**
 
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.

 */

function getSum(a, b)
{
  if(a === b) {
    return a
   } else {
    let sum = 0;
    let lowestNum = Math.min(a, b);
    let highestNum = Math.max(a, b);
    for(let i = lowestNum; i <= highestNum; i++) {
      sum += i
    }
    return sum;
   }
}


/**
 
Input: Numbers(negative or positive)
Output: Number 

- First I notice that if the two arguments are the same then return the same number
  - make an conditional comparison to check if both arguments are the same 
  - if so return the same number
- else create a variable starter of zero that will be used for our answer
- create two variables one lowest and highest using Math.min/max()
- loop over the number and add sum to i variable 
- return sum to get final answer.


 */