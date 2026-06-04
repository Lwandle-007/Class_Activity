/* Grade Checker - Logic Testing Demo */

function checkGrade() {
    //Step 1; Get the value from the input field
    let input = document.getElementById("scoreInput").value;
    let score = Number(input); // Convert the input to a number

    // Step 2: Log the data we received

    // Step3 : validate the input
    if (isNaN(score) || score < 0 || score >100) {
        console.error("Invalid score!");
        return; // Exit the function if the score is invalid
    }

    // Step 4: Determine the grade
    let grade;
    if (score >= 80) {
        grade = "Distinction";
        console.log("Result:" + grade);
    } else if (score >= 70) {
        grade = "Merit";
        console.log("Result:" + grade);
    } else if (score >= 50) {
        grade = "Pass";
        console.log("Result:" + grade + " - just made it!");
    } else {
        grade = "Fail";
        console.log("Result:" + grade + " - better luck next time!");
    }

    //Step 5: Log the result to the table 
    console.log("--Score: " + score + " | Grade: " + grade + "--");
    document.getElementById("result").textContent = "Score: " + score + " | Grade: " + grade;
}

document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    checkGrade(); // Call the grade checking function
});