let display = document.getElementById('display');
let currentValue = '';
let operator = '';
let previousValue = '';

function appendNumber(number) {
    currentValue += number;
    display.innerText = currentValue;
}

function appendOperator(op) {
    if (currentValue === '') return;
    
    if (op === '×') {
        operator = '*';  
    } else {
        operator = op;
    }
    
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    if (previousValue === '' || currentValue === '') return;
    
    let result;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    display.innerText = result;
    currentValue = result;
    operator = '';
    previousValue = '';
}

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = '';
    display.innerText = '0';
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    display.innerText = currentValue || '0';
}

function calculateSin() {
    currentValue = Math.sin(parseFloat(currentValue)).toFixed(5);
    display.innerText = currentValue;
}

function calculateCos() {
    currentValue = Math.cos(parseFloat(currentValue)).toFixed(5);
    display.innerText = currentValue;
}

function calculateTan() {
    currentValue = Math.tan(parseFloat(currentValue)).toFixed(5);
    display.innerText = currentValue;
}

function calculateLog() {
    currentValue = Math.log10(parseFloat(currentValue)).toFixed(5);
    display.innerText = currentValue;
}

function calculateExp() {
    currentValue = Math.exp(parseFloat(currentValue)).toFixed(5);
    display.innerText = currentValue;
}

function calculateSqrt() {
    currentValue = Math.sqrt(parseFloat(currentValue)).toFixed(5);
    display.innerText = currentValue;
}

function square() {
    currentValue = Math.pow(parseFloat(currentValue), 2).toFixed(5);
    display.innerText = currentValue;
}

function calculatePi() {
    currentValue = Math.PI.toFixed(5);
    display.innerText = currentValue;
}
