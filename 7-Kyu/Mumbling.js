/**
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

 

 */

// SOLUTION:
function accum(s) {
  let result = []
  let lowStr = s.toLowerCase()
  
  for(let i = 0; i < lowStr.length; i++) {
    let upperStr = lowStr[i].toUpperCase()
    
    for(let str = 0; str < i; str++) {
      upperStr += lowStr[i]
    }
    result.push(upperStr)
  }
  return result.join('-')
}


//=======================================================================

/**
PSUEDOCODE:

PROBLEM: I AM GIVEN A STRING VALUE AND I NEED TO RETURN A NEW STRING.
THE STRING IS CONSISTENT OF CAPITAL AND LOWER CASE. ONLY RETURN THE FIRST LETTER
AS A CAPITAL AND THE REST LOWER CASE. ONLY RETURN THE SAME CHARACTER AMOUNT
BASED ON THE INDEX # THE MAIN INPUT ELEMENT IS AT.

INPUT: STRING
OUTPUT: A NEW STRING WHERE THE FIRST LETTER IS A CAPITAL AND THE REST ARE LOWERCASE
BASED ON THE INDEX # THE MAIN ARGUMENT ELEMENT IS AT. 

BRAINSTORM:
- .SPLIT() THE STRING TO HAVE AN ARRAY LIST TO KNOW WHERE EACH ELEMENT 
IS PLACED
- Iterate thru the array check what index each element is on 
- based on what index it is return the first letter caps and the rest in lowercase
- store each new element into a new empty array list
- join them together with a dash "-"
- return result

questions: 
- How can I make the first letter cap and the rest lowercase ?

Reflection: 
I was not able to fully solve it on my own. I got very confused when 
it came to iterating. I did follow along a solution posted online and try
to go line by line and console.log what each line was doing.

Notes:
Based on my brainstorm I was very close in some ways. I did really struggle to implement
the code part especially when it came to iterating them and figuring out 
how I can increase each letter based on the index # the main input element
was in. Definitely was challenging but I was able to understand a solution.

The solution I found: https://losseff.xyz/katas/022-mumbling/javascript/
 */