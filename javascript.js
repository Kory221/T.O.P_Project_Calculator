// functions for add, subtract, multiply and divide
function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}
// 3 variable for operands and operator
let num1;
let num2;
let operator;

function operate (num1,num2,operator) {
    let result;
    if (operator === "+") {
        result = add(num1,num2)
    }
    else if (operator === "-") {
        result = subtract(num1,num2)
    }
    else if (operator === "*") {
        result = multiply(num1,num2)
    }
    else if (operator === "/") {
        result = divide(num1,num2)
    };
    return result;
}