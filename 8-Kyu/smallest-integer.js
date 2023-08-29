/** 
 
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
 
 */

class SmallestIntegerFinder {
  findSmallestInt(args) {
    const lowestNum = args.sort((a, b) => a - b);
    return lowestNum[0]
  }
}



/**
 
PSUEDOCODE:
  
  * I need to find the smallest number in the array including negative
  
  - First I need to sort out the array smallest to highest 
  - I will use the method called .sort()
    - What this method does is sort the indexes of the array and you can sort them highest to lowest or vice versa
  
 */