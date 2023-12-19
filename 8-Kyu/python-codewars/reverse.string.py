"""
PROMPT:

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow

"""

def solution(string):
    reverse_str = ''.join(reversed(string))
    return reverse_str

"""

Input: String
Output: String

Steps
- Create a new variable that stores result 
- Use .join() and '' to separate each character
- .reversed() function to reverse in order the string
- Return the variable the stores the result

"""