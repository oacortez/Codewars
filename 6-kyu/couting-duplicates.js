/**

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

 */

function duplicateCount(text){
  //Covert string into lowercase strings. 
   text = text.toLowerCase();

   // Store counter if each alphanumeric character
   let counter = {};

  //loop over each string character
  for(let i = 0; i < text.length; i++) {
    let str = text[i];

    //check if the string contains alphanumeric characters
    if(counter[str]) {
      counter[str]++
    } else {
      counter[str] = 1;
    }
  }
}

/**
 
Input: String
Output: Number(how many characters are duplicated)

Psuedo:
- Store a counter to add when finding duplicates - counter will start at 0
- make all strings to lowercase using .toLowerCase()
- First check if the input has any strings(ex: "hi")
- loop through all strings
 */