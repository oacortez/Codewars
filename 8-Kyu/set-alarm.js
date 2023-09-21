/**
 
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) 
which receives two parameters. The first parameter, employed, 
is true whenever you are employed and the second parameter, 
vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation 
(because these are the circumstances under which you need to set an alarm). 
It should return false otherwise. 

Examples:
employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false

 */


function setAlarm(employed, vacation){
  if(employed === true && vacation === true) {
    return false
  } else if (employed === true && vacation === false) {
    return true
  } else if (employed === false && vacation === true) {
    return false
  }
}

/**
 
Psuedocode:

- I am given a function with two given parameters
- I am parameters are two boolean values(true && false)
- based on the parameters I need to return a boolean value

Steps:
- create a if statement checking on the parameters values
- check if both( && operator) params are truth values return true 
- if else employee is true and vacation is false return true
- if else employee is false and vacation is true return false

 */