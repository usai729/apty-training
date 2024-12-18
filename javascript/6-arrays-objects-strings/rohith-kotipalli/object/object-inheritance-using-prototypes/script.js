function demonstrateInheritance() {
    const personName = document.getElementById('personName').value;
    const employeeJob = document.getElementById('employeeJob').value;
    if (!personName || !employeeJob) {
      document.getElementById('inheritanceResult').textContent = 'Please enter both a name and a job.';
      return;
    }

    const Person = {
      greet: function () {
        return `Hello, ${this.name}!`;
      }
    };

    const Employee = Object.create(Person);
    Employee.greet = function () {
      return `Hello, ${this.name} the ${this.job}!`;
    };
    const person = Object.create(Person);
      person.name = personName;

      const employee = Object.create(Employee);
      employee.name = personName;
      employee.job = employeeJob;

      const personGreeting = person.greet();
      const employeeGreeting = employee.greet();

      document.getElementById('inheritanceResult').textContent = `Person Greeting: ${personGreeting}\nEmployee Greeting: ${employeeGreeting}`;
    }