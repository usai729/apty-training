const createFactorialCalculator = () => {
    const cache = {}; 

    const factorial = (n) => {
        if (n in cache) {
            return cache[n];
        }
        if (n === 0 || n === 1) {
            return 1; 
        }
        const result = n * factorial(n - 1); 
        cache[n] = result; 
        return result; 
    };

    return factorial; 
};


const cachedFactorial = createFactorialCalculator();

document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const number = parseInt(document.getElementById('numberInput').value);
    if (number >= 0) {
        const result = cachedFactorial(number); 
        document.getElementById('result').innerText = `Factorial of ${number} is ${result}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a non-negative integer.';
    }
});