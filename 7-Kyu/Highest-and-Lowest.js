/**
 
DESCRIPTION:
In this little assignment you are given a string of space separated numbers, and have to return the 
highest and lowest number.

Examples:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */

// Result: 
function highAndLow(numbers){
  let highAndLowVal = []
  let orgnzArr = numbers.split(' ')
  let strToNum = orgnzArr.map(str => {
    return Number(str)
  })
  const sortNums = strToNum.sort((a, b) => {
    return b-a
  })
    
 let highestVal = highAndLowVal.push(sortNums[0])
 let LowestVal = highAndLowVal.push(sortNums[sortNums.length - 1])
 

 let strArr = highAndLowVal.toString().split(' ').join('')
 
 // Creates a space in the middle of the string
 let result = strArr.replace(/,/g, ' ')
 
 return result;
  
}


// =====================================================================================================


/**
 PSUEDOCODE

 PROBLEM: I AM GIVEN A STRING OF NUMBERS. I NEED TO RETURN A STRING OF THE HIGHEST NUMBER AND THE LOWEST 
 NUMBER BACK WITH A SPACE IN BETWEEN(EXAMPLE ABOVE).

 INPUT: A STRING OF NUMBERS 
 OUTPUT: HIGHEST AND LOWEST NUMBER (STRING VALUE)

 BRAINSTORM:
 - I SEE THAT SINCE ITS IN A STRING VALUE 
 - NEED TO CONVERT STRING TO AN ARRAY OF NUMBERS
 - ATTACH A .SORT() WHEN I HAVE ARRAY OF NUMBERS
 - SORT THEM TO HIGHEST TO LOWEST 
 - ONCE I HAVE THAT. I NEED TO ONLY HAVE AN ARRAY OF THE HIGEST AND LOWEST NUMBER FROM THAT ARRAY
 - AFTER HAVING THOSE TO NUMBERS. I NEED TO CONVERT THEM STRING OR SOME METHOD 
 THAT STRINGS THEM AND ALSO CREATES A SPACE BETWEEN 
 - AFTER CONVERTING THEM TO A STRING WITH A SPACE RETURN FOR FINAL ANSWER

 NOTES: 
 - I WAS ABLE TO CONVERT THE STRING TO AN ARRAY OF STRINGS TO START OF  WITH USING .SPLIT(' '). NEXT I HAD 
 TO CONVERT OF STRING VALUES OF THAT ARRAY TO NUMBERS. I USED .MAP() TO CREATE A NEW INSTANCE OF AN ARRAY
 INSIDE THAT METHOD I RETURN AN Number() FUNCTION TO CONVERT EACH STRING ELEMENT TO AN INTEGER VALUE. NEXT 
 I SORTED THE ARRAY VALUE USING .SORT((A-B) => B-A) ON THE ARRAY. ONCE I GOT THE HIGHEST VAL AND LOWEST VAL
 I CREATED AN EMPTY ARRAY AND .PUSH() THE HIGHEST VAL AND LOWEST VALUE. IN THE NEW ARRAY. I HAD TO CONVERT
 THEM TO STRINGS AGAIN WITH A SPACE IN THE MIDDLE. I USED A toString() METHOD TO CONVERT THEM TO A STRING
 AND ATTACH .JOIN(' ').JOIN('') TO FIRST CREATE A ARRAY WITH OF STRINGS AND JOIN THEM TO CREATE A WHOLE 
 STRING VALUE AGAIN. I RAN TO AN ISSUE WHERE I NEEDED TO CREATE A SPACE AND ADDED A .REPLACE(/,/g, '  ') TO CREATE 
 A SPACE IN THE MIDDLE OF THE STRING.
 */