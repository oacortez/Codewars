/*

PROMPT:

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

*/


function friend(friends){
  let filterFriends = friends.filter((friends) => {
    if(friends.length === 4) {
      return friends
    }
  })
  return filterFriends
}


/**
 
input: array 
output: array

- I am given a array of list of names I need to filter out names that are longer length than 4 

steps:
- Need to filter array elements
- use method of .filter() to iterate thru the array
- do a conditional statement checking the lenght is exactly 4 
- use .lenght method to check amount of character
- if the element is exactly 4 return filter array elemnts
- return variable to get correct answer

 */