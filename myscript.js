// Create Basic Math Operators
function add (a, b) {
    return Number(a) + Number(b)
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
    if (operator == "x") {
        return multiply(firstNumber, secondNumber)
    } 
    if (operator == "÷") {
        return divide(firstNumber, secondNumber)
    } 

}

// Create functional display
let display = document.querySelector(".display");
let storedDisplay = display.textContent;
let splitDisplay;

// Buttons to Populate Display
let buttonsToDisplay = document.querySelectorAll(".digit_button, .operator_button")
buttonsToDisplay.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent == "0") {
            display.textContent = ""
        }
        display.textContent = display.textContent + button.value
        storedDisplay = display.textContent



    // Make the calculator work behind the scenes
    // Store first and second value
    let pattern = /([+\-x÷])/;
    
    splitDisplay = (storedDisplay.replace(/\s/g, "")).split(pattern);
    console.log(splitDisplay)
    });

});

    



// Create function behind equals button
let equalsButton = document.querySelector(".equals_button");
equalsButton.addEventListener("click", () => {
    let answer  = operate(splitDisplay[1], splitDisplay[0], splitDisplay[2])
    console.log(answer)
    display.textContent = answer
});

// Create function behind Clear Button
let clearButton = document.querySelector(".clear_button")
clearButton.addEventListener("click", () => {
    display.textContent = ""

});
