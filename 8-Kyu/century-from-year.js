/**
 
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

 */

function century(year) {
  return Math.ceil(year/100)
}

/*

Problem: I am given a whole number(year) and need to convert it to another number
that is based in century

Input: Number
output: Number

Steps:
- Divide (/) the year(number) with century(100)
  - because there is 100 years in one century
- After dividing the number with the century I need to look up a method that can round a whole number in javascript
- Look up math methods on mdn 
- Use Math.ceil()
  What is Math.ceil() ?? - Static method always rounds up and returns the smallest integer greater than or equal to a given number.

*/