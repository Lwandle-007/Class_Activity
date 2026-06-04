num1 = 6
num2 = 7

print(num1 + num2) 
print(num1 - num2) 
print(num1 * num2) 
print(num1 / num2) 
print(num1 // num2) 
print(num1 % num2) 
print(num1 ** num2) 


print(2 + 3 * 4)        # your guess: 14
print((2 + 3) * 4)      # your guess: 20
print(10 - 2 ** 3)      # your guess: 2
print(15 / 3 + 2 * 4)   # your guess: 21

price_per_item = 12.50
quantity = 4 
discount = 5 
vat = 1.15


total = ((price_per_item * quantity) - discount)  * vat
print("Total bill: R" + str(round(total,2))) 