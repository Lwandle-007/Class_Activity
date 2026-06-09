let marks = [50,40,30,80]

// filter syntax
// arrayName.method()

// Store the results 
// Declare a variable 
// Stores the array method performed on the array
// filter (function(item)){
// return something})
// let filterMark = marks.filter(function(mark)){
// return mark =>50})
// let filteredMark = mark.filter(function(mark){
//     return mark => 50
// });

// Apply filter here

// marks.filter(mark => {
// if(mark >= 50 ){
//         console.log("pass")
//     }
// else{
//         console.log("fail")
// }
// })

/* 

start with keyword "for"
for(declare a counter variable ; specify range coutervariable<range;increment){
action 
}

eg :

for (var mark; mark < marks.length; mark++){

if(marks[mark] >= 50 ){
        console.log("pass")
    }
else{
        console.log("fail")
}
}
}

*/

// the forEach Loop

// Syntax :

/* 
say to  yourself "For Each item in the array, do something"

arrayName.forEach(funtion(items)){
do something
})
*/

// marks.forEach(mark => {
//     console.log(mark)
// })

// marks is the name of the array
// forEach() is the builtin array method which functions like a for loop
// marks.foreach() - Go through every item in the marks array 
// function(mark) - JS places a value for the perimeter called mark,here the 
// valye of the array is extracted for you you dont need to use box notation, no need for maks[marks]
// console.log prints the vslues of the index not the index.

marks.forEach(mark => {
    if(mark >= 50 ){
            console.log(mark + " " + "- pass")
        }
    else{
            console.log(mark + " " + "- fail")
    }
    }
)

// forEach(parameters)
// forEach is a built in funtion that takes in a function mark =>
// function(mark){
// reference mark because that is the parameter of the working function in the for Each loop 
// }

// include 
// speacified item

// syntax : arrayName.includes("Value/Letter")

names = ["Londeka", "Clinton Khoza", "Devania Chetty"]

let withLetterE = names.includes("Lwandle")

console.log(withLetterE)

// find()

// Built in array methods that returns a value in specified item

let findValue = names.find(name =>{
    // both methods can be used its the same thing 
    return name == "Londeka"            
    return name.includes("Londeka")
}
)

// Array methods can be Classified in category

/* 

1. Methods for sorting / arranging data eg: sort()
2. Methods for selecting data : Filter
3. Methods for changing array items : Map()
4. Methods that combine array  items into one value : reduce()
5. Array methods for checking if a value can be found in an array : includes
6. Methods that select a specific value : find()

*/