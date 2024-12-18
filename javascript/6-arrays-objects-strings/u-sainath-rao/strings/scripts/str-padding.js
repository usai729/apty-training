function padding(str) {
	if (10 - str.length === 0) {
		return str;
	}

	str = "0" + str;

	return padding(str);
}

const submit_btn = document.getElementById("submit");

window.onload = () => {
	submit_btn.click();
};

submit_btn.addEventListener("click", () => {
	let text = document.getElementById("str").value;

	document.getElementById("output").textContent = `Padded string: ${padding(
		text
	)}`;
});
