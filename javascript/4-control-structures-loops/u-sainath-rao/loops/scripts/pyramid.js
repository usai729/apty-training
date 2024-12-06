function generatePyramid() {
	const rows = document.getElementById("rows").value;
	let output = "";

	for (let i = 0; i < rows; i++) {
		output += " ".repeat(rows - i - 1);
		output += "* ".repeat(i + 1);
		output += "\n";
	}

	document.getElementById("pyramidOutput").textContent = output;
}
