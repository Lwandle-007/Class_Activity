function classifyTemp() {
    let input = document.getElementById("tempInput").value;
    let temperature = Number(input);
    

    if (isNaN(temperature) || temperature < -100 || temperature > 100) {
        console.error("Invalid temperature!");
        return; // Exit the function if the temperature is invalid
    }


    let classification;
    if (temperature <= -5) {
        classification = "Freezing";
        console.error("Freezing");
    } else if (temperature <= 10) {
        classification = "Cold";
        console.log("Cold");
    } else if (temperature <= 20) {
        classification = "Warm";
        console.log("Warm");
    } else if (temperature <= 35) {
        classification = "Hot";
        console.log("Hot");
    } else {
        classification = "Hot";
        console.log("Hot");
    }

    console.log("Temperature: " + temperature + "°C | Classification: " + classification);
    document.getElementById("result").textContent = "Temperature: " + temperature + "°C | Classification: " + classification;
}

document.getElementById("tempForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    classifyTemp(); // Call the temperature classification function
});