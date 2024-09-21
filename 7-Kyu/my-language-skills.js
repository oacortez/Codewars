// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
  // const res = Object.keys(results)
  // console.log(res)

  const res = Object.keys(results).filter(key => results[key] >= 60);
  return res
}

/*

Input: Object
Output: Array(Greatest to Lowest)

- First since our problem is an object with have to convert it to a Array using
  -Object.keys() - This converst the key object into a set of array with keys

- Now that we have a set of keys arrays we need to filter them by their values
  - Filter() 
- Filtering will we need to go more deeper
  - results[objKey] >= 60 - This piece of code enters into the key and its value 
  which is the numbers from each key. It also checks if each key value is equal or more than 60

- Next we will need to sort out the key values from higest to lowest
  - sort() will work to make sure it sorts key values to highest to lowest 

- Finally we will need to return the stored variable we saved it in to get the test approved.

*/