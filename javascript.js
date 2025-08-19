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
        result = Number(add(x1,x2).toFixed(10));
    }
    else if (operator === "-") {
        result = Number(subtract(x1,x2).toFixed(10));
    }
    else if (operator === "*") {
        result = Number(multiply(x1,x2).toFixed(10));
    }
    else if (operator === "/") {
        result = Number(divide(x1,x2).toFixed(10));
    };
    return result;
}
//create the functions that populate the display when you click the digit buttons

let display = document.querySelector(".display");
display.textContent = '0';

const nums = document.querySelectorAll(".num");
let integ1 = '';
let decim1 = '';
let integ2 = '';
let decim2 = '';
nums.forEach((num) => {
    num.addEventListener("click", () => {
        if (oper === '' && num1 !== result) {
            if (num1.includes('.')){
                num1 += num.textContent;
                integ1 = num1.slice(0,num1.indexOf('.'));
                decim1 = num1.slice(num1.indexOf('.'));
                display.textContent = Number(integ1)+decim1;
            }
            else {
            num1 += num.textContent;
            display.textContent = Number(num1);
            }
        }
        else if (oper !=='') {
            if (num2.includes('.')) {
                num2 += num.textContent;
                integ2 = num2.slice(0,num2.indexOf('.'));
                decim2 = num2.slice(num2.indexOf('.'));
                display.textContent = Number(num1)+' '+oper+' '+Number(integ2)+decim2;
            }
            else {
            num2 += num.textContent;
            display.textContent = Number(num1)+' '+oper+' '+Number(num2);
            }
        };
        
    })
});
//Add a . button and let users input decimals!
const float = document.querySelector(".float");
float.addEventListener ("click", () => {
    
    if (oper === '' && !num1.includes('.')) {
        if (num1 === '') {
            num1 ='0';
        }
        num1 += float.textContent;
        display.textContent = Number(num1)+'.';
    }
    else if (oper !== '' && !num2.includes('.')) {
        if (num2 === '') {
            num2 ='0';
        }
        num2 += float.textContent;
        display.textContent = Number(num1)+' '+oper+' '+Number(num2)+'.';
    };
})

const ops = document.querySelectorAll(".oper");
ops.forEach((op) => {
    op.addEventListener("click", () => {
        if (num2 === '0' && oper === '/') {
            alert("Impossible to divide by 0")
        }
        else if (num1 !== '' && num2 === '') {
            oper = op.textContent;
            display.textContent = Number(num1)+' '+oper;
        }
        else if (num1 !== '' && num2 !== '') {
            operate(num1,num2,oper);
            num1 = result;
            num2 = '';
            oper = op.textContent;
            display.textContent = Number(num1)+' '+oper;
        }
        else if (num1 === '' && num2 === '' && display.textContent != result) {
            num1 = '0';
            oper = op.textContent;
            display.textContent = Number(num1)+' '+oper;
        }
        else if (num1 === '' && num2 === '' && display.textContent == result) {
            num1 = result;
            oper = op.textContent;
            display.textContent = Number(num1)+' '+oper;
        }
        else {
            oper = op.textContent;
            display.textContent = Number(num1)+' '+oper+' '+Number(num2);
        }

    })
});
//Make the calculator work after pressing '='
let equal = document.querySelector(".equal");
equal.addEventListener("click", ()=> {
    if (num2 === '0' && oper === '/') {
        alert("Impossible to divide by 0")
    }
    else if (num1 === '' && num2 === '' && oper === '') {
        display.textContent = 0;
    }
    else if (num1 !== '' && num2 === '' && oper === '') {
        display.textContent = Number(num1);
    }
    else if (num1 !== '' && num2 === '' && oper !== '') {
        display.textContent = Number(num1)+' '+oper;
    }
    else {
    operate(num1,num2,oper);
    num1 = '';
    num2 = '';
    oper = '';
    display.textContent = result;
    };
});
//Pressing “clear” should wipe out any existing data.
const clear = document.querySelector(".clear");
clear.addEventListener("click", ()=> {
    num1 = '';
    num2 = '';
    oper = '';
    display.textContent = '0';
});

//Add a “backspace” button, so the user can undo their last input if they click the wrong number.
const backsp = document.querySelector(".bsp");
backsp.addEventListener("click", () => {
    if (num1!=='' && typeof num1 === 'string' && oper ==='' && num2 === '') {
        if (num1.includes('.') && num1.length>num1.indexOf('.')+1) {
            num1 = num1.slice(0,-1);
            integ1 = num1.slice(0,num1.indexOf('.'));
            decim1 = num1.slice(num1.indexOf('.'));
            display.textContent = Number(integ1)+decim1;
        }
        else {
            num1 = num1.slice(0,-1);
            display.textContent = Number(num1);
        }
    }
    else if (num1!== '' && oper !=='' && num2==='') {
        oper = oper.slice(0,-1);
        display.textContent = Number(num1);
    }
    else if (num1!=='' && oper !== '' && num2 !== '' && typeof num2 === 'string') {
        if (num2.length > 1) {
            if (num2.includes('.') & num2.length>num2.indexOf('.')+1) {
            num2 = num2.slice(0,-1);
            integ2 = num2.slice(0,num2.indexOf('.'));
            decim2 = num2.slice(num2.indexOf('.'));
            display.textContent = Number(num1)+' '+oper+' '+Number(integ2)+decim2;  
            }
            else {
            num2 = num2.slice(0,-1);
            display.textContent = Number(num1)+' '+oper+' '+Number(num2);
            }
        }
        else {
            num2 = num2.slice(0,-1);
        display.textContent = Number(num1)+' '+oper;
        }

    }
})