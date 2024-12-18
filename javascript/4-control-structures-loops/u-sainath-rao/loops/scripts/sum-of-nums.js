function getSum() {
	let result = 0,
		count = 1;
	const limit = document.getElementById("limit").value;

	while (limit != count) {
		result += count;

		count++;
	}

	document.getElementById("result").textContent = result;
}
