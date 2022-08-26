/** Javascript! */

//Global variables
let displayValue = null;

//Event Listeners for buttons

let allButtons = document.querySelector("#clickers");
allButtons.addEventListener("click", buttonListener, false);

function buttonListener(e) {
    if(e.target.id === "reset"){
        reset();
    }
    else if(e.target !== e.currentTarget){
        let clickItem = e.target.id;
        clearDisplay();

        // pseudocode
        // I need this block to take target id(s)
        // and give the operate function proper arguments
        // displayValue = operate(plus, 2, 2) 

        updateDisplay(clickItem);
    }
    e.stopPropagation();
}

//update display function
function updateDisplay(newValue) {
    if(displayValue === null){
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

function clearDisplay() {
    let canvas = document.getElementById("display");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function reset() {
    displayValue = null;
    clearDisplay();
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
function operate (operator, num1, num2) {
    if(operator === "add") {
        add(num1, num2);
    }
    else if(operator === "subtract") {
        subtract(num1, num2);
    }
    else if(operator === "multiply") {
        multiply(num1, num2);
    }
    else if(operator === "divide") {
        divide(num1, num2);
    }
    else {
        console.log("error");
    }
}









// let nine = document.querySelector('#nine');
// nine.addEventListener("click", function(){
//     clearDisplay();
//     updateDisplay(9);
// });

// let clear = document.querySelector('#clear');
// clear.addEventListener("click", function(){
//     clearDisplay();
// });