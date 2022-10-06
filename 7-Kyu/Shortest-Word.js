/** 
 PROMPT: 
 Simple, given a string of words, return the length of the shortest 
 word(s). String will never be empty and you do not need to account for 
 different data types.

 */

//  Solution ⭐️
 function findShort(s){
  let arrWords = s.split(" ");
  let sortWords = arrWords.sort((a, b) => {
    return  a.length - b.length 
  })
  return sortWords[0].length
}


/** 
PROBLEM: I am given a string of words, I need to find the shortest word and return the
length amount of that shortest word 

input: string of words
output: Number - the shortest word lenght found

brainstorm:
- convert string to an array
- sort the length of each element to lowest to highest 
- pick at index [0] and return the length of the shortest word

*/

