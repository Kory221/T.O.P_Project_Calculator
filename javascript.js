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
let num1='';
let num2='';
let operator='';
// new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

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
//create the functions that populate the display when you click the digit buttons

const display = document.querySelector(".display");

const nums = document.querySelectorAll(".num");
nums.forEach((num) => {
    num.addEventListener("click", () => {
        display.textContent += num.textContent;
        num1 += num.textContent;
    })
});

const opers = document.querySelectorAll(".oper");
opers.forEach((oper) => {
    oper.addEventListener("click", () => {
        operator = oper.textContent;
        display.textContent = display.textContent+' '+oper.textContent+' ';
    })
})

// l'idée est que si on clique sur un opérateur, le premier
//eventlistener sur les nums s'arrête et un autre 
//commence faisant la même chose mais remplissant
//cette fois num2.

//ET aussi, si on clique sur 2 opérateurs (ou le même) de suite,
//que seul le 2eme aparaisse (au lieu d'avoir +-) et =operator