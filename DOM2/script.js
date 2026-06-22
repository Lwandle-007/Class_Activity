// Fetching HTML elements to be manipulated by DOM
 
const inputElement = document.getElementById("enter-name");
const headerElement = document.getElementById("greeting");
const greetButton = document.getElementById("greet")
 
 
 
 
function greet(name){
    name = inputElement.value
    // populate the header element with the greeting
    headerElement.textContent = `Hello ${name}, welcome to DOM`
}
 
 
// Event listener to trigger the greet function
greetButton.addEventListener("click", greet)
 
