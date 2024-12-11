let object = {};

const submit = document.getElementById("submit");

window.onload = () => {
	submit.click();
};

submit.addEventListener("click", () => {
	let key = document.getElementById("key").value;
	let value = document.getElementById("val").value;

	object[key] = value;

	document.getElementById("output").textContent = JSON.stringify(object);
});
