const numbersArray = [1, 5, 10, 15, 20, 25, 30];

const filterNumbers = (callback) => {
    return numbersArray.filter(callback);
};

document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const limit = parseInt(document.getElementById('limitInput').value);

   
    const filteredNumbers = filterNumbers(num => num <= limit);
    
    document.getElementById('result').innerText = `Filtered Numbers: ${filteredNumbers.join(', ')}`;
});