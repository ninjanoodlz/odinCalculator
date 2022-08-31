/** Javascript! */

//Global variables
let displayValue = null;
let storedValue = null;
let operator = solve;

//Event Listeners for buttons

let allButtons = document.querySelector("#clickers");
allButtons.addEventListener("click", buttonListener, false);

function buttonListener(e) {
    if(e.target.id === "AC") {
        AC();
    }
    else if(e.target.id === operator) {
        //do nothing
    }
    else if(e.target.id === "solve" && storedValue === null) {
        //do nothing
    }
    else if(e.target.id === "add") {
        document.getElementById(".").disabled = false; //reenable .
        if(storedValue === null) {
            operator = "add";
            storedValue = displayValue;
            displayValue = null;
        }
        else if (operator === "solve") {
            operator = "add";
        }
        else if (operator !== "add" && operator !== "solve") {
            storedValue = operate(operator, storedValue, displayValue);
            reset();
            solutionDisplay(storedValue);
            operator = "add";
        }
        else if(storedValue !== null) {
            operator = "add";
            storedValue = operate(operator, storedValue, displayValue);
            reset();
            solutionDisplay(storedValue);
        }
    }
    //subtraction
    else if(e.target.id === "subtract") {
        document.getElementById(".").disabled = false; //reenable .
        if(storedValue === null) {
            operator = "subtract";
            storedValue = displayValue;
            displayValue = null;
        }
        else if (operator === "solve") {
            operator = "subtract";
        }
        else if (operator !== "subtract" && operator !== "solve") {
            storedValue = operate(operator, storedValue, displayValue);
            reset();
            solutionDisplay(storedValue);
            operator = "subtract";
        }
        else if(storedValue !== null) {
            operator = "subtract";
            storedValue = operate(operator, storedValue, displayValue);
            reset();
            solutionDisplay(storedValue);
        }  
    }
    //multiplication
    else if(e.target.id === "multiply") {
        document.getElementById(".").disabled = false; //reenable .
        if(storedValue === null) {
            operator = "multiply";
            storedValue = displayValue;
            displayValue = null;
        }
        else if (operator === "solve") {
            operator = "multiply";
        }
        else if (operator !== "multiply" && operator !== "solve") {
            storedValue = operate(operator, storedValue, displayValue);
            reset();
            solutionDisplay(storedValue);
            operator = "multiply";
            console.log(1);
        }
        else if(storedValue !== null) {
            operator = "multiply";
            storedValue = operate(operator, storedValue, displayValue);
            reset();
            solutionDisplay(storedValue);
        }  
    }
    //divide
    else if(e.target.id === "divide") {
        document.getElementById(".").disabled = false; //reenable .
        if(storedValue === null) {
            operator = "divide";
            storedValue = displayValue;
            displayValue = null;
        }
        else if (operator === "solve") {
            operator = "divide";
        }
        else if (operator !== "divide" && operator !== "solve") {
            storedValue = operate(operator, storedValue, displayValue);
            reset();
            solutionDisplay(storedValue);
            operator = "divide";
        }
        else if(storedValue !== null) {
            operator = "divide";
            storedValue = operate(operator, storedValue, displayValue);
            reset();
            solutionDisplay(storedValue);
        }  
    }
    //solve!
    else if(e.target.id === "solve") {
        storedValue = operate(operator, storedValue, displayValue);
        reset();
        solutionDisplay(storedValue);
        operator = "solve";
    }
    //display update
    else if(e.target !== e.currentTarget) {
        if(operator == "solve") {
            storedValue = null;
        }
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
        if(newValue === "." ) {
            document.getElementById(".").disabled = true;
        }
    }
    let canvas = document.getElementById("display");
    let ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(displayValue, 0, 25);
    // ctx.fillText(storedValue, 200, 25);
    // ctx.fillText(operator, 200, 75);
}

function solutionDisplay(answer) {
    let canvas = document.getElementById("display");
    let ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(answer, 0, 25);
    // ctx.fillText(storedValue, 200, 25);
    // ctx.fillText(operator, 200, 75);
}

function clearDisplay() {
    let canvas = document.getElementById("display");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function reset() {
    displayValue = null;
    clearDisplay();
    document.getElementById(".").disabled = false;
}

function AC() {
    displayValue = null;
    storedValue = null;
    operator = solve;
    clearDisplay();
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
        console.log(`${num1} + ${num2}`);
        return add(num1, num2);
    }
    else if(arg === "subtract") {
        console.log(`${num1} - ${num2}`);
        return subtract(num1, num2);
    }
    else if(arg === "multiply") {
        console.log(`${num1} * ${num2}`);
        return multiply(num1, num2);
    }
    else if(arg === "divide") {
        console.log(`${num1} / ${num2}`);
        return divide(num1, num2);
    }
    else {
        console.log("error");
    }
}