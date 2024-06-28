// Create Basic Math Operators
function add (a, b) {
    return a + b
};

function subtract (a, b) {
    return a - b
};

function multiply (a, b) {
    return a * b
};

function divide (a, b) {
    return a / b
}

// Declare Variables
let num_1;
let operator;
let num_2;


// Create General Operate Function
function operate (operator, firstNumber, secondNumber) {
    if (operator == "+") {
        return add(firstNumber, secondNumber)
    } 
    if (operator == "-") {
        return subtract(firstNumber, secondNumber)
    } 
    if (operator == "*") {
        return multiply(firstNumber, secondNumber)
    } 
    if (operator == "/") {
        return divide(firstNumber, secondNumber)
    } 

}

// Create functional display
let display = document.querySelector(".display");
let storedDisplay = display.textContent

// Buttons to Populate Display
let buttonsToDisplay = document.querySelectorAll(".digit_button, .operator_button")
buttonsToDisplay.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent == "0") {
            display.textContent = ""
        }
        display.textContent = display.textContent + button.value

    });

});




// 
