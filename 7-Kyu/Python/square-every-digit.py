'''

In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

'''

def square_digits(num):
    number_str = str(num)
    
    list = [int(digit) ** 2 for digit in number_str]
    
    result_string = ''.join(map(str, list))
    
    result_num = int(result_string)
    
    return result_num
  


'''
    Input: Number 
    Ouput: Number

    Steps:
    - Convert number to an array list 
    - Iterate through each index and multiply by 2(square)
    - Use .join() to concatenate the elements of the list into a string
    - Convert the string back to a number using Int
    - Return final result

'''