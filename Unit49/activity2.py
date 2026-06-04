# Part A: Conceptual Understanding

# A function is a reusable block of code that performs a specific task. It allows you to break down your program into smaller, manageable pieces, making it easier to read and maintain. Functions can take input parameters, perform operations, and return output values.

# Creating a function means defining it, while calling a function means executing the code within that function. When you call a function, you can pass arguments to it, which are the values that the function uses to perform its task. The function can then return a value back to the caller.

# Part B: Practical Application

def calculate_total(price, quantity):
    total_cost=  price * quantity
    return total_cost

result = calculate_total(50, 3)

print("The total cost of items purchased is", "R", result)

