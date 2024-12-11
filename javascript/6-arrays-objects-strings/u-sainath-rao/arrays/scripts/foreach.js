const div = document.getElementById("output");

document.getElementById("submit").addEventListener("click", (event) => {
	let input = document.getElementById("input").value;
	input = input.trim();

	try {
		const array = JSON.parse(input);

		array.forEach((element) => {
			let temp = document.createElement("p");
			temp.textContent = `Myself ${element.name}, I am ${element.age}`;

			div.appendChild(temp);
		});
	} catch (error) {
		console.log(error);

		div.textContent =
			"Invalid input. Please enter a valid JSON array or space-separated words.";
	}
});
