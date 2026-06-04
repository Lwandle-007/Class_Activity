name = input("Enter your name: ") 
colour = input("What is your favourite colour? ") 

print("Hello " + name + "! Nice to meet you.") 
print(name + " loves the colour " + colour + ".") 

birth_year = int(input("What year were you born? ")) 
current_year = 2025 

age = current_year - birth_year 
print("You are approximately " + str(age) + " years old.") 



item = input("Item name: ") 
price = float(input("Item price (R): ")) 
vat = price * 0.15 
total = price + vat 

print("------- RECEIPT -------") 
print("Item:    " + item) 
print("Price:   R" + str(price)) 
print("VAT 15%: R" + str(round(vat, 2))) 
print("Total:   R" + str(round(total, 2))) 
print("-----------------------") 