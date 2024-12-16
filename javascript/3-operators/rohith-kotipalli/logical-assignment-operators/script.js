let resultContainer = document.getElementById("result")
let andassignButton = document.getElementById("andAssignment")
let orassignButton = document.getElementById("orAssignment")
let nullishButton = document.getElementById("nullishOperator")

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

andassignButton.addEventListener("click",()=>{
    const {convertedValue1,convertedValue2} = getValuesAndTypes()
    let a = convertedValue1 
    a &&= convertedValue2 
    resultContainer.textContent = `${a}`
})

orassignButton.addEventListener("click",()=>{
    const {convertedValue1,convertedValue2} = getValuesAndTypes()
    let a = convertedValue1 
    a ||= convertedValue2 
    resultContainer.textContent = `${a}`
})

nullishButton.addEventListener("click",()=>{
    const {convertedValue1,convertedValue2} = getValuesAndTypes()
    let a = convertedValue1 
    a ??= convertedValue2 
    resultContainer.textContent = `${a}`
})