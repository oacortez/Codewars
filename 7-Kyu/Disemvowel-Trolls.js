/* 
Trolls are attacking your comment section! A common way to deal with 
this situation is to remove all of the vowels from the trolls' comments, 
neutralizing the threat.Your task is to write a function that takes a 
string and return a new string with all vowels removed.

For example: 
the string "This website is for losers LOL!" 
would become -> "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// Solution: 

function disemvowel(str) {
  let newStr = [];
  
  let strParam = str.split('')
  let vowels = 'aeiouAEIOU'.split('')
  
  strParam.forEach(letter => {
     if(vowels.indexOf(letter) === -1) {
       newStr.push(letter)
     }
  })
  return newStr.join("")
}

// Run down of the code:
/* 

- line 16 we have a function name disemvowel(str) that takes a parameter that has a value of a string
- line 17 we have a variable name newStr and is assigned to an empty array
- line 19 & 20 we have setup two variables and they are assigned to a method .split()
  - .split() will convert the string value to an array
- line 22 is iterating thru each element of the strParam variable since its an array
- line 23 we have a conditional checking if our vowels array indexOf the search element
    - of each letter equals -1 which means "not present"
- that is going to check each vowels index of each letter and only 
  - returns the letters without those vowels
- line 24 pushes each element value to the empty array 
- line 27 converts the array into a whole string using .join() method
*/

// ====================================================================


/* 
PSUEDOCODE ⬇️

PROBLEM: CREATE A FUNCTION THAT TAKES A PARAMETER - STRING. THIS FUNCTION
NEEDS TO REMOVE ALL VOWELS - A,E,I,O,U BUT NOT Y. RETURN A NEW STRING 
WITH ALL THE VOWELS REMOVED. 

INPUT: STRING
OUTPUT: NEW STRING WITH VOWELS REMOVED

BRAINSTORM: 
- I might need to create a variable and start it off as a empty string
- create an array and assign them to vowels
- I need to iterate every single letter from the parameter 
- check the array of vowels with the parameter
- create a conditional checking if it contains any vowels
- remove every single vowel expect for "y" 
- return a new string 

- edge cases: 
- The parameter has upper and lower case string values
- need to convert all strings to lowercase to have no issues


Notes:
I Had to google a lot on this one I feel like I understood the problem 
but had more of an issue of how to implement methods and iterarions properly
to check each single letter that the vowels that had to be looked at.


*/