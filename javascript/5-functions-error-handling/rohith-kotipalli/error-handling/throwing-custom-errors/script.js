const calculate = (num1, operator, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Both inputs must be numeric values.");
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return num1 / num2;
        default:
            throw new Error("Unsupported operator. Please use +, -, *, or /.");
    }
};

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const num1 = document.getElementById('num1').value.trim();
    const operator = document.getElementById('operator').value.trim();
    const num2 = document.getElementById('num2').value.trim();
    
    const resultDiv = document.getElementById('result');

    try {
        const result = calculate(num1, operator, num2);
        resultDiv.innerText = `Result: ${result}`; 
        resultDiv.style.color = 'black'; 

    } catch (error) {
        resultDiv.innerText = error.message; 
        resultDiv.style.color = 'red'; 
    }
});