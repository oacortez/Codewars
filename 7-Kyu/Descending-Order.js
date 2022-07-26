/**
 DESCRIPTION:
Your task is to make a function that can take any non-negative integer as an argument and return it with 
its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

 */

//SOLUTION:
function descendingOrder(n){
  let numToStr = `${n}`.split('')
  
  let strToNum = numToStr.map(num => {
    return Number(num)
  })
  
  let highToLow = strToNum.sort((a, b) => {
    return b-a;
  })
  
  return Number(highToLow.join(''))
}

// ======================================================================================================

/**

PSUEDOCODE 

PROBLEM: I AM GIVEN AN INTEGER AS A PARAM/ARGUMENT. I NEED TO REARRANGE THE GIVEN NUMBER
FROM HIGHEST TO LOWEST NUMBER.

INPUT: INTEGER
OUTPUT: INTEGER - HIGHEST NUM TO LOWEST NUM


BRAINSTORM:
- I NEED TO CONVERT NUMBERS TO STRING - .SPLIT()
- CREATE A NEW ARRAY INSTANCE TO MAKE EACH ELEMENT TO A NUMBER
- ONCE HAVING A NEW INSTANCE OF ARRAY OF NUMBERS USE - .SORT()
- SORT ELEMENTS FROM HIGH TO LOW 
- COMBINE ALL ELEMENTS IN ONE USING - .JOIN()
- RETURN RESULT


NOTES: 
I WAS ABLE TO CONVERT THE NUMBER TO A STRING USING A ES6 INTERPOLATION 
AND ATTACHED A .SPLIT() TO CONVERT EACH ELEMENT TO AN ARRAY LIST.
AFTER THAT I NEEDED TO CONVERT THE STRING ELEMENTS TO NUMBERS. I USED A MAP
AND ATTACHED A NUMBER() FUNCTION TO RETURN A NEW ARRAY LIST INSTANCE AS 
INTEGER VALUES. ONCE I HAD THE NEW ARRAY I USED A .SORT() TO SORT EACH
ELEMENT FROM HIGHEST TO LOWEST. FINALLY I RETURN MY SORTED ELEMENTS AND 
HAD USE A NUMBER() FUNCTION INSIDE I ATTACHED A .JOIN TO JOIN ALL ELEMENTS TOGETHER
AS A NUMBER VALUE.

 */