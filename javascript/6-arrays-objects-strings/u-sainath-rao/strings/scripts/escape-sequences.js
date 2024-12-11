const submit_btn = document.getElementById("submit");

submit_btn.addEventListener("click", () => {
	let text = document.getElementById("str").value;

	document.getElementById("output").textContent = text
		.replace("\\n", "\\\\" + "n")
		.replace("\\t", "\\\\" + "t");
});
