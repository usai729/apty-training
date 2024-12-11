const div = document.getElementById("output");

document.getElementById("submit").addEventListener("click", (event) => {
	let input = document.getElementById("input").value;
	input = input.trim();

	try {
		if (input.startsWith("[") && input.endsWith("]")) {
			const parsedInput = JSON.parse(input);

			if (Array.isArray(parsedInput)) {
				div.textContent = parsedInput.slice(0, 3).join(", ");
			} else {
				div.textContent = "Input is not a valid array.";
			}
		} else {
			div.textContent = input.split(" ").slice(0, 3).join(", ");
		}
	} catch (error) {
		div.textContent =
			"Invalid input. Please enter a valid JSON array or space-separated words.";
	}
});
