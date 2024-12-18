let resultContainer = document.getElementById("result")

function getValues() {
    const value1 = parseInt(document.getElementById("value1").value);
    const value2 = parseInt(document.getElementById("value2").value);
    return { value1, value2 };
}

function bitwiseAnd(){
    const {value1,value2} = getValues()
    resultContainer.textContent = `${value1 & value2}`
}

function bitwiseOr(){
    const {value1,value2} = getValues() 
    resultContainer.textContent = `${value1 | value2}`
}

function bitwiseXOR(){
    const {value1,value2} = getValues() 
    resultContainer.textContent = `${value1 ^ value2}`
}

function bitwiseNOT(){
    const {value1,value2} = getValues() 
    resultContainer.textContent = `${~value1} and ${~value2}`
}

function bitwiseLeftShift(){
    const {value1,value2} = getValues() 
    resultContainer.textContent = `${value1 << value2}`
}

function bitwiseRightShift(){
    const {value1,value2} = getValues() 
    resultContainer.textContent = `${value1 >> value2}`
}