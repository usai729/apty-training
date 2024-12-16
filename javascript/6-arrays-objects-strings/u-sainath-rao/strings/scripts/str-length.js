function getLength(str) {
	let count = 0;
	let split_str = str.split(" ");
	let map = {};

	split_str.map((element) => {
		map[element] = element.length;
	});

	return map;
}

const submit_btn = document.getElementById("submit");

submit_btn.addEventListener("click", () => {
	let text = document.getElementById("str").value;

	document.getElementById(
		"output"
	).innerHTML = `Length of words in string "${text}" is <br>${JSON.stringify(
		getLength(text)
	)} characters`;
});
