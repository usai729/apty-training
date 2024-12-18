function wordLengths(inputString) {
    return inputString
        .split(" ") 
        .map(word => word.length)
        .join(" "); 
}

function handleWordLengths() {
    const input = document.getElementById("stringInput").value;
    const result = wordLengths(input);
    document.getElementById("output").innerText = `Word Lengths: ${result}`;
}