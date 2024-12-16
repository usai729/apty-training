const sortNumbers = function(arr) {
    return arr.sort((a, b) => a - b);
};


document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const input = document.getElementById('numberInput').value;
    const numberArray = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numberArray.length > 0) {
        const sortedArray = sortNumbers(numberArray);
        displaySortedNumbers(sortedArray);
    } else {
        alert('Please enter valid numbers.');
    }
});


function displaySortedNumbers(sortedArray) {
    const resultBody = document.getElementById('resultBody');
    resultBody.innerHTML = ''; 

    sortedArray.forEach(num => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = num;
        row.appendChild(cell);
        resultBody.appendChild(row);
    });
}