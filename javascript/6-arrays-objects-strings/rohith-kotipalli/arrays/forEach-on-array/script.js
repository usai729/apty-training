function introduceUsers() {
    const input = document.getElementById('inputUsers').value;
    let users;

    try {
      users = JSON.parse(input);

      if (!Array.isArray(users) || users.some(user => !user.name || !user.age)) {
        throw new Error("Invalid input format. Ensure each user has 'name' and 'age'.");
      }
    } catch (error) {
      document.getElementById('output').textContent = `Error: ${error.message}`;
      return;
    }

    const messages = [];
    users.forEach(user => {
      messages.push(`${user.name} is ${user.age} years old.`);
    });

    document.getElementById('output').textContent = messages.join(' ');
  }