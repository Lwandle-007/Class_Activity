# Creating and initializing an array (list in Python)
numbers = [10, 20, 30, 40, 50]

# Accessing elements
print(numbers[0]) # Output: 10

# Updating an element
numbers[2] = 99

# Inserting a new element
numbers.append(60)

# Removing an element
numbers.pop(1) # Removes element at index 1


# Looping through the array
for num in numbers:
    print(num)

# Gives you the amount of values in that list
print(len(numbers))