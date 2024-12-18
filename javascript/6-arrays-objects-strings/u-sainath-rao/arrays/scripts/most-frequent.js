function mostFrequent(arr = []) {
	if (arr.length === 0) return;

	let map = {};
	let mostFrequentElement = arr[0];
	let maxCount = 1;

	arr.forEach((element) => {
		map[element] = (map[element] || 0) + 1;

		if (map[element] > maxCount) {
			maxCount = map[element];
			mostFrequentElement = element;
		}
	});

	return mostFrequentElement;
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
		let mostFrequent_ele = mostFrequent(input);

		div.textContent = `Most frequent element: ${mostFrequent_ele}`;
	} catch (error) {
		console.log(error);

		div.textContent =
			"Invalid input. Please enter a valid JSON array or space-separated words.";
	}
});
