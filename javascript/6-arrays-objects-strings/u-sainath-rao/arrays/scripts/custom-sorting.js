function sortArray(arr, prop) {
	return arr.sort(function (a, b) {
		if (a[prop] < b[prop]) return 1;
		if (a[prop] > b[prop]) return -1;
		return 0;
	});
}

const div = document.getElementById("output");

document.getElementById("submit").addEventListener("click", (event) => {
	let input = document.getElementById("input").value;
	input = input.trim();
	input = JSON.parse(input);

	try {
		let sorted = sortArray(input, "score");

		div.textContent = JSON.stringify(sorted);
	} catch (error) {
		console.log(error);

		div.textContent =
			"Invalid input. Please enter a valid JSON array or space-separated words.";
	}
});
