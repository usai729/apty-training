function getValsAndType() {
	const value1 = document.getElementById("value1").value;
	const value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	return { value1, value2, type1, type2 };
}

function logicalAndAssign() {
	const { value1, value2, type1, type2 } = getValsAndType();

	let convertedValue1 = convertToType(value1, type1);
	let convertedValue2 = convertToType(value2, type2);

	if (type1 == "symbol" || type2 == "symbol") {
		console.log((convertedValue1 &&= convertedValue2));
	}

	convertedValue1 &&= convertedValue2;
	document.getElementById("output").textContent = `&&= : ${convertedValue1}`;
}

function logicalOrAssign() {
	const { value1, value2, type1, type2 } = getValsAndType();

	let convertedValue1 = convertToType(value1, type1);
	let convertedValue2 = convertToType(value2, type2);

	if (type1 == "symbol" || type2 == "symbol") {
		console.log((convertedValue1 ||= convertedValue2));
	}

	convertedValue1 ||= convertedValue2;
	document.getElementById("output").textContent = `||= : ${convertedValue1}`;
}

function nullishCoalescingAssign() {
	const { value1, value2, type1, type2 } = getValsAndType();

	let convertedValue1 = convertToType(value1, type1);
	let convertedValue2 = convertToType(value2, type2);

	if (type1 == "symbol" || type2 == "symbol") {
		console.log((convertedValue1 ??= convertedValue2));
	}

	convertedValue1 ??= convertedValue2;
	document.getElementById("output").textContent = `??= : ${convertedValue1}`;
}

function convertToType(value, type) {
	if (type === "boolean") return value.toLowerCase() === "true";
	if (type === "number") return Number(value);
	if (type === "symbol") return Symbol(String(value));
	return value;
}
