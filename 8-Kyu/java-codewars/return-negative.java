/**
 
PROMPT:

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
Kata.makeNegative(1);  // return -1
Kata.makeNegative(-5); // return -5
Kata.makeNegative(0);  // return 0
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

 */


 public class Kata {

  public static int makeNegative(final int x) {
    
    return x > 0 ? 0 - x: x;
    
  }
  
}

/**
 Input: Number
 Output: Negative number

 Steps:
 - Create a conditional to check if the number(x) is more than zero
 - If x is more than zero then return 0 - x
 - else return x 

PS: I had to google this answer because I could not just return -x it did pass a couple test case but not all
so I am guessing I had to check if the number is more than zero in order to by pass test case?

 */