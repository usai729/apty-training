function getLastAndFirst(str) {
	return [str[0], str[str.length - 1]];
}

const submit_btn = document.getElementById("submit");

submit_btn.addEventListener("click", () => {
	let text = document.getElementById("str").value;

	document.getElementById(
		"output"
	).textContent = `Last and first characters of "${text}" are ${getLastAndFirst(
		text
	)}`;
});
