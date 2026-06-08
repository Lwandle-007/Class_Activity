// function greet(){
//     console.log("Hello world")
// }

// greet()

// function greet(name,surname){
//     console.log("Hello" + name + surname)
// }

// greet("Lwandle","Sitshi")

// function sumOfNumbers(x,y,z){
//     total = x + y + z

//     console.log(total)
// }
// sumOfNumbers(0,6,7)


// function sumOfNumbers(){
//     let num1 = 0
//     let num2 = 6
//     let num3 = 7

//     total = num1 + num2 + num3
//     console.log(total)
// }

// sumOfNumbers()
const prompt = require("prompt-sync")()


function area_weather(){
    // area_weather takes in user inputs, so any numbers - or postive
    // Line 8 takes in user input called temperature, since we want a number, we will wrap the prompt function with a Number() funtion in JS, this function converts the data type into an integer
    // when temperature is < 0, the output "Extremely cold"
    // when temperature is < 30, the output "It is warm"
    // when temperature is > 30, the output "It is hot"
    let temperature = Number(prompt("Enter the temperature: "))
    // Function is going to check if the input is <0
    if(temperature < 0){
        console.log("Extremely cold")
    }
    else if(temperature < 30){
        console.log("It is warm")
    }
    else if(temperature > 30){
        console.log("It is hot")
    }

}

area_weather()