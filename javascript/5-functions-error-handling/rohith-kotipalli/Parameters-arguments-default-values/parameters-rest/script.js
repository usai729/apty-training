const calculateSum = (...numbers) => {
    return numbers.reduce((total, num) => total + num);
};

document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input = document.getElementById('numbersInput').value;
    const numberArray = input.split(',').map(num => parseFloat(num));

    const sum = calculateSum(...numberArray);
    
    document.getElementById('result').innerText = `Sum of the numbers: ${sum}`;
});