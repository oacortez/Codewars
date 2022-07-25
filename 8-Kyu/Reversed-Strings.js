// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// Solution:


// ===================================================================


// PSUEDOCODE:

/* 

  WHAT AM I TRYING TO SOLVE? : I AM GIVEN A STRING INPUT AND I NEED TO 
  RETURN IT REVERSED


  INPUT: STRING 
  OUTPUT: STRING 


  STEPS: 

    1. FIGURE OUT IF THERE ARE ANY STRING METHODS THAT I CAN USE 
    2. I NEED TO MAKE THE FIRST WORD IN THE STRING THE LAST 
    3. I RETURN TO MAKE THE LAST WORD TO FIRST 
    4 I BASICALLY NEED TO "FLIP" THE STRING


  GOOGLED: 
  - String methods 
  - .reverse() MDN 
  - how to join a array and turn it into a string

  Conclusion: 
  - I first had to google string methods and see if there are any that 
  can reverse the strings but, There are no methods that do that. I did 
  find a .reverse() method for arrays. 

  - First I needed to find a string method that converts each word into a single
  string and returns it into a array. str.split() does exactly this. After
  console login my .split and saw it return an array. I attached an .reverse.() to my array
  which did reverse my first character to last and my last to first. After 
  I ran into an issue on how to return it together as a string. Thats where 
  I found the .join('') method which creates and returns a new string 
  by concatenating all of the elements in an array 
  (or an array-like object), separated by commas or a specified 
  separator string. If the array has only one item, then that item 
  will be returned without using the separator.

*/