const submit_btn = document.getElementById("submit");

window.onload = () => {
	submit_btn.click();
};

submit_btn.addEventListener("click", () => {
	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;

	document.getElementById(
		"output"
	).textContent = `Hello, my name is ${name} and I am ${age} years old.`;
});
