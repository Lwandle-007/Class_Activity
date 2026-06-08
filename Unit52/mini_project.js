// creating a simple Javascript console program that calculate learners final results based on marks entered
const prompt = require("prompt-sync")()

// declare user input using prompt() for console
let learnerName = prompt("Enter Learner Name: ")
let assessmentMark = prompt("Enter Learner Assessment Mark (out of 100): ")
let results

// decision making logic with conditional statements
if (assessmentMark >= 50){
    results = "Pass"
}
else {
    results = "Fail"
}

//output
console.log("Learner Name: ", learnerName)
console.log("Mark Obtained: ", assessmentMark)
console.log("Final Result: ", results)