window.onload = () => {
	document.getElementById("submit").click();
};

document.getElementById("submit").addEventListener("click", () => {
	const input = document.getElementById("inputArray").value;
	try {
		const numbers = JSON.parse(input);
		const sumOfDoubledEvens = numbers
			.filter((num) => num % 2 === 0)
			.map((num) => num * 2)
			.reduce((sum, num) => sum + num, 0);

		document.getElementById("result").textContent = sumOfDoubledEvens;
	} catch (error) {
		document.getElementById("result").textContent =
			"Invalid input. Please enter a valid array.";
	}
});
