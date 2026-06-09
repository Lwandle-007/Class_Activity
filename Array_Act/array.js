// Part 1: Creating and accessing array elements
let xboxgames = [true, "Halo", "Forza", false, 1];
console.log(xboxgames);

// Part 2: Accessing array elements
//what is at index 0?
console.log("What is at index 0?", xboxgames[0]);

//what is at index 2?
console.log("What is at index 2?", xboxgames[2]);

//what is at the last index?
console.log("What is at the last index?", xboxgames[xboxgames.length - 1]);

//what is the index of "Halo"?
console.log("Find the index of your word?", xboxgames.indexOf("Halo"));

// Part 3: Debugging arrays
console.log("Debugging arrays:");

let fruits = ["apple", "banana", "orange"];
console.log("Debugging fruits array:", fruits);
console.log("Find the index of your word?", fruits.indexOf("orange"));
