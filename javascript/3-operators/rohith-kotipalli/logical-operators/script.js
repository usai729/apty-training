let resultContainer = document.getElementById("result")
let andButton = document.getElementById("andOperatorButton")
let orButton = document.getElementById("orOperatorButton")
let notButton = document.getElementById("notOperatorButton")


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

andButton.addEventListener("click", () => {
    const {convertedValue1,convertedValue2} = getValuesAndTypes()
    resultContainer.textContent = `${convertedValue1 && convertedValue2}`
}) 

orButton.addEventListener("click", () => {
    const {convertedValue1,convertedValue2} = getValuesAndTypes()
    resultContainer.textContent = `${convertedValue1 || convertedValue2}`
})

notButton.addEventListener("click", () => {
    const {convertedValue1,convertedValue2} = getValuesAndTypes()
    resultContainer.textContent = `${!convertedValue1} and ${!convertedValue2}`
})