function checkPrime() {
	let num = parseInt(document.getElementById("num").value);
	const result = document.getElementById("result");

	if (num < 2) {
		result.innerHTML = "Not prime";
	}

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			result.innerHTML = "Not prime";

			return;
		}
	}

	result.innerHTML = "Prime";
}
