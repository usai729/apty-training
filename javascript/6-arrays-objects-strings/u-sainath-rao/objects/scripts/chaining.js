function Person() {
	this.name = "xyz";
	this.age = 20;

	this.setName = (name) => {
		this.name = name;
		return this;
	};
	this.setAge = (age) => {
		this.age = age;
		return this;
	};
	this.greet = () => {
		document.getElementById(
			"output"
		).innerHTML = `Hello, I am ${this.name}, ${this.age} years old.`;
		return this;
	};
}

let person = new Person().setName("John").setAge(25).greet();
