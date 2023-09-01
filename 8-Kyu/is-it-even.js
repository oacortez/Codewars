/**
 
 this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

 */


function testEven(n) {
  if(n % 2 == 0 ) {
    return true
  } else {
    return false
  }
}

/**

  PSEUDOCODE:
  - What am I doing?
    * Need to check if number given is even
  - steps:
  - create a if statement checking if number is even
    - if number is even return true else false
  - inside conditional check number using modulo(%)
 */