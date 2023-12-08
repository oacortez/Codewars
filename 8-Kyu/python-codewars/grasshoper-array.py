"""
PROMPT:

Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4

"""

def find_average(nums):
    #your code here
    starter = 0
    total_amount_in_array = len(nums)
    for number in nums:
       starter += number 
    if len(nums) == 0:
        return 0
    else:
        return starter / total_amount_in_array



    
"""

  Input: Array 
  Output: Number

  General thought: I am given an array type and I need to return the mean of the array elements 

  Steps:
- have a starter varible with a num of 0 
- loop thru the array elements 
- add each individual element with starter varible 
- get total amount of elements in array
- do conditional checking if there are 0 num in the array element if not return total mean
    - divide total sum of the array elements with total amount of elements in the array
- return answer

"""