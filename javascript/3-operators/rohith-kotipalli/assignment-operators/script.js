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
    let a = value1
    a += value2
    displayResult(a);
}
function subtract(){
    const {value1,value2} = getValues()
    let a = value1
    a -= value2
    displayResult(a)
}
function multiply(){
    const {value1,value2} = getValues()
    let a = value1
    a *= value2
    displayResult(a)
}
function divide(){
    const {value1,value2} = getValues()
    if (value2 === 0){
        displayResult("Denominator cannot be zero")
    }
    else{
        let a = value1
        a /= value2
        displayResult(a)
    }
}

function modulus() {
    const { value1, value2 } = getValues();
    let a = value1
    a %= value2
    displayResult(a);
}