function combineArrays(array1, array2) {
    return [...new Set([...array1, ...array2])];
}

function handleCombineArrays() {
    const array1 = document.getElementById("array1").value
        .split(",")
        .map(item => item.trim())
        .map(Number);

    const array2 = document.getElementById("array2").value
        .split(",")
        .map(item => item.trim())
        .map(Number);

    const result = combineArrays(array1, array2);

    document.getElementById("output").innerText = `Combined Array: [${result.join(", ")}]`;
}