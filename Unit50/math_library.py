import math

def check_circles():
   
    for radius in range(1, 6):
      
        area = math.pi * (radius ** 2)

        print("Result", round(area,2))

        if area < 10:
             print("Small")

        elif area < 25:
            print("Medium")

        else:
             print("Large")

        print()

check_circles()

    