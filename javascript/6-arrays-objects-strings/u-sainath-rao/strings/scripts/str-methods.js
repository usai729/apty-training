const submit_btn = document.getElementById("submit");

window.onload = () => {
	submit_btn.click();
};

submit_btn.addEventListener("click", () => {
	let text = document.getElementById("str").value;

	document.getElementById("output").textContent = text
		.split("")
		.sort()
		.join("");
});
