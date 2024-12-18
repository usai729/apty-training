function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function displayFibonacciSeries(num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += fibonacci(i) + ' ';
    }
    return result.trim();
}

document.getElementById('fibonacciForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numberInput = document.getElementById('numberInput').value;
    const num = parseInt(numberInput);

    if (num >= 0) {
        const fibonacciResult = displayFibonacciSeries(num);
        document.getElementById('result').innerText = fibonacciResult;
    } else {
        document.getElementById('result').innerText = 'Please enter a positive integer.';
    }
});