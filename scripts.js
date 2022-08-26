/** Javascript! */

//Event Listeners for buttons
// let nine = document.querySelector('#nine');
// nine.addEventListener("click", function(){
//     clearDisplay();
//     updateDisplay(9);
// });

// let clear = document.querySelector('#clear');
// clear.addEventListener("click", function(){
//     clearDisplay();
// });

let allButtons = document.querySelector("#clickers");
allButtons.addEventListener("click", buttonListener, false);

function buttonListener(e) {
    if (e.target !== e.currentTarget){
        let clickItem = e.target.id;
        updateDisplay(clickItem);
    }
    e.stopPropagation();
}

//update display function
function updateDisplay(newValue) {
    let canvas = document.getElementById("display");
    let ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(newValue, 100, 50);
}

function clearDisplay() {
    let canvas = document.getElementById("display");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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