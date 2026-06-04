# Example 1: Use the random Module

import random
number = random.randint(1,10)

print("Random number:", number)

# Example 2: Dice roll

import random 
dice = random.randint(1,6)
print("You rolled", dice)

# Example 3: use the math module 

import math 
answer = math.sqrt(25)
print("Square root od 25 is:", answer)

# Example 4: Rounding up and down

import math 
print(math.ceil(4.2)) # up
print(math.floor(4.8)) # down

# Example 5: use two modules 

import math
import random

number = random.randint(1, 100)
print("Random number:", number )
print("Square root of the random number is:", math.sqrt(number))

# Example 6: own module
import calculator
sum_result = calculator.add(5, 3)
multiply_result = calculator.multiply(5, 3)

print("Addition result:", sum_result)
print("Multiplication result:", multiply_result)