let resultView = document.getElementById("result-el")
let number1
let number2
function addition()
{
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    resultView.textContent = `Result: ${+number1 + +number2}`    
}
function subtraction()
{
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    resultView.textContent = `Result: ${+number1 - +number2}` 
}
function product()
{
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    resultView.textContent = `Result: ${+number1 * +number2}` 
}
function division()
{
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    resultView.textContent = `Result: ${+number1 / +number2}` 
}