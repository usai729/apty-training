function getValsAndType() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	return { value1, value2, type1, type2 };
}

function logicalAnd() {
	const { value1, value2, type1, type2 } = getValsAndType();

	const convertedValue1 = convertToBoolean(value1, type1);
	const convertedValue2 = convertToBoolean(value2, type2);

	if (type1 == "symbol" || type2 == "symbol") {
		console.log(convertedValue1 && convertedValue2);
	}

	const result = convertedValue1 && convertedValue2;
	document.getElementById("output").textContent = `&& : ${result}`;
}

function logicalOr() {
	const { value1, value2, type1, type2 } = getValsAndType();

	const convertedValue1 = convertToBoolean(value1, type1);
	const convertedValue2 = convertToBoolean(value2, type2);

	if (type1 == "symbol" || type2 == "symbol") {
		console.log(convertedValue1 || convertedValue2);
	}

	const result = convertedValue1 || convertedValue2;
	document.getElementById("output").textContent = `|| : ${result}`;
}

function logicalNot() {
	const { value1, type1 } = getValsAndType();

	const convertedValue1 = convertToBoolean(value1, type1);

	if (type1 == "symbol") {
		console.log(!convertedValue1);
	}

	const result = !convertedValue1;
	document.getElementById("output").textContent = `! : ${result}`;
}

function convertToBoolean(value, type) {
	if (type === "boolean") {
		return value.toLowerCase() === "true";
	} else if (type === "number") {
		return Number(value) !== 0;
	} else if (type === "string") {
		return value.trim() !== "";
	} else if (type === "symbol") {
		return Symbol(String(value));
	}
}
