function processArray() {
    const input = document.getElementById("arrayInput").value
    const numbers = input.split(",").map(num => Number(num.trim()));
    const result = numbers
        .filter(num => num % 2 === 0) 
        .map(num => num * 2)         
        .reduce((sum, num) => sum + num, 0); 
    document.getElementById("output").innerText = `Result: ${result}`;
}