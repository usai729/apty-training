const parseJSON = (jsonString) => {
    try {
        const parsedObject = JSON.parse(jsonString);
        return { success: true, data: parsedObject }; 
    } catch (error) {
        return { success: false, message: 'Invalid JSON format: ' + error.message };
    }
};

document.getElementById('jsonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const jsonInput = document.getElementById('jsonInput').value.trim();
    
    const result = parseJSON(jsonInput);
    
    const resultDiv = document.getElementById('result');
    if (result.success) {
        resultDiv.innerText = 'Parsed Object: ' + JSON.stringify(result.data, null, 2);
        resultDiv.style.color = 'green'; 
    } else {
        resultDiv.innerText = result.message;
        resultDiv.style.color = 'red'; 
    }
});