function set(arr) {
	let occured = new Array();

	arr.forEach((element, index) => {
		if (occured.includes(element)) {
			delete arr[index];
		} else {
			occured.push(element);
		}
	});
}

window.onload = () => {
	document.getElementById("submit").click();
};

const div = document.getElementById("output");

document.getElementById("submit").addEventListener("click", (event) => {
	let input = document.getElementById("input").value;
	input = input.trim();
	input = JSON.parse(input);

	try {
		set(input);
		input.sort();

		div.textContent = JSON.stringify(
			input.filter((item) => item !== null && item !== undefined && item !== "")
		);
	} catch (error) {
		console.log(error);

		div.textContent =
			"Invalid input. Please enter a valid JSON array or space-separated words.";
	}
});
