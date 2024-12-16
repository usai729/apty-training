const repeatAction = (action, n) => {
    for (let i = 0; i < n; i++) {
        action(i); 
    }
};


document.getElementById('repeatForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const itemText = document.getElementById('itemInput').value.trim();
    const count = parseInt(document.getElementById('countInput').value);

  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

   
    const ul = document.createElement('ul');
    
    repeatAction(() => {
        const li = document.createElement('li');
        li.textContent = itemText; 
        ul.appendChild(li);
    }, count);

    resultDiv.appendChild(ul); 
});