const withdrawAmount = (balance, withdrawal) => {
    if (withdrawal > balance) {
        const error = {
            errorCode: "INSUFFICIENT_FUNDS",
            errorMessage: "Withdrawal amount exceeds account balance."
        };
        throw error; 
    }
    return balance - withdrawal; 
};


document.getElementById('withdrawForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const balance = parseFloat(document.getElementById('balance').value);
    const withdrawal = parseFloat(document.getElementById('withdrawal').value);
    
    const resultDiv = document.getElementById('result');

    try {
      
        const newBalance = withdrawAmount(balance, withdrawal);
        resultDiv.innerText = `Withdrawal successful! New Balance: $${newBalance.toFixed(2)}`; // Display new balance
        resultDiv.style.color = 'black'; 

    } catch (error) {
        resultDiv.innerText = `Error Code: ${error.errorCode}, Message: ${error.errorMessage}`; // Display error message
        resultDiv.style.color = 'red';
    }
});