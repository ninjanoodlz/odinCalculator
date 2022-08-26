/** Javascript! */

//canvas test

let canvas = document.getElementById("display");
let ctx = canvas.getContext("2d");
ctx.fillText("Hello Michael", 100, 50);

//static test good

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