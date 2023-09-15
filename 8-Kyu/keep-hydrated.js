/**
 
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, 
he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres
Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

 */

function litres(time) {
let num = time * 0.5
let result = Math.floor(num)
    
  if(result >= 1) {
    return result
  } else {
    return 0;
  }
}


/**
Pseudocode:
- I am given a number 
  - I need to return a value based on my math equation 
- given the time in hours(let time = number ) and you need to return 
the number of litres(0.5) Nathan will drink, rounded to the smallest value.

steps:
- I need to multiply time * 0.5(liters) and store it in a variable
- Need to round number if its less than 0.5 on any number round to 0 
  - Used Math.floor()
- check if number is more or equal to 1
  - return result number 
  - else return 0

*/