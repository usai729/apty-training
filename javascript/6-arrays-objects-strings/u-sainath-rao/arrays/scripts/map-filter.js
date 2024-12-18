const div = document.getElementById("output");

document.getElementById("submit").addEventListener("click", (event) => {
	let input = document.getElementById("input").value;
	input = input.trim();

	try {
		let array = JSON.parse(input);

		array = array.filter((element) => element.completed);

		array.map((element) => {
			let temp = document.createElement("p");

			temp.textContent = `Map + Filter:> Task - ${element.task}, Completed - ${element.completed}`;
			div.appendChild(temp);
		});
	} catch (error) {
		console.log(error);

		div.textContent =
			"Invalid input. Please enter a valid JSON array or space-separated words.";
	}
});
