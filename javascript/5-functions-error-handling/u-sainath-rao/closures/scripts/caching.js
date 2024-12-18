function fibonacci(n) {
	let cache = {};

	if (cache[n]) {
		return cache[n];
	}

	if (n === 0) return 0;
	if (n === 1) return 1;

	cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
	return cache[n];
}

function generateFibonacci() {
	var terms = document.getElementById("number").value;
	var result = "";

	for (var i = 0; i < terms; i++) {
		result += fibonacci(i) + " ";
	}

	document.getElementById("demo").innerText = result;
}
