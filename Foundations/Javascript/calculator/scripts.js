function operate(a,b, operator) {
    let res =0;
    switch (operator) {
        case "+": //Sum
            res = a+b;
            break;
        case "-": //Minus
            res = a-b;
            break;
        case "X": //Multipication
            res =a*b;
            break;
        case "/": //Division
            res = b == 0 ? "You can`t divide by zero!" : a/b;
            break;
        case "xy": //Power of 
            res = a**b;
            break;
        case "!": //Factorial
            res = factorial(a);
            break;
        default:
            alert("ERROR, not a valid operation");
    }
    return res;
}

function factorial(n) {
    let fact = 1;
    for (let i=1;i<=n;i++) {    
      fact *= i;
    }
    return fact;
}

function isANumber(key) {
    return !isNaN(key.textContent);
}

function isAOperation(key) {
    return operations.includes(key.textContent);
}

function inputNumber(e) {
    if (isANumber(actual_input)) {
        actual_input += this.textContent;
        actual_number.textContent = actual_input;
    }
    else {
        actual_input += `${this.textContent}`;
        actual_number.textContent = actual_input;
    }
        
}

function newOperation(e) {
    //If it was already doing an operation it counts as an equal
    if (actual_operation !== "" || this.textContent == "!") {
        let result = operate(previous_number, +actual_input, actual_operation || "!");
        actual_input = Math.round(result * 10^num_decim) / 10^num_decim;
        previous_number = +actual_input;
    }
    else {
        previous_number = +actual_input;
        actual_input = "";
    }
    actual_operation = this.textContent;
    floating_point_on = false;
    updateDisplay();
    
}

function delOperator(e) {
    if (actual_input[actual_input.length-1] == ".") {
        floating_point_on = false;
    }
    actual_input = actual_input.length == 0 ? "" : actual_input.slice(0, -1);
    actual_number.textContent = actual_input;
    
}

function equalOperator(e) {
    if (actual_operation === "") {
        alert("Enter an operation before pressing equal.");
    }
    else {
        let result = operate(previous_number, +actual_input, actual_operation);
        actual_input = Math.round(result * 10**num_decim) / 10**num_decim;
        previous_number = +actual_input;
        actual_operation = "";
    }
    updateDisplay();
}

function updateDisplay() {
    actual_number.textContent = actual_input;
    previous_data.textContent = `Operand: ${previous_number} , \n
    Actual operation: \"${actual_operation}\"`;
}

const operations = [ "+", "-", "X", "/", "xy", "!"]
let actual_input = "";
let actual_operation = "";
let previous_number;
let floating_point_on = false;
let num_decim = 3;  //Number of decimals shown

const actual_number = document.querySelector("#actual-number");
const previous_data = document.querySelector("#previous-data");

const keys = Array.from(document.querySelectorAll(".key"));

//Add functionality to keys 
for (let key of keys) {
    if (isANumber(key)) {
        key.addEventListener("click", inputNumber);
    }
    if (isAOperation(key)) {
        key.addEventListener("click", newOperation);
    }
    if (key.textContent === "DEL") {
        key.addEventListener("click", delOperator);
    }
    if (key.textContent === "=") {
        key.addEventListener("click", equalOperator);
    }
    if (key.textContent === "AC") {
        key.addEventListener("click", () => {
            actual_input = "";
            actual_operation = "";
            previous_number = "";
            updateDisplay();
        });
    }
    if (key.textContent === ".") {
        key.addEventListener("click", () => {
            if (!floating_point_on) {
                actual_input += ".";
                updateDisplay();
                floating_point_on = true;
            }
        })
    }
    
        
}





