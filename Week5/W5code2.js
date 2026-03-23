let num1 = null;
let num2 = null;
let operator = null;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) return "Error";
    return a / b;
};
function calculate(a, b, operationCallback){
    return operationCallback(a, b);
}
function appendNumber(num){
    document.getElementById("display").value += num;
}
function setOperation(op){
    num1 = parseFloat(document.getElementById("display").value);
    operator = op;
    document.getElementById("display").value = "";
}
function calculateResult(){
    num2 = parseFloat(document.getElementById("display").value);
    let result;
    switch(operator){
        case '+':
            result = calculate(num1, num2, add);
            break;
        case '-':
            result = calculate(num1, num2, subtract);
            break;
        case '*':
            result = calculate(num1, num2, multiply);
            break;
        case '/':
            result = calculate(num1, num2, divide);
            break;
        default:
            result = "Error";
    }
    document.getElementById("display").value = result;
}
function clearDisplay(){
    document.getElementById("display").value = "";
}
function backspace(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}