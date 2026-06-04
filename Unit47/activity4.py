# Collect information
name = input("Your name: ")
age = int(input("Your age: "))
heigth = float(input("Your heigth in cm: "))
fav_num = float(input("Your favourite numbers: "))


# Calculate
birth_year = 2026 - age
heigth_metres = heigth/100
num_squared = fav_num ** 2


# Print profile
print("================================") 
print("       MY PYTHON PROFILE        ") 
print("================================") 
print("Name:         " + name) 
print("Age:          " + str(age)) 
print("Born in:      " + str(birth_year)) 
print("Height:       " + str(heigth_metres) + " m") 
print("Fav number:   " + str(fav_num)) 
print("Fav squared:  " + str(num_squared)) 
print("================================") 
