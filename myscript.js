// Create Basic Math Operators
function add (a, b) {
    return Math.round((Number(a) + Number(b))*1000)/1000
};

function subtract (a, b) {
    return Math.round((a - b)*1000)/1000
};

function multiply (a, b) {
    return Math.round((a * b)*1000)/1000
};

function divide (a, b) {
    if (b == 0) {
        return "Error: Cannot divide zero"
    } else {
    return Math.round((a / b)*1000)/1000
    }
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
let pattern;
let answer;

// Digit Buttons to populate display
let digitToDisplay = document.querySelectorAll(".digit_button")
digitToDisplay.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent == "0") {
            display.textContent = ""
        }
        display.textContent = display.textContent + button.value
        storedDisplay = display.textContent

        
    // Make the calculator work behind the scenes
    // Store first and second value
    pattern = /([+\-x÷])/;
    
    splitDisplay = (storedDisplay.replace(/\s/g, "")).split(pattern);
    console.log(splitDisplay)
    });

});

// Operator Buttons to populate display
let operatorToDisplay = document.querySelectorAll(".operator_button")
operatorToDisplay.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent == "0") {
            display.textContent = ""
        }

        if (splitDisplay[0] != null && splitDisplay[1] != null && splitDisplay[2] != null) {
            answer  = operate(splitDisplay[1], splitDisplay[0], splitDisplay[2])
            display.textContent = answer + button.value
        } else {
        display.textContent = display.textContent + button.value
        storedDisplay = display.textContent
        }

        
    // Make the calculator work behind the scenes
    // Store first and second value
    pattern = /([+\-x÷])/;
    
    splitDisplay = (storedDisplay.replace(/\s/g, "")).split(pattern);
    console.log(splitDisplay)
    });

});



// Create function behind equals button
let equalsButton = document.querySelector(".equals_button");
equalsButton.addEventListener("click", () => {
    answer  = operate(splitDisplay[1], splitDisplay[0], splitDisplay[2])
    console.log(answer)
    display.textContent = answer
});

// Create function behind Clear Button
let clearButton = document.querySelector(".clear_button")
clearButton.addEventListener("click", () => {
    display.textContent = ""

});
