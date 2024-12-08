function repeatAction(max, cb) {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	cb(arr, max);
}

document
	.getElementById("filterForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const max = parseInt(document.getElementById("maxValue").value);
		repeatAction(max, (arr, max) => {
			const new_arr = arr.filter((element) => element <= max);
			document.getElementById(
				"result"
			).innerText = `Filtered Array: ${new_arr}`;
		});
	});
