/* 

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/

//SOLUTION:

function makeNegative(num) {
  //   let checkNum = Math.sign(num)
    return -Math.abs(num)
  }


// psuedo:
/* 

Notes: I got to learn about Math.sign() & Math.abs()
- Math.sign() - checks if a number is positive or negative - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
- Math.abs() - converts a negative number to positive and converts a positive to negative -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
- https://stackoverflow.com/questions/4652104/convert-a-negative-number-to-a-positive-one-in-javascript

I googled:
- how to check if a number is positive or negative in js
- Math.abs()

*/