let resultContainer = document.getElementById("result")

function convertValue(value, type) {
    switch (type) {
        case "number":
            return Number(value);
        case "boolean":
            return Boolean(value);
        case "object":
            return Object(value)
        default:
            return value;
    }
}

function getValuesAndTypes() {
    const value1 = document.getElementById("value1").value;
    const type1 = document.getElementById("type1").value;
    const value2 = document.getElementById("value2").value;
    const type2 = document.getElementById("type2").value;

    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);

    return { convertedValue1, convertedValue2 };
}

function compareEqual(){
    const {convertedValue1,convertedValue2} = getValuesAndTypes()
    let c = convertedValue1 == convertedValue2 
    resultContainer.textContent = `${c}`
}

function compareStrictEqual(){
    const {convertedValue1,convertedValue2} = getValuesAndTypes() 
    let c = convertedValue1 === convertedValue2
    resultContainer.textContent = `${c}`
} 

function compareNotEqual(){
    const {convertedValue1,convertedValue2} = getValuesAndTypes() 
    let c = convertedValue1 != convertedValue2
    resultContainer.textContent = `${c}`
}

function compareStrictEqual(){
    const {convertedValue1,convertedValue2} = getValuesAndTypes() 
    let c = convertedValue1 === convertedValue2
    resultContainer.textContent = `${c}`
}

function compareStrictNotEqual(){
    const {convertedValue1,convertedValue2} = getValuesAndTypes() 
    let c = convertedValue1 !== convertedValue2
    resultContainer.textContent = `${c}`
}

function compareGreaterThan(){
    const {convertedValue1,convertedValue2} = getValuesAndTypes() 
    let c = convertedValue1 > convertedValue2
    resultContainer.textContent = `${c}`
}

function compareLessThan(){
    const {convertedValue1,convertedValue2} = getValuesAndTypes() 
    let c = convertedValue1 < convertedValue2
    resultContainer.textContent = `${c}`
}

function compareGreaterThanOrEqual(){
    const {convertedValue1,convertedValue2} = getValuesAndTypes() 
    let c = convertedValue1 >= convertedValue2
    resultContainer.textContent = `${c}`
}

function compareStrictEqual(){
    const {convertedValue1,convertedValue2} = getValuesAndTypes() 
    let c = convertedValue1 === convertedValue2
    resultContainer.textContent = `${c}`
}

function compareLessThanOrEqual(){
    const {convertedValue1,convertedValue2} = getValuesAndTypes() 
    let c = convertedValue1 <= convertedValue2
    resultContainer.textContent = `${c}`
}