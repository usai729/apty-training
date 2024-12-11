document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("swapButton").click();
});

document.getElementById("swapButton").addEventListener("click", function () {
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);

	if (isNaN(a) || isNaN(b)) {
		document.getElementById("output").textContent =
			"Please enter valid numbers for both variables.";
		return;
	}

	[a, b] = [b, a];

	document.getElementById("output").textContent = `a = ${a}, b = ${b}`;
});
