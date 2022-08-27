/** Javascript! */

//Global variables
let displayValue = null;
let storedValue = null;
let operator = null;

//Event Listeners for buttons

let allButtons = document.querySelector("#clickers");
allButtons.addEventListener("click", buttonListener, false);

function buttonListener(e) {
    if(e.target.id === "AC") {
        AC();
    }
    else if(e.target.id === "add") {
        if(storedValue === null) {
            storedValue = displayValue;
            operator = "add"; 
            reset();
        }
        else {
        storedValue = add(displayValue, storedValue);
        operator = "add";
        reset();
        }
    }
    else if(e.target.id === "solve") {
        storedValue = operate(operator, displayValue, storedValue);
        clearDisplay();
        operator = "solved";
        solutionDisplay(storedValue);
        console.log({storedValue});
        console.log({displayValue});
        console.log({operator});
    }
    else if(e.target !== e.currentTarget) {
        let clickItem = e.target.id;
        if(operator === "solved") {
            afterAnswer();
        }
        clearDisplay();
        updateDisplay(clickItem);
    }
    e.stopPropagation();
}

//update numbers displayed
function updateDisplay(newValue) {
    if(displayValue === null) {
        displayValue = newValue;
    }
    else{
        displayValue += newValue;
    }
    let canvas = document.getElementById("display");
    let ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(displayValue, 0, 25);
}

function solutionDisplay(answer) {
    let canvas = document.getElementById("display");
    let ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(answer, 0, 25);
}

function clearDisplay() {
    let canvas = document.getElementById("display");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function reset() {
    displayValue = null;
    clearDisplay();
    console.log({storedValue});
    console.log({displayValue});
    console.log({operator});
}

function AC() {
    displayValue = null;
    storedValue = null;
    operator = null;
    clearDisplay();
    console.log({storedValue});
    console.log({displayValue});
    console.log({operator});
}

//resets variables after answers
function afterAnswer() {
    // clearDisplay();
    displayValue = null;
    storedValue = null;
    operator = null;
}



//basic math functions start
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

//consolidates math operators and number inputs
function operate (arg, num1, num2) {
    if(arg === "add") {
        return add(num1, num2);
    }
    else if(arg === "subtract") {
        return subtract(num1, num2);
    }
    else if(arg === "multiply") {
        return multiply(num1, num2);
    }
    else if(arg === "divide") {
        return (num1, num2);
    }
    else {
        console.log("error");
    }
}