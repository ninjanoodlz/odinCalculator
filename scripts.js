/** Javascript! */

//Global variables
let displayValue = null;
let storedValue = null;
let operator = false;

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
            console.log(1);
        }
        else if (operator === "solved") {
            storedValue = displayValue;
            storedValue = add(displayValue, storedValue); 
            operator = "add";
            reset();
            console.log(2);
        }
        else {
        storedValue = add(displayValue, storedValue); 
        operator = "add";
        reset();
        console.log(3);
        }
    }
    else if (e.target.id === "subtract") {
        if(storedValue === null) {
            storedValue = displayValue;
            operator = "subtract"
        }
        else {
            storedValue =subtract(displayValue, storedValue);
            operator = "subtract";
            reset();
        }
    }
    else if(e.target.id === "solve" && operator != "solved") {
        storedValue = operate(operator, displayValue, storedValue);
        clearDisplay();
        operator = "solved";
        solutionDisplay(storedValue);
    }
    else if(e.target !== e.currentTarget) {
        clearDisplay();
        let clickItem = e.target.id;
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
    ctx.fillText(storedValue, 200, 25);
    ctx.fillText(operator, 200, 75);
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
}

//resets variables after answers
function afterAnswer() {
    displayValue = null;
    // storedValue = null;
    // operator = null;
}



//basic math functions start
function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply (num1, num2) {
    return Number(num1) * Number(num2);
}

function divide (num1, num2) {
    return Number(num1) / Number(num2);
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
        return divide(num1, num2);
    }
    else {
        console.log("error");
    }
}