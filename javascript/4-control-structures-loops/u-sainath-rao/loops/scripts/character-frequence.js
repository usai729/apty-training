function charCount() {
	const text = document.getElementById("text").value;
	const div = document.getElementById("result");
	let frequency = {};

	for (let i = 0; i < text.length; i++) {
		if (frequency[text[i]]) {
			frequency[text[i]]++;
		} else {
			frequency[text[i]] = 1;
		}
	}

	for (key in frequency) {
		let temp_ele = document.createElement("p");

		temp_ele.innerHTML = `Character: ${key} -> ${frequency[key]}`;
		div.appendChild(temp_ele);
	}
}
