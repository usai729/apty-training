function compareEqual() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	const convertedValue1 = convertValue(value1, type1);
	const convertedValue2 = convertValue(value2, type2);

	const result = convertedValue1 == convertedValue2;
	document.getElementById("output").textContent = `== : ${result}`;
}

function compareStrictEqual() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	const convertedValue1 = convertValue(value1, type1);
	const convertedValue2 = convertValue(value2, type2);

	const result = convertedValue1 === convertedValue2;
	document.getElementById("output").textContent = `=== : ${result}`;
}

function compareNotEqual() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	const convertedValue1 = convertValue(value1, type1);
	const convertedValue2 = convertValue(value2, type2);

	const result = convertedValue1 != convertedValue2;
	document.getElementById("output").textContent = `!= : ${result}`;
}

function compareStrictNotEqual() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	const convertedValue1 = convertValue(value1, type1);
	const convertedValue2 = convertValue(value2, type2);

	const result = convertedValue1 !== convertedValue2;
	document.getElementById("output").textContent = `!== : ${result}`;
}

function compareGreaterThan() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	const convertedValue1 = convertValue(value1, type1);
	const convertedValue2 = convertValue(value2, type2);

	const result = convertedValue1 > convertedValue2;
	document.getElementById("output").textContent = `> : ${result}`;
}

function compareLessThan() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	const convertedValue1 = convertValue(value1, type1);
	const convertedValue2 = convertValue(value2, type2);

	const result = convertedValue1 < convertedValue2;
	document.getElementById("output").textContent = `< : ${result}`;
}

function compareGreaterThanOrEqual() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	const convertedValue1 = convertValue(value1, type1);
	const convertedValue2 = convertValue(value2, type2);

	const result = convertedValue1 >= convertedValue2;
	document.getElementById("output").textContent = `>= : ${result}`;
}

function compareLessThanOrEqual() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	const convertedValue1 = convertValue(value1, type1);
	const convertedValue2 = convertValue(value2, type2);

	const result = convertedValue1 <= convertedValue2;
	document.getElementById("output").textContent = `<= : ${result}`;
}

function convertValue(value, type) {
	if (type === "number") {
		return Number(value);
	} else if (type === "boolean") {
		return value.toLowerCase() === "true";
	} else {
		return value;
	}
}
