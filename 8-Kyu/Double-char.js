/**
 
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

 */

function doubleChar(str) {
let newStr = []
  
for (let i = 0; i < str.length; i++) {
  newStr.push(str[i].repeat(2))
}
    return newStr.join('')
}

/**\
 
PsuedoCode:

// - I am given a string 
// - I need to return each charather of the string twice 
// - example: hi -> hhii

- assign an empty array 
- loop over character 
- using the string method .repeat() - grab each index and attach to it 
  - str[index].repeat(2) - Repeat each index(character) twice (2)
- push each character into the empty array
- using .join() - to join each index together as a string
- return value for full result
 */