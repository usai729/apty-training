function changingToUppercase(a){
     return a.toUpperCase()
}

const processInput = (callback, input = "default text") => {
    return callback(input);
};


const toUpperCase = (str = "default text") => {
    return str.toUpperCase();
};

document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    

    const userInput = document.getElementById('textInput').value.trim();
    
    const processedString = processInput(changingToUppercase, userInput);
    
    document.getElementById('result').innerText = `Processed String: ${processedString}`;
});