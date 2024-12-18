function getValues() {
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
    return { value1, value2 };
}

function displayResult(result) {
    document.getElementById("result").textContent = `${result}`;
}
function add() {
    const { value1, value2 } = getValues();
    displayResult(value1 + value2);
}
function subtract(){
    const {value1,value2} = getValues()
    displayResult(value1 - value2)
}
function multiply(){
    const {value1,value2} = getValues()
    displayResult(value1*value2)
}
function divide(){
    const {value1,value2} = getValues()
    if (value2 === 0){
        displayResult("Denominator cannot be zero")
    }
    else{
        displayResult(value1/value2)
    }
}
function increment(){
    const {value1,value2} = getValues() 
    const result = `${value1 + 1} and ${value2 + 1}` 
    displayResult(result)
}
function decrement(){
    const {value1,value2} = getValues() 
    const result = `${value1 - 1} and ${value2 - 1}` 
    displayResult(result)
}
function modulus() {
    const { value1, value2 } = getValues();
    displayResult(value1 % value2);
}