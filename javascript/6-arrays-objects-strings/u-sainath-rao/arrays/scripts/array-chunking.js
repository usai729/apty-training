function chunkArray(arr, size) {
	const chunkedArray = [];

	for (let i = 0; i < arr.length; i += size) {
		chunkedArray.push(arr.slice(i, i + size));
	}

	return chunkedArray;
}

window.onload = () => {
	document.getElementById("submit").click();
};

const div = document.getElementById("output");

document.getElementById("submit").addEventListener("click", (event) => {
	let input = document.getElementById("input").value;
	let chunk = document.getElementById("chunk").value;
	input = input.trim();
	input = JSON.parse(input);

	try {
		div.textContent = JSON.stringify(chunkArray(input, chunk));
	} catch (error) {
		console.log(error);

		div.textContent =
			"Invalid input. Please enter a valid JSON array or space-separated words.";
	}
});
