let amount = document.getElementById("total");
let bill
let persons
let tipPercent
function tipCalculate()
{
    bill = document.getElementById("bill").value;
    persons = document.getElementById("persons").value;
    tipPercent = document.getElementById("tipPercent").value;
    amount.textContent = `Total: ${(+bill / +persons) + ((+bill * +tipPercent/100)/+persons)}`
}
document.getElementById("calculate").addEventListener("click", tipCalculate);