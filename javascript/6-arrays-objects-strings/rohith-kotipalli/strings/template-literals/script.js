function generateGreeting() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (!name || !age) {
      document.getElementById('result').textContent = 'Please enter both name and age.';
      return;
    }

    const message = `Hello, ${name}! You are ${age} years old.`;

    document.getElementById('result').textContent = message;
  }