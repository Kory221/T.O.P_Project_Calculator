// functions for add, subtract, multiply and divide
function add (a,b) {
    return Number(a) + Number(b);
}

function subtract (a,b) {
    return Number(a) - Number(b);
}

function multiply (a,b) {
    return Number(a) * Number(b);
}

function divide (a,b) {
    return Number(a) / Number(b);
}
// 3 variable for operands and operator
let num1='';
let num2='';
let oper='';
// new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
let result;
function operate (x1,x2,operator) {   
    if (operator === "+") {
        result = add(x1,x2)
    }
    else if (operator === "-") {
        result = subtract(x1,x2)
    }
    else if (operator === "*") {
        result = multiply(x1,x2)
    }
    else if (operator === "/") {
        result = divide(x1,x2)
    };
    return result;
}
//create the functions that populate the display when you click the digit buttons

let display = document.querySelector(".display");

const nums = document.querySelectorAll(".num");
nums.forEach((num) => {
    num.addEventListener("click", () => {
        display.textContent += num.textContent;
        if (oper === '') {
            num1 += num.textContent;
        }
        else {
            num2 += num.textContent;
        };
    })
});

const ops = document.querySelectorAll(".oper");
ops.forEach((op) => {
    op.addEventListener("click", () => {
        oper = op.textContent;
        display.textContent = display.textContent+' '+oper+' ';
    })
});
//Make the calculator work after pressing '='
const equal = document.querySelector(".equal");
equal.addEventListener("click", ()=> {
    operate(num1,num2,oper);
    display.textContent = '= '+result;
    num1 = '';
    num2 = '';
    oper = '';
});




//ET aussi, si on clique sur 2 opérateurs (ou le même) de suite,
//que seul le 2eme aparaisse (au lieu d'avoir +-) et =operator