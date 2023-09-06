/**
 
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) 
and After Earth (2013). Jaden is also known for some of his philosophy that he delivers 
via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. 
For simplicity, you'll have to capitalize each word, check out how contractions are expected 
to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

 */

String.prototype.toJadenCase = function () {
  let result = this;
  
  let list = result.split(' ')
  
  for(let i = 0; i < list.length; i++) {
    list[i] = list[i][0].toUpperCase() + list[i].substring(1)
  }
  return list.join(' ')
};

/** 
 
  Psudocode: 
  - I am giving a type STRING
  = I need to iterate thru each word and capitalize the first letter

  - in order to iterate a string I need to convert it to an array
  - I found to use .split() to convert a string into a array
  - after converting it into an array I need to iterate thru each index 
  = I need to get the first spot on each word index 
  - use .toUpperCase() to capitalize the first letter in each word 
  - I need to replace the capitalization letter with each word so we can have it like the answer 
  - I am going to .substring(1)
  - after having each word capitalized in the array I need to join the array index in order to 
  covert it into a string again 
  - use .join() array method to join the index of the array into a string again
  - after that return solution! 

 */