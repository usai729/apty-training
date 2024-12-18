const users = {
    "lucky": { "address": { "city": "Hyderabad" } },
    "john": { "address": { "city": "New York" } },
    "sara": { "address": { "city": "London" } }
};

document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userName = document.getElementById('userName').value.trim();
    const resultDiv = document.getElementById('result');

    try {
        if (!users[userName]) {
            throw new Error("User not found.");
        }

        const city = users[userName].address.city; 
        resultDiv.innerText = `City of ${userName}: ${city}`; 
        resultDiv.style.color = 'black'; 

    } catch (error) {
       
        resultDiv.innerText = error.message; 
        resultDiv.style.color = 'red';
    }
});