"""

PROMPT:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

"""

def get_count(sentence):
    vowels = "aeiouAEIOU"
    count = 0

    for char in sentence:
        if char in vowels and char != 'y':
            count += 1

    return count



"""
Input: String
Output: Number

Steps:
- Have a variable that holds vowels of lower and upper case letters
- Have a starting counter of zero(0)
- Iterate through each letter in the input string
- Check if the character is a vowel and not equal to 'y'
- Increment the count if the condition is met
- Return the final count of vowels (excluding 'y') in the input string

"""