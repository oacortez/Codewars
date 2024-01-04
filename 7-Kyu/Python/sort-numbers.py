"""

PROMPT:

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1,2,3,10,5]) 
  - should return [1,2,3,5,10]
solution(None) 
  - should return []

"""


def solution(nums):
  if nums == None or nums == []:
        return []
  sort_nums = sorted(nums)
  return sort_nums


"""

General Though: I am given a array with numbers if array has numbers sort them in order from lowest to highest
else if array is empty, None, or is an empty array([]) then return an empty array.

Input: Array that cotains numbers
Output: sorted array of numbers(lowest to highest) or empty array([]) based on the parameters parameters given


Steps:
- create a conditional 
- check if param is = to None OR param = to an empty array([])
- if param is either or return an empty array
  - Else   
    - create a variable
    - use special function sorted() to sort array of numbers from lowest to highest
    - return new variable with sorted numbers
"""