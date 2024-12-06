function factorial() {
	const num = document.getElementById("factorial-of").value;
	let result = 1;
	let i = 2;

	do {
		result *= i;
		i++;
	} while (i <= num);

	document.getElementById(
		"result"
	).innerHTML = `Factorial of ${num} is ${result}`;
}
