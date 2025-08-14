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
let result=0;
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
        if (oper === '') {
            num1 += num.textContent;
        }
        else {
            num2 += num.textContent;
        };
        display.textContent = num1+' '+oper+' '+num2;
    })
});

const ops = document.querySelectorAll(".oper");
ops.forEach((op) => {
    op.addEventListener("click", () => {
        if (num1 !== '' && num2 !== '') {
            operate(num1,num2,oper);
            num1 = result;
            num2 = '';
            oper = op.textContent;
            display.textContent = num1+' '+oper+' '+num2;
        }
        else if (num1 === '' && num2 === '' && display.textContent != result) {
            num1 = '0';
            oper = op.textContent;
            display.textContent = num1+' '+oper+' '+num2;
        }
        else if (num1 === '' && num2 === '' && display.textContent == result) {
            num1 = result;
            oper = op.textContent;
            display.textContent = num1+' '+oper+' '+num2;
        }
        else {
            oper = op.textContent;
            display.textContent = num1+' '+oper+' '+num2;
        }

    })
});
//Make the calculator work after pressing '='
let equal = document.querySelector(".equal");
equal.addEventListener("click", ()=> {
    if (num1 === '' && num2 === '' && oper === '') {
        display.textContent = '0';
    }
    else if (num1 !== '' && num2 === '' && oper === '') {
        display.textContent = num1;
    }
    else if (num1 !== '' && num2 === '' && oper !== '') {
        display.textContent = num1;
    }
    else {
    operate(num1,num2,oper);
    num1 = '';
    num2 = '';
    oper = '';
    display.textContent = result;
    };
});

// J'ai réglé un problème (quand on clique '=' avant fin operation),
// mais recréé un autre (après '=', quand on clique sur un opérateur,
// le compteur retourne à zero, au lieu de continuer).

// pour le '0', il faudra changer le fait que quand on y clique
//plusieurs fois alors que l'écran affiche déjà zéro, on a plusieurs zéros.