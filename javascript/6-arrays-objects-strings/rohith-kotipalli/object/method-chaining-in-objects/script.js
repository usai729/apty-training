class Person {
    constructor() {
      this.name = '';
      this.age = 0;
    }

    setName(name) {
      this.name = name;
      return this; 
    }

    setAge(age) {
      this.age = age;
      return this;
    }

    greet() {
      return `Hello, I am ${this.name}, ${this.age} years old.`;
    }
  }
  function createPerson() {
    const name = document.getElementById('personName').value;
    const age = parseInt(document.getElementById('personAge').value, 10);

    if (!name || isNaN(age) || age <= 0) {
      document.getElementById('greetingResult').textContent = 'Please enter a valid name and age.';
      return;
    }

    const person = new Person().setName(name).setAge(age);
    const greeting = person.greet();

    document.getElementById('greetingResult').textContent = greeting;
  }