function gt(ele) {
	return ele > 35;
}

window.onload = () => {
	document.getElementById("submit").click();
};

const div = document.getElementById("output");

document.getElementById("submit").addEventListener("click", (event) => {
	let input = document.getElementById("input").value;
	input = input.trim();
	input = JSON.parse(input);

	let temp = [];

	try {
		let every = document.createElement("p");
		let some = document.createElement("p");

		input.forEach((element) => {
			temp.push(element.score);
		});

		every.textContent = temp.every(gt) ? "All students passed" : "";
		some.textContent = temp.some(gt) ? "Some Students Failed" : "";

		div.appendChild(every);
		div.appendChild(some);
	} catch (error) {
		console.log(error);

		div.textContent =
			"Invalid input. Please enter a valid JSON array or space-separated words.";
	}
});
