/**
 
PROMPT: 

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

 */

function maskify(cc) {
  
  const arrString = cc.split('');
    
  if(arrString.length > 4){ 
    for(let i = 0; i < arrString.length - 4; i++) {
        arrString[i] = '#'
      }
      return arrString.join('')
    } else {
      return cc
  }
}


/**
 PSUEDOCODE:

 Problem: I am given a string of numbers where I need to change all the charaters to a symbol and leave the last 4 characters unchanged.

 input: String
 output: String

 Steps:

- Need to covert string into indexes - Array 
- if the array length is more than 4 then 
- loop through the array - for loop
- Loop through only the characters remaining in the array except the last 4 elements
- once having the the elements remaining reasing the elements with the character of '#'
- once they are resign use the array method .join() to convert it back into a string 
- at the end have an else return regular value if the length is less then or equal to 4

 */