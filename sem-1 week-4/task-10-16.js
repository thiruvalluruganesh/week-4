# 10. FizzBuzz
print("FizzBuzz Output:")
for i in range(1, 51):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)

# 11. Reverse a String
def reverse_string(s):
    reversed_s = ""
    for char in s:
        reversed_s = char + reversed_s
    return reversed_s

print("\nReversed String:", reverse_string("hello"))

# 12. Palindrome Checker
def is_palindrome(s):
    return s == s[::-1]

print("\nPalindrome Check:", is_palindrome("madam"))

# 13. Prime Number Checker
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print("\nPrime Check:", is_prime(29))

# 14. Sum of an Array
def sum_array(arr):
    return sum(arr)

print("\nSum of Array:", sum_array([1, 2, 3, 4, 5]))

# 15. Maximum Number in an Array
def max_in_array(arr):
    return max(arr) if arr else None

print("\nMaximum Number in Array:", max_in_array([10, 20, 30, 5, 50]))

# 16. Array Filter (Odd Numbers)
def filter_odds(arr):
    return [num for num in arr if num % 2 != 0]

print("\nFiltered Odd Numbers:", filter_odds([1, 2, 3, 4, 5, 6, 7, 8, 9]))