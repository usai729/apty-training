const concatenateStrings = (first = "Hello", second = "World", third = "!") => {
    const firstInnerFunction = (first) => {
        const secondInnerFunction = (second) => {
            const thirdInnerFunction = (third) => {
                return `${first} ${second} ${third}`; 
            };
            return thirdInnerFunction(third); 
        };
        return secondInnerFunction(second); 
    };
    return firstInnerFunction(first); 
};


document.getElementById('stringForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const firstString = document.getElementById('firstInput').value.trim() || undefined;
    const secondString = document.getElementById('secondInput').value.trim() || undefined;
    const thirdString = document.getElementById('thirdInput').value.trim() || undefined;

    const resultString = concatenateStrings(firstString, secondString, thirdString);
    
 
    document.getElementById('result').innerText = `Concatenated Result: ${resultString}`;
});