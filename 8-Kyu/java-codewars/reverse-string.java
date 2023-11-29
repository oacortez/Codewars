/**
 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

 */

 public class Kata {

  public static String solution(String str) {
    // Your code here...
    String result = new StringBuffer(str).reverse().toString();
     return result;
  }

}

/**
 
Input: String
Output: String 

Steps:
- create a new variable the stores the solution
- use StringBuffer to manipulate the string 
- .reverse() to reverse the string
- .toString to convert it back to a string value again
- return new variable where you manipulated the value from

 */