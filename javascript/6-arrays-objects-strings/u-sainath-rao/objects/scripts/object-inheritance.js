const person = {
	name: "Xyz",
};

const employee = Object.create(person);

employee.job = "Developer";
employee.greet = function () {
	document.getElementById(
		"output"
	).innerHTML = `Hello, ${this.name} the ${this.job}!`;
};

employee.greet();
