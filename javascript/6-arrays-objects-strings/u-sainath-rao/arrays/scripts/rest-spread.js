function combine(arr1, arr2) {
	return [...new Set([...arr1, ...arr2])];
}

document.getElementById("submit").addEventListener("click", () => {
	let input1 = document.getElementById("input1").value;
	let input2 = document.getElementById("input2").value;

	try {
		let arr1 = JSON.parse(input1);
		let arr2 = JSON.parse(input2);

		let result = combine(arr1, arr2);

		document.getElementById("output").textContent = JSON.stringify(result);
	} catch (error) {
		document.getElementById("output").textContent =
			"Invalid input. Please enter valid arrays.";
	}
});
