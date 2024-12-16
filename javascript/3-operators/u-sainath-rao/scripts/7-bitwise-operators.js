function getValsAndType() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	return { value1, value2, type1, type2 };
}

function bitwiseAnd() {
	const { value1, value2 } = getValsAndType();

	let parsedValue1 = parseInt(value1);
	let parsedValue2 = parseInt(value2);

	let result = parsedValue1 & parsedValue2;
	document.getElementById(
		"output"
	).textContent = `Result of ${parsedValue1} & ${parsedValue2} = ${result}`;
}

function bitwiseOr() {
	const { value1, value2 } = getValsAndType();

	let parsedValue1 = parseInt(value1);
	let parsedValue2 = parseInt(value2);

	let result = parsedValue1 | parsedValue2;
	document.getElementById(
		"output"
	).textContent = `Result of ${parsedValue1} | ${parsedValue2} = ${result}`;
}

function bitwiseXor() {
	const { value1, value2 } = getValsAndType();

	let parsedValue1 = parseInt(value1);
	let parsedValue2 = parseInt(value2);

	let result = parsedValue1 ^ parsedValue2;
	document.getElementById(
		"output"
	).textContent = `Result of ${parsedValue1} ^ ${parsedValue2} = ${result}`;
}

function bitwiseNot() {
	const { value1 } = getValsAndType();

	let parsedValue1 = parseInt(value1);

	let result = ~parsedValue1;
	document.getElementById(
		"output"
	).textContent = `Result of ~${parsedValue1} = ${result}`;
}

function bitwiseLeftShift() {
	const { value1 } = getValsAndType();

	let parsedValue1 = parseInt(value1);

	let result = parsedValue1 << 1;
	document.getElementById(
		"output"
	).textContent = `Result of ${parsedValue1} << 1 = ${result}`;
}

function bitwiseRightShift() {
	const { value1 } = getValsAndType();

	let parsedValue1 = parseInt(value1);

	let result = parsedValue1 >> 1;
	document.getElementById(
		"output"
	).textContent = `Result of ${parsedValue1} >> 1 = ${result}`;
}
