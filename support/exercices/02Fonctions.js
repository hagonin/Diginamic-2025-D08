// Function declarations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed";
    }
    return a / b;
}
let exit = false;
// Main loop
while (!exit) {
    console.log("Simple Calculator");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");

    let choice = prompt("Enter your choice (1-5):");

    if (choice === '5') {
        exit = true;
        break;
    }

    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));

    switch (choice) {
        case '1':
            console.log(`Result: ${add(num1, num2)}`);
            break;
        case '2':
            console.log(`Result: ${subtract(num1, num2)}`);
            break;
        case '3':
            console.log(`Result: ${multiply(num1, num2)}`);
            break;
        case '4':
            console.log(`${divide(num1, num2)}`);
            break;
        default:
            console.log("Invalid choice");
    }
}