// Fetching HTML elements to be manipulated by DOM
const inputElement = document.getElementById("enter-radius");
const buttonElement = document.getElementById("calculate-area");
const headerElement = document.getElementById("area-size");
const listElement = document.getElementById("calculated-areas");


//Array that stores circle radius inputs

const circleRadii = [];


function check_circles() {
    // getting the input 
    let radius = Number(inputElement.value)

    // store the cricle areas in your array
    circleRadii.push(radius)

    // calculate the area of each input radius
    let circleArea = circleRadii.map( function(radius){ 
        return Math.PI * Math.pow(radius, 2)
    }
)

    circleArea.forEach(function(area){        
        if (circleArea === 5){
            console.log("You have reached max calculations")
            headerElement.innerHTML = "You have reached max calculations"
        }
        else if (area < 10){
            console.log("Area is small")
            headerElement.innerHTML = "Area is small"

        }
        else if (area < 30){
            console.log("Area is medium")
            headerElement.innerHTML = "Area is medium"
        }
        else if (area >= 10){
            console.log("Area is large")
            headerElement.innerHTML = "Area is large"
        }

})
}
    console.log(radius, circleRadii)




// Trigger the button to load 
buttonElement.addEventListener("click", check_circles)