function greetUser() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = Number(document.getElementById('age').value);

    const name = `${firstname} ${lastname}`;

    const message = age >= 18
        ? `Hello ${name}, welcome to Apty!`
        : `Hello ${name}, come back after ${18 - age} years.`;

    document.getElementById('greeting').textContent = message;
}