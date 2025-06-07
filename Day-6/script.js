// Declaring variables using var, let, const
var userName = "Rohit";
let age = 21;
const isStudent = true;

// Logging data types and variable values
console.log("Name:", userName); // String
console.log("Age:", age);       // Number
console.log("Is Student:", isStudent); // Boolean

// Demonstrating operators
let a = 10;
let b = 5;
console.log("Addition:", a + b);        // Arithmetic
console.log("Is a > b?", a > b);        // Comparison
console.log("a is 10 AND b is 5:", a === 10 && b === 5); // Logical

// Prompt and Alert
function greetUser() {
    let name = prompt("Enter your name:");
    if (name) {
        alert("Hello, " + name + "!");
        document.getElementById("output").innerText = `Welcome, ${name}!`;
    } else {
        alert("Name cannot be empty!");
    }
}
