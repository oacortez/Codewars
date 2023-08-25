/**

Promt: 

Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

 */

  
function sayHello( name, city, state ) {
const arrNames = name.join(' ')

return `Hello, ${arrNames}! Welcome to ${city}, ${state}!`
}

/**
 
Psuedocode:

- since name (param1) is in a array i need to covert it into a string
  - I used .join method with space to break down both indexes that were in the array
  - will return a string value

 */