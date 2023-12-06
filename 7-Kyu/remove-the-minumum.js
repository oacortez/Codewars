/** 
 
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. 
Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

 */

function removeSmallest(numbers) {
  const newArr = numbers.slice(0)
  let smallestVal = numbers.indexOf(Math.min(...numbers))
  newArr.splice(smallestVal, 1);
  return newArr
}

/*

Input: Array
Output: Array

General: I am given an array of integers and I need to return a array of integers that removed
the minimum value from the array - If there are two of the same value remove the one with the lower index element

Steps:
- Create a new array that is not mutated
- To find the
To find the index of the smallest value, you will need to call indexOf() on Math.Min() of the elements in numbers. Math.min() only accepts numbers as parameters. Hence, it's important to remember to use the spread operator to insert the elements of the array as parameters.
- Remove smallest num from the array using .splice()
- Return answer

*/